import { Injectable, signal } from '@angular/core';
import { FsExperienceCard } from '@heroelc/fsociety';
import { withTechIcons } from '../icons';

const EXPERIENCES: FsExperienceCard[] = [
    {
      company:   'Xcale Consulting',
      role:      'Frontend Developer',
      startDate: 'abr 2022',
      current:   true,
      logoUrl:   'logos/logoXcale.png',
      logoText:  'XCALE',
      bullets: [
        'Realizo tareas de frontend con Angular.',
        'Desarrollé pequeños scripts en Node.js.',
        'Configuré pipelines, CodeBuild, ECS en AWS y trabajé con buckets S3.',
        'Realicé migraciones de proyectos de Angular versión 8 a la 16.',
        'Configuré y trabajé con Angular Material, FontAwesome, ESLint y Husky.',
        'Corregí bugs y realice mejoras en algunos microservicios Java versión 8 y 21.'
      ],
      bulletsPreview: 3,
      badges: [
        { label: 'Angular',          color: 'danger'    },
        { label: 'TypeScript',       color: 'primary'   },
              { label: 'RxJS',       color: 'tertiary'   },
        { label: 'Angular Material', color: 'neutral'   },
        { label: 'AWS',              color: 'secondary' },
        { label: 'Node.js',          color: 'success'   },
        { label: 'Java', color: 'warning'   },
      ],
    },
    {
      company:   'Acid Labs',
      role:      'Frontend Developer',
      startDate: 'sep 2021',
      endDate:   'abr 2022',
      current:   false,
      logoUrl:   'logos/logo-acid.png',
      logoText:  'ACID',
      bullets: [
        'Realicé tareas de desarrollo frontend con Ionic y Angular para una fintech chilena.',
        'Desarrollé soluciones frontend con Angular para una importante aerolínea.',
        'Utilicé Git y Bitbucket para el control de versiones.',
        'Implementé tests unitarios básicos con Karma y Jasmine.',
      ],
      bulletsPreview: 3,
      badges: [
        { label: 'Angular',  color: 'danger'   },
        { label: 'TypeScript',       color: 'primary'   },
              { label: 'RxJS',       color: 'tertiary'   },
        { label: 'Angular Material', color: 'neutral'   },
        { label: 'Ionic',    color: 'primary'  },
        { label: 'Karma',    color: 'tertiary' },
        { label: 'Jasmine',  color: 'warning'  },
      ],
    },
    {
      company:   'Universidad Católica de Cuyo',
      role:      'Profesor Frontend Developer',
      startDate: 'jul 2021',
      endDate:   'nov 2021',
      current:   false,
      logoUrl: 'logos/logo-universidad-sanjuan.png',
      logoText:  'UCC',
      bullets: [
        'Enseñanza de los principios básicos de JavaScript: variables, funciones, estructuras de control y manipulación del DOM.',
        'Introducción a los conceptos fundamentales de Angular: componentes, servicios y directivas.',
        'Creación de filminas y contenido visual para explicar conceptos complejos de forma accesible.',
        'Apoyo personalizado a los estudiantes, respondiendo dudas y ofreciendo recursos para el autoaprendizaje.',
      ],
      bulletsPreview: 2,
      badges: [
        { label: 'Angular',     color: 'danger'  },
        { label: 'JavaScript',  color: 'warning' },
      ],
    },
    {
      company:   'Technisys',
      role:      'Frontend Developer',
      startDate: 'abr 2021',
      endDate:   'sep 2021',
      current:   false,
      logoUrl:   'logos/technisys.png',
      logoText:  'TECH',
      bullets: [
        'Desarrollé frontend utilizando Ionic y Angular para un importante banco argentino.',
        'Compilé y publiqué aplicaciones móviles para Android y iOS.',
        'Utilicé Git y Bitbucket para el control de versiones.',
      ],
      bulletsPreview: 2,
      badges: [
        { label: 'Angular', color: 'danger'  },
        { label: 'TypeScript',       color: 'primary'   },
        { label: 'RxJS',       color: 'tertiary'   },
        { label: 'Angular Material', color: 'neutral'   },
        { label: 'Ionic',   color: 'primary' },
        { label: 'iOS',     color: 'neutral' },
        { label: 'Android', color: 'success' },
      ],
    },
    {
      company:   'USINA POPULAR Y MUNICIPAL DE TANDIL SEM',
      role:      'Frontend Developer',
      startDate: 'ene 2020',
      endDate:   'abr 2021',
      current:   false,
      logoText:  'UPM',
      logoUrl: 'logos/usina.png',
      bullets: [
        'Desarrollé aplicaciones móviles y web utilizando Ionic y Angular.',
        'Utilicé Git y GitLab para el control de versiones.',
        'Trabajé con HTML, CSS (Bootstrap, Sass), Ionic y JavaScript (Angular y Vanilla).',
        'Utilicé SQL Server y SQLite como bases de datos.',
        'Realicé algunos servicios REST con PHP.',
      ],
      bulletsPreview: 3,
      badges: [
        { label: 'Angular',    color: 'danger'   },
        { label: 'Ionic',      color: 'primary'  },
        { label: 'SQL Server', color: 'tertiary' },
        { label: 'PHP',        color: 'neutral'  },
        { label: 'Bootstrap',  color: 'secondary'},
      ],
    },
];

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  // Badge icons are resolved from the label, so a new badge never needs a URL.
  experiences = signal<FsExperienceCard[]>(
    EXPERIENCES.map((experience) => ({
      ...experience,
      badges: withTechIcons(experience.badges ?? []),
    })),
  );
}
