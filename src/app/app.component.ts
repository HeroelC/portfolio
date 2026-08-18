import { Component, computed, signal, inject } from '@angular/core';
import { FsProfileCardComponent, FsTabsComponent } from '@heroelc/fsociety';
import { ProjectsComponent } from './features/projects/projects.component';
import { AboutComponent } from './features/about/about.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { UI_ICON } from './core/icons';
import { ProfileService } from './core/services/profile.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FsProfileCardComponent,
    FsTabsComponent,
    ProjectsComponent,
    AboutComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private profileService = inject(ProfileService);

  readonly theme = inject(ThemeService);

  profile   = this.profileService.profile;
  activeTab = signal('projects');

  // The icon shows the theme the button switches TO, not the current one, so it
  // reads as an action rather than as a status indicator.
  readonly themeToggleIcon = computed(() =>
    this.theme.isDark() ? UI_ICON.lightMode : UI_ICON.darkMode,
  );

  readonly themeToggleLabel = computed(() =>
    this.theme.isDark() ? 'Activar modo claro' : 'Activar modo oscuro',
  );

  tabs = [
    { id: 'projects',   label: 'Proyectos'   },
    { id: 'experience', label: 'Experiencia' },
    { id: 'about',      label: 'Sobre mí'    },
  ];
}
