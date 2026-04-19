import { Component, signal, computed, inject } from '@angular/core';
import { FsExperienceCardComponent } from '@heroelc/fsociety';
import { ExperienceService } from '../../core/services/experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FsExperienceCardComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  private experienceService = inject(ExperienceService);

  experiences = this.experienceService.experiences;
  showAll     = signal(false);

  toggle() {
    this.showAll.update(v => !v);
  }
}
