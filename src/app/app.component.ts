import { Component, signal, inject } from '@angular/core';
import { FsProfileCardComponent, FsTabsComponent } from '@heroelc/fsociety';
import { ProjectsComponent } from './features/projects/projects.component';
import { AboutComponent } from './features/about/about.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProfileService } from './core/services/profile.service';

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
})
export class AppComponent {
  private profileService = inject(ProfileService);

  profile   = this.profileService.profile;
  activeTab = signal('projects');

  tabs = [
    { id: 'projects',   label: 'Proyectos'   },
    { id: 'experience', label: 'Experiencia' },
    { id: 'about',      label: 'Sobre mí'    },
  ];
}
