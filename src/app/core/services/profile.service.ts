import { Injectable, signal } from '@angular/core';
import { FsProfileBadge } from '@heroelc/fsociety';
import { UI_ICON, withTechIcons } from '../icons';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  profile = signal({
    name:      'Heroel Carpinetti',
    handle:    'heroelc',
    role:      'Frontend Developer Angular',
    avatarUrl: 'https://avatars.githubusercontent.com/u/32722393?v=4',
    bannerUrl:  window.location.origin + '/portfolio/imgs/banner.jpg',
    verified:  true,
    showActions: false,
    links: [
      { label: 'github.com/heroelc',      url: 'https://github.com/heroelc', imgUrl: UI_ICON.github,   imgAlt: 'GitHub'   },
      { label: '-', encodedEmail: 'aGVyb2VsamNhcnBpbmV0dGlAZ21haWwuY29t',    imgUrl: UI_ICON.mail,     imgAlt: 'Email'    },
      { label: 'Tandil, Buenos Aires',                                       imgUrl: UI_ICON.location, imgAlt: 'Location' },
    ],
    badges: withTechIcons([
      { label: 'Angular',          color: 'danger'    },
      { label: 'TypeScript',       color: 'primary'   },
      { label: 'RxJS',             color: 'tertiary'  },
      { label: 'Angular Material', color: 'neutral'   },
      { label: 'AWS',              color: 'secondary' },
    ]) as FsProfileBadge[],
    stats: [
      { value: '6+', label: 'años exp.'  },
      { value: '1', label: 'proyectos'  },
    ],
  });
}
