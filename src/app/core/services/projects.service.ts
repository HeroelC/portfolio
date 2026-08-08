import { Injectable, signal } from '@angular/core';
import { FsBadgeColor, FsCardTone } from '@heroelc/fsociety';
import { TECH_ICON, withTechIcons } from '../icons';

export interface ProjectBadge {
  label:    string;
  color:    FsBadgeColor;
  imgLeft?: string;
}

export type ProjectStatus = 'publicado' | 'en desarrollo' | 'próximo';

/** Tints the card border and adds the status glyph. */
const STATUS_TONE: Record<ProjectStatus, FsCardTone> = {
  'publicado':     'success',
  'en desarrollo': 'warning',
  'próximo':       'info',
};

export interface Project {
  icon:        string;
  /**
   * Overrides the header icon color. `tone` otherwise paints it with the status
   * color, which reads wrong for a brand logo — fs-card exposes no variable for
   * this, so the projects stylesheet applies it.
   */
  iconColor?:  string;
  title:       string;
  description: string;
  status:      ProjectStatus;
  tone?:       FsCardTone;
  badges:      ProjectBadge[];
  stats:       { value: string; label: string }[];
  links: {
    github?:    string;
    storybook?: string;
    npm?:       string;
    demo?:      string;
  };
}

const PROJECTS: Project[] = [
    {
      icon:        TECH_ICON['Angular'],
      // Same red as the Angular badge below it, and it follows the theme.
      iconColor:   'var(--fs-color-error)',
      title:       '@heroelc/fsociety',
      description: 'Librería de componentes Angular con design system propio. Sistema de tokens de color con temas light y dark, mixins SCSS y 33 componentes standalone: formularios (Input, Select, DatePicker, FileUpload), overlays sobre <dialog> nativo (Modal, Drawer, Toast) y estructura (Tabs, Accordion, Card).',
      status:      'publicado',
      badges: [
        { label: 'Angular',    color: 'danger'   },
        { label: 'TypeScript', color: 'primary'  },
        { label: 'SCSS',       color: 'tertiary' },
        { label: 'Storybook',  color: 'secondary'},
        { label: 'npm',        color: 'neutral'  },
      ],
      stats: [
        { value: 'v0.8.0', label: ''            },
        { value: '33',     label: 'componentes' },
        { value: 'MIT',    label: ''            },
      ],
      links: {
        github:    'https://github.com/HeroelC/fsociety',
        storybook: 'https://heroelc.github.io/fsociety',
        npm:       'https://www.npmjs.com/package/@heroelc/fsociety',
      },
    },
];

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  // Badge icons are resolved from the label, so a new badge never needs a URL.
  projects = signal<Project[]>(
    PROJECTS.map((project) => ({
      ...project,
      tone: STATUS_TONE[project.status],
      badges: withTechIcons(project.badges),
    })),
  );
}
