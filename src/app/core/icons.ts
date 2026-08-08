/**
 * Single source of truth for the icon URLs consumed by fsociety components.
 *
 * Two constraints drive every entry here:
 *
 * 1. The library paints icons with `mask-image` and `currentColor`, so URLs must
 *    stay color-less. A `?color=` suffix is ignored and only defeats theming.
 * 2. Only the silhouette survives the mask, so the source set must be monochrome.
 *    Multicolor sets such as `logos:*` collapse into a solid blob — that is why
 *    Karma uses `devicon-plain` rather than `logos:karma`.
 */
const ICON_CDN = 'https://api.iconify.design';

const icon = (name: string): string => `${ICON_CDN}/${name}.svg`;

/** Icons for the profile card contact links. */
export const UI_ICON = {
  github: icon('simple-icons:github'),
  mail: icon('material-symbols:mail'),
  location: icon('material-symbols:location-on'),
} as const;

/**
 * Badge icons keyed by the exact badge label used across the app.
 * A label with no entry simply renders without an icon.
 */
export const TECH_ICON: Record<string, string> = {
  Angular: icon('simple-icons:angular'),
  'Angular Material': icon('simple-icons:materialdesign'),
  TypeScript: icon('simple-icons:typescript'),
  JavaScript: icon('simple-icons:javascript'),
  RxJS: icon('simple-icons:reactivex'),
  'Node.js': icon('simple-icons:nodedotjs'),
  // `simple-icons:java` does not exist — the trademark is not redistributable.
  Java: icon('simple-icons:openjdk'),
  AWS: icon('simple-icons:amazonaws'),
  SCSS: icon('simple-icons:sass'),
  Storybook: icon('simple-icons:storybook'),
  npm: icon('simple-icons:npm'),
  Ionic: icon('simple-icons:ionic'),
  Karma: icon('devicon-plain:karma'),
  Jasmine: icon('simple-icons:jasmine'),
  iOS: icon('simple-icons:ios'),
  Android: icon('simple-icons:android'),
  'SQL Server': icon('simple-icons:microsoftsqlserver'),
  PHP: icon('simple-icons:php'),
  Bootstrap: icon('simple-icons:bootstrap'),
};

/**
 * Fills `imgLeft` on every badge from its label, so adding a badge anywhere in
 * the app picks up its icon automatically instead of repeating the URL.
 */
export function withTechIcons<T extends { label: string }>(
  badges: readonly T[],
): (T & { imgLeft?: string })[] {
  return badges.map((badge) => ({ ...badge, imgLeft: TECH_ICON[badge.label] }));
}
