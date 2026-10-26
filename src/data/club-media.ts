export type ClubMediaKind = 'local' | 'link' | 'embed';

export type ClubMediaItem = {
  id: string;
  kind: ClubMediaKind;
  title: string;
  kicker?: string;
  caption?: string;
  alt?: string;
  href?: string;
  embedUrl?: string;
  localPath?: string;
  localReady?: boolean;
  featured: boolean;
  showInInstagramBlock?: boolean;
  sourceDate?: string;
};

export const clubMedia: ClubMediaItem[] = [
  {
    id: 'gbl-2026',
    kind: 'embed',
    kicker: 'Garudaone Basketball League 2026',
    title: 'Sola Sport BSD · 4 Oktober – 7 November 2026',
    caption: 'GBL 2026 · Sola Sport BSD, 4 Oktober–7 November 2026.',
    href: 'https://www.instagram.com/p/Dd0Ai8dPZQV/',
    embedUrl: 'https://www.instagram.com/p/Dd0Ai8dPZQV/embed/',
    sourceDate: '28 September 2026',
    featured: true,
    showInInstagramBlock: true,
  },
  {
    id: 'ku14-black-yellow',
    kind: 'link',
    kicker: 'Tim KU14',
    title: 'KU14 Putra · Black × Yellow',
    caption: 'Five on the court, one heart in the game.',
    href: 'https://www.instagram.com/p/DetkSohn2ZT/',
    localPath: 'media/ku14-black-yellow.jpg',
    localReady: true,
    alt: 'Foto tim KU14 Putra Black dan Yellow, Garudaone Basketball',
    featured: true,
    showInInstagramBlock: true,
  },
  {
    id: 'kejurkot-ku10-2026',
    kind: 'link',
    kicker: 'Prestasi',
    title: 'Perak Kejurkot Tangsel 2026',
    caption: 'KU10 Mix',
    href: 'https://www.instagram.com/p/DcGkfiBH1rk/',
    localPath: 'media/kejurkot-ku10-2026.jpg',
    localReady: true,
    alt: 'Dokumentasi prestasi KU10 Mix Kejurkot Tangsel 2026',
    featured: true,
    showInInstagramBlock: true,
  },
  {
    id: 'reel-latihan',
    kind: 'link',
    kicker: 'Reels',
    title: 'Suasana latihan',
    caption: 'Cuplikan latihan dari reels @garudaonebasketball.',
    href: 'https://www.instagram.com/reel/DeyCMv3PfLn/',
    localPath: 'media/reel-latihan-cover.jpg',
    localReady: true,
    alt: 'Thumbnail reels latihan Garudaone Basketball',
    featured: true,
  },
];

export function isRenderableMedia(item: ClubMediaItem): boolean {
  if (item.kind === 'local') {
    return Boolean(item.localReady && item.localPath);
  }
  if (item.kind === 'link') {
    return Boolean(item.href);
  }
  return Boolean(item.embedUrl || item.href);
}

export function featuredClubMedia(): ClubMediaItem[] {
  return clubMedia.filter((item) => item.featured && isRenderableMedia(item));
}

export function instagramBlockFacts(): ClubMediaItem[] {
  return clubMedia.filter((item) => item.showInInstagramBlock && item.id !== 'kejurkot-ku10-2026' && isRenderableMedia(item));
}

export function instagramBlockEmbed(): ClubMediaItem | undefined {
  return clubMedia.find((item) => item.showInInstagramBlock && item.kind === 'embed' && item.embedUrl);
}

export function instagramAchievement(): ClubMediaItem | undefined {
  return clubMedia.find((item) => item.id === 'kejurkot-ku10-2026');
}
