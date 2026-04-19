import { Component, inject } from '@angular/core';
import { ProjectsService, Project } from '../../core/services/projects.service';
import { FsBadgeComponent } from '@heroelc/fsociety';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FsBadgeComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private projectsService = inject(ProjectsService);
  projects = this.projectsService.projects;
}
