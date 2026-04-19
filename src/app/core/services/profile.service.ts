import { Injectable, signal } from '@angular/core';
import { FsProfileBadge } from '@heroelc/fsociety';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  profile = signal({
    name:      'Heroel Carpinetti',
    handle:    'heroelc',
    role:      'Frontend Developer Angular',
    avatarUrl: 'https://avatars.githubusercontent.com/u/32722393?v=4',
    bannerUrl: '/imgs/banner.jpg',
    verified:  true,
    showActions: false,
    links: [
      { label: 'github.com/heroelc',      url: 'https://github.com/heroelc', imgUrl: 'https://api.iconify.design/mdi:github.svg?color=%23888888' },
      { label: 'heroeljcarpinetti@gmail.com', url: 'mailto:heroeljcarpinetti@gmail.com', imgUrl: 'https://api.iconify.design/material-symbols:mail.svg?color=%23888888' },
      { label: 'Tandil, Buenos Aires', imgUrl: 'https://api.iconify.design/material-symbols:location-on.svg?color=%23888888' },
    ],
    badges: [
      { label: 'Angular',    color: 'danger' },
      { label: 'TypeScript', color: 'primary' },
      { label: 'RxJS',       color: 'tertiary' },
      { label: 'Angular Material', color: 'neutral'   },
      { label: 'AWS',        color: 'secondary'  },

    ] as FsProfileBadge[],
    stats: [
      { value: '6+', label: 'años exp.'  },
      { value: '1', label: 'proyectos'  },
    ],
  });
}
