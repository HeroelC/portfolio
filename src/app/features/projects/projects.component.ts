import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../core/services/projects.service';
import { FsBadgeComponent, FsCardComponent } from '@heroelc/fsociety';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FsBadgeComponent, FsCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private projectsService = inject(ProjectsService);
  projects = this.projectsService.projects;
}
