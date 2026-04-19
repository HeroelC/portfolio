import { Component } from '@angular/core';
import { FsButtonComponent, FsExperienceCardComponent } from '@heroelc/fsociety';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FsExperienceCardComponent, FsButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  education = {
    company:   'Universidad Nacional del Centro',
    role:      'Técnico Universitario en Desarrollo de Aplicaciones Informáticas',
    startDate: 'ene 2018',
    endDate:   'jul 2020',
    current:   false,
    logoText:  'UNICEN',
    bullets:   [],
  };

  openNpmPage() {
    window.open('https://www.npmjs.com/package/@heroelc/fsociety', '_blank', 'noopener,noreferrer');
  }
}
