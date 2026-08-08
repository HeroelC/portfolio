import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FsProfileCardComponent, FsSwitchComponent, FsTabsComponent } from '@heroelc/fsociety';
import { ProjectsComponent } from './features/projects/projects.component';
import { AboutComponent } from './features/about/about.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProfileService } from './core/services/profile.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    FsProfileCardComponent,
    FsSwitchComponent,
    FsTabsComponent,
    ProjectsComponent,
    AboutComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private profileService = inject(ProfileService);

  readonly theme = inject(ThemeService);

  profile   = this.profileService.profile;
  activeTab = signal('projects');

  tabs = [
    { id: 'projects',   label: 'Proyectos'   },
    { id: 'experience', label: 'Experiencia' },
    { id: 'about',      label: 'Sobre mí'    },
  ];
}
