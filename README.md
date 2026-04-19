# portfolio

> Portfolio personal desarrollado con Angular 19 consumiendo [@heroelc/fsociety](https://www.npmjs.com/package/@heroelc/fsociety) — mi librería de componentes UI open source.

[![Angular](https://img.shields.io/badge/Angular-19%2B-red?style=flat-square&logo=angular)](https://angular.io)
[![Built with fsociety](https://img.shields.io/badge/UI-@heroelc%2Ffsociety-2563eb?style=flat-square)](https://www.npmjs.com/package/@heroelc/fsociety)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

---

## Tecnologías

- **Angular 19** — standalone components, signals, inject()
- **@heroelc/fsociety** — design system y componentes UI propios
- **SCSS** — tokens de diseño vía CSS custom properties
- **TypeScript** — tipado estricto

---

## Estructura

```
portfolio/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   └── services/
│   │   │       ├── profile.service.ts       # Datos del perfil
│   │   │       ├── experience.service.ts    # Experiencia laboral
│   │   │       └── projects.service.ts      # Proyectos
│   │   │
│   │   ├── features/
│   │   │   ├── projects/                    # Página principal con proyectos
│   │   │   ├── experience/                  # Timeline de experiencia
│   │   │   └── about/                       # Bio y formación
│   │   │
│   │   ├── app.component.ts                 # ProfileCard + Tabs + Switch
│   │   ├── app.component.html
│   │   └── app.config.ts
│   │
│   └── styles/
│       └── styles.scss                      # Tokens de @heroelc/fsociety
│
├── angular.json
└── package.json
```

---

## Componentes de la librería utilizados

| Componente | Sección | Uso |
|---|---|---|
| `<fs-profile-card>` | App | Header con info, stats y links |
| `<fs-tabs>` | App | Navegación entre secciones |
| `<fs-experience-card>` | Experience | Timeline de experiencia laboral |
| `<fs-experience-card>` | About | Card de formación académica |
| `<fs-badge>` | Projects | Tags de tecnologías por proyecto |
| `<fs-button>` | Projects | Links a GitHub, Storybook y npm |
| `<fs-alert>` | — | Feedback en formularios (próximo) |

---

## Instalación y desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/heroelc/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Levantar en modo desarrollo
ng serve
# → http://localhost:4200
```

---

## Scripts disponibles

```bash
ng serve          # Servidor de desarrollo
ng build          # Build de producción
ng build --watch  # Build en modo watch
```

---

## Secciones

### Proyectos
Página principal del portfolio. Muestra los proyectos personales y open source con descripción, stack tecnológico y links a GitHub, Storybook o npm.

### Experiencia
Timeline completo de experiencia laboral con bullets expandibles, duración calculada automáticamente y badges de tecnologías.

### Sobre mí
Bio profesional y formación académica (UNICEN — Técnico Universitario en Desarrollo de Aplicaciones Informáticas).

---

## Proyectos destacados

### [@heroelc/fsociety](https://www.npmjs.com/package/@heroelc/fsociety)
Librería de componentes Angular open source con design system propio. Incluye sistema de tokens de color con 10 stops automáticos, mixins SCSS y componentes standalone: Button, Badge, Tabs, Alert, ExperienceCard y ProfileCard.

- [GitHub](https://github.com/HeroelC/fsociety)
- [Storybook](https://heroelc.github.io/fsociety)
- [npm](https://www.npmjs.com/package/@heroelc/fsociety)

---

## Licencia

[MIT](LICENSE) © [Heroel Carpinetti](https://github.com/heroelc)
