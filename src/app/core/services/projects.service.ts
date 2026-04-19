import { Injectable, signal } from '@angular/core';
import { FsBadgeColor } from '@heroelc/fsociety';

export interface Project {
  logo:        string;
  title:       string;
  description: string;
  status:      'publicado' | 'en desarrollo' | 'próximo';
  badges:      { label: string; color: FsBadgeColor }[];
  stats:       { value: string; label: string }[];
  links: {
    github?:    string;
    storybook?: string;
    npm?:       string;
    demo?:      string;
  };
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  projects = signal<Project[]>([
    {
      logo:        'FS',
      title:       '@heroelc/fsociety',
      description: 'Librería de componentes Angular con design system propio. Incluye sistema de tokens de color, mixins SCSS y componentes standalone como Button, Badge, Tabs, Alert, ExperienceCard y ProfileCard.',
      status:      'publicado',
      badges: [
        { label: 'Angular',    color: 'danger'   },
        { label: 'TypeScript', color: 'primary'  },
        { label: 'SCSS',       color: 'tertiary' },
        { label: 'Storybook',  color: 'secondary'},
        { label: 'npm',        color: 'neutral'  },
      ],
      stats: [
        { value: 'v0.0.x', label: ''            },
        { value: '6',      label: 'componentes' },
        { value: 'MIT',    label: ''            },
      ],
      links: {
        github:    'https://github.com/HeroelC/fsociety',
        storybook: 'https://heroelc.github.io/fsociety',
        npm:       'https://www.npmjs.com/package/@heroelc/fsociety',
      },
    },
  ]);
}
