import { Injectable, computed, effect, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';
const DEFAULT_THEME: AppTheme = 'dark';

/**
 * Owns the `data-theme` attribute the fsociety design system reads from the
 * document root. Every `--fs-color-*` token is defined under `[data-theme="light"]`
 * and `[data-theme="dark"]`, so flipping this attribute re-themes the whole app.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _theme = signal<AppTheme>(readStoredTheme());

  readonly theme = this._theme.asReadonly();

  /** Boolean view of the theme, for controls that toggle rather than pick. */
  readonly isDark = computed(() => this._theme() === 'dark');

  constructor() {
    effect(() => {
      const theme = this._theme();
      document.documentElement.setAttribute('data-theme', theme);
      writeStoredTheme(theme);
    });
  }

  setDark(isDark: boolean): void {
    this._theme.set(isDark ? 'dark' : 'light');
  }

  toggle(): void {
    this.setDark(!this.isDark());
  }
}

function readStoredTheme(): AppTheme {
  // Storage access throws when cookies are blocked or in some private modes.
  // A portfolio gets opened on unknown devices, so a failure here must not
  // take the whole app down — fall back to the default theme instead.
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

function writeStoredTheme(theme: AppTheme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Preference simply does not survive a reload — not worth breaking render.
  }
}
