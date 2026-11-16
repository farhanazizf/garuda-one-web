export type ClubMediaKind = 'local' | 'link' | 'embed';

export type ClubMediaItem = {
  id: string;
  kind: ClubMediaKind;
  title: string;
  titleEn?: string;
  kicker?: string;
  kickerEn?: string;
  caption?: string;
  captionEn?: string;
  alt?: string;
  altEn?: string;
  href?: string;
  embedUrl?: string;
  localPath?: string;
  localReady?: boolean;
  featured: boolean;
  /** Prestasi/juara — tidak masuk section aktivitas latihan & pertandingan */
  achievement?: boolean;
  /** Default prestasi: contain (poster IG). Foto tim: cover. */
  thumbFit?: 'cover' | 'contain';
  featuredAchievement?: boolean;
  showInInstagramBlock?: boolean;
  sourceDate?: string;
  sourceDateEn?: string;
  /** Override frame CSS aspect-ratio bila preview IG bukan 4:5 (mis. 1:1). */
  previewFrame?: string;
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
    localPath: 'media/gbl-2026-poster.png',
    localReady: true,
    alt: 'Poster Garudaone Basketball League 2026 — Sola Sport BSD, Oktober–November 2026',
    sourceDate: '28 September 2026',
    featured: true,
    showInInstagramBlock: true,
  },
  {
    id: 'friendly-match-ku14-galaxy-star-2026-11',
    kind: 'link',
    kicker: 'Latihan tanding · KU14 Putra',
    kickerEn: 'Friendly match · KU14 Boys',
    title: 'KU14 Putra vs Galaxy Star Bogor',
    titleEn: 'KU14 Boys vs Galaxy Star Bogor',
    caption: 'Pertandingan persahabatan untuk menambah pengalaman bertanding.',
    captionEn: 'A friendly game to build the squad’s experience on court.',
    href: 'https://www.instagram.com/garudaonebasketball/reel/DfyOG-Yvrqf/',
    localPath: 'media/friendly-match-ku14-vs-galaxy-star-2026-11.jpg',
    localReady: true,
    alt: 'Tim KU14 Putra Garuda One bersiap untuk latihan tanding melawan Galaxy Star Bogor.',
    altEn: 'Garuda One KU14 boys prepare for their friendly match against Galaxy Star Bogor.',
    featured: true,
    sourceDate: '15 November 2026',
    sourceDateEn: 'November 15, 2026',
  },
  {
    id: 'friendly-match-ku10-mix-galaxy-star-2026-11',
    kind: 'link',
    kicker: 'Latihan tanding · KU10 Mix',
    kickerEn: 'Friendly match · KU10 Mixed',
    title: 'KU10 Mix vs Galaxy Star Bogor',
    titleEn: 'KU10 Mixed vs Galaxy Star Bogor',
    caption: 'Pertandingan persahabatan untuk menambah pengalaman bertanding.',
    captionEn: 'A friendly game to build the squad’s experience on court.',
    href: 'https://www.instagram.com/garudaonebasketball/reel/DfyNMt3PcjF/',
    localPath: 'media/friendly-match-ku10-mix-vs-galaxy-star-2026-11.jpg',
    localReady: true,
    alt: 'Tim KU10 Mix Garuda One berkumpul sebelum latihan tanding melawan Galaxy Star Bogor.',
    altEn: 'Garuda One KU10 mixed team huddle before their friendly match against Galaxy Star Bogor.',
    featured: true,
    sourceDate: '15 November 2026',
    sourceDateEn: 'November 15, 2026',
  },
  {
    id: 'gbl-2026-ku16-champions',
    kind: 'link',
    kicker: 'Juara · KU16 Putra',
    kickerEn: 'Champions · KU16 Boys',
    title: 'GBL 2.0 2026 · KU16 Putra',
    titleEn: 'GBL 2.0 2026 · KU16 Boys',
    caption: 'Medali emas — kampiun Garudaone Basketball League 2.0.',
    captionEn: 'Gold medalists at the Garudaone Basketball League 2.0.',
    href: 'https://www.instagram.com/garudaonebasketball/p/DflewmAnxpt/',
    localPath: 'media/gbl-2026-ku16-champions.jpg',
    localReady: true,
    alt: 'Tim KU16 Putra Garuda One Basketball merayakan gelar juara GBL 2.0 2026.',
    altEn: 'Garuda One Basketball KU16 boys celebrate their GBL 2.0 2026 championship.',
    featured: false,
    achievement: true,
    featuredAchievement: true,
    previewFrame: '1 / 1',
    sourceDate: '11 November 2026',
    sourceDateEn: 'November 11, 2026',
  },
  {
    id: 'gbl-2026-ku10-runner-up',
    kind: 'link',
    kicker: 'Runner-up · KU10 Mix',
    kickerEn: 'Runner-up · KU10 Mixed',
    title: 'GBL 2.0 2026 · KU10 Mix',
    titleEn: 'GBL 2.0 2026 · KU10 Mixed',
    caption: 'Medali perak — posisi kedua pada GBL 2.0 2026.',
    captionEn: 'Silver medalists — second place at GBL 2.0 2026.',
    href: 'https://www.instagram.com/garudaonebasketball/p/DfldPX8n3Cu/',
    localPath: 'media/gbl-2026-ku10-runner-up.jpg',
    localReady: true,
    alt: 'Tim KU10 Mix Garuda One Basketball menerima medali runner-up GBL 2.0 2026.',
    altEn: 'Garuda One Basketball KU10 mixed team receive their GBL 2.0 2026 runner-up medals.',
    featured: false,
    achievement: true,
    featuredAchievement: true,
    previewFrame: '1 / 1',
    sourceDate: '11 November 2026',
    sourceDateEn: 'November 11, 2026',
  },
  {
    id: 'gbl-2026-ku12-putri-runner-up',
    kind: 'link',
    kicker: 'Runner-up · KU12 Putri',
    kickerEn: 'Runner-up · KU12 Girls',
    title: 'GBL 2.0 2026 · KU12 Putri',
    titleEn: 'GBL 2.0 2026 · KU12 Girls',
    caption: 'Medali perak — posisi kedua pada GBL 2.0 2026.',
    captionEn: 'Silver medalists — second place at GBL 2.0 2026.',
    href: 'https://www.instagram.com/garudaonebasketball/p/Dflbbw_H246/',
    localPath: 'media/gbl-2026-ku12-putri-runner-up.jpg',
    localReady: true,
    alt: 'Tim KU12 Putri Garuda One Basketball merayakan posisi runner-up GBL 2.0 2026.',
    altEn: 'Garuda One Basketball KU12 girls celebrate their GBL 2.0 2026 runner-up finish.',
    featured: false,
    achievement: true,
    featuredAchievement: true,
    previewFrame: '1 / 1',
    sourceDate: '10 November 2026',
    sourceDateEn: 'November 10, 2026',
  },
  {
    id: 'gbl-2026-ku14-third-place',
    kind: 'link',
    kicker: 'Peringkat Ketiga · KU14 Putra',
    kickerEn: 'Third Place · KU14 Boys',
    title: 'GBL 2.0 2026 · KU14 Putra',
    titleEn: 'GBL 2.0 2026 · KU14 Boys',
    caption: 'Medali perunggu — posisi ketiga di GBL 2.0 2026.',
    captionEn: 'Bronze medalists — third place at GBL 2.0 2026.',
    href: 'https://www.instagram.com/garudaonebasketball/p/DflarcAHxic/',
    localPath: 'media/gbl-2026-ku14-third-place.jpg',
    localReady: true,
    alt: 'Tim KU14 Putra Garuda One Basketball merayakan peringkat ketiga GBL 2.0 2026.',
    altEn: 'Garuda One Basketball KU14 boys celebrate their third-place GBL 2.0 2026 finish.',
    featured: false,
    achievement: true,
    featuredAchievement: true,
    previewFrame: '1 / 1',
    sourceDate: '10 November 2026',
    sourceDateEn: 'November 10, 2026',
  },
  {
    id: 'rising-league-ku15',
    kind: 'link',
    kicker: 'Juara',
    title: 'Champions Rising League 2026 · KU15 Putra',
    caption: 'Tim KU15 Putra — juara Rising League 2026.',
    href: 'https://www.instagram.com/p/DcH_nbRHyI1/',
    localPath: 'media/rising-league-2025.jpg',
    localReady: true,
    alt: 'Juara KU15 Putra Rising League Garudaone Basketball',
    featured: false,
    achievement: true,
    featuredAchievement: true,
    thumbFit: 'cover',
    sourceDate: 'Agustus 2026',
  },
  {
    id: 'kejurkot-ku10-2026',
    kind: 'link',
    kicker: 'Perak',
    title: 'Kejurkot Tangsel 2026 · KU10 Mix',
    caption: 'Medali perak — KU10 Mix.',
    href: 'https://www.instagram.com/p/DcGkfiBH1rk/',
    localPath: 'media/kejurkot-ku10-2026.jpg',
    localReady: true,
    alt: 'Perak KU10 Mix Kejurkot Tangsel 2026 Garudaone Basketball',
    featured: false,
    achievement: true,
    featuredAchievement: true,
    thumbFit: 'cover',
    sourceDate: 'Agustus 2026',
  },
  {
    id: 'mjbl-ku10-juara-2026',
    kind: 'link',
    kicker: 'Juara',
    title: 'MJBL Tournament 2026 · KU10 Mix',
    caption: 'Juara MJBL Tournament 2026.',
    href: 'https://www.instagram.com/p/DaH4FmNn2dg/',
    localPath: 'media/ach-mjbl-ku10-juara-2026.jpg',
    localReady: true,
    alt: 'Juara MJBL KU10 Mix Garudaone Basketball',
    featured: false,
    achievement: true,
    featuredAchievement: true,
    sourceDate: 'Juni 2026',
  },
  {
    id: 'mjbl-ku14-perak-2026',
    kind: 'link',
    kicker: 'Perak',
    title: 'MJBL Tournament 2026 · KU14 Putra',
    caption: 'Runner-up / perak MJBL Tournament 2026.',
    href: 'https://www.instagram.com/p/DaISDy1n0D0/',
    localPath: 'media/ach-mjbl-ku14-perak-2026.jpg',
    localReady: true,
    alt: 'Perak MJBL KU14 Putra Garudaone Basketball',
    featured: false,
    achievement: true,
    featuredAchievement: true,
    sourceDate: 'Juni 2026',
  },
  {
    id: 'dreamers-ku14-perunggu-2026',
    kind: 'link',
    kicker: 'Perunggu',
    title: 'Dreamers Cup 2026 · KU14 Putra',
    caption: 'Perunggu Dreamers Cup 2026.',
    href: 'https://www.instagram.com/p/DaIH_6vn9-d/',
    localPath: 'media/ach-dreamers-ku14-perunggu-2026.jpg',
    localReady: true,
    alt: 'Perunggu Dreamers Cup KU14 Putra Garudaone Basketball',
    featured: false,
    achievement: true,
    featuredAchievement: true,
    sourceDate: 'Juni 2026',
  },
  {
    id: 'dreamers-ku9-perak-2026',
    kind: 'link',
    kicker: 'Perak',
    title: 'Dreamers Cup 2026 · KU9 Mix',
    caption: 'Perak Dreamers Cup 2026.',
    href: 'https://www.instagram.com/p/DaJqCIonzRq/',
    localPath: 'media/ach-dreamers-ku9-perak-2026.jpg',
    localReady: true,
    alt: 'Perak Dreamers Cup KU9 Mix Garudaone Basketball',
    featured: false,
    achievement: true,
    featuredAchievement: true,
    sourceDate: 'Juni 2026',
  },
  {
    id: 'runner-up-southern-2026',
    kind: 'link',
    kicker: 'Runner-up',
    title: 'Southern League · tim putra',
    caption: 'Runner-up — tumbuh bareng sebagai tim.',
    href: 'https://www.instagram.com/p/DYv0Xl4H2TJ/',
    localPath: 'media/runner-up-southern-2026.jpg',
    localReady: true,
    alt: 'Runner-up Southern League Garudaone Basketball',
    featured: false,
    achievement: true,
    featuredAchievement: false,
    thumbFit: 'cover',
    sourceDate: 'Mei 2026',
  },
  {
    id: 'hope-ku15-perak-2026',
    kind: 'link',
    kicker: 'Perak',
    title: 'Hope Festival 2026 · KU15 Putra',
    href: 'https://www.instagram.com/p/DTt0o7LDzdi/',
    localPath: 'media/ach-hope-ku15-perak-2026.jpg',
    localReady: true,
    alt: 'Perak Hope Festival KU15 Putra Garudaone Basketball',
    featured: false,
    achievement: true,
    featuredAchievement: false,
    previewFrame: '1 / 1',
    sourceDate: 'Januari 2026',
  },
  {
    id: 'hope-ku10-perak-2026',
    kind: 'link',
    kicker: 'Perak',
    title: 'Hope Festival 2026 · KU10 Mix',
    href: 'https://www.instagram.com/p/DTtzH-ODzlL/',
    localPath: 'media/ach-hope-ku10-perak-2026.jpg',
    localReady: true,
    alt: 'Perak Hope Festival KU10 Mix Garudaone Basketball',
    featured: false,
    achievement: true,
    featuredAchievement: false,
    previewFrame: '1 / 1',
    sourceDate: 'Januari 2026',
  },
  {
    id: 'gbl2025-ku10-perak',
    kind: 'link',
    kicker: 'Perak',
    title: 'GBL 2025 · KU10 Mix',
    href: 'https://www.instagram.com/p/DRJaEyakWV3/',
    localPath: 'media/ach-gbl2025-ku10-perak.jpg',
    localReady: true,
    alt: 'Perak GBL 2025 KU10 Mix Garudaone Basketball',
    featured: false,
    achievement: true,
    featuredAchievement: false,
    previewFrame: '1 / 1',
    sourceDate: 'November 2025',
  },
  {
    id: 'gbl2025-ku12pi-perunggu',
    kind: 'link',
    kicker: 'Perunggu',
    title: 'GBL 2025 · KU12 Putri',
    href: 'https://www.instagram.com/p/DRJyyGiEepD/',
    localPath: 'media/ach-gbl2025-ku12pi-perunggu.jpg',
    localReady: true,
    alt: 'Perunggu GBL 2025 KU12 Putri Garudaone Basketball',
    featured: false,
    achievement: true,
    featuredAchievement: false,
    previewFrame: '1 / 1',
    sourceDate: 'November 2025',
  },
  {
    id: 'gbl2025-ku14-perunggu',
    kind: 'link',
    kicker: 'Perunggu',
    title: 'GBL 2025 · KU14 Putra',
    href: 'https://www.instagram.com/p/DRKgSd6kp43/',
    localPath: 'media/ach-gbl2025-ku14-perunggu.jpg',
    localReady: true,
    alt: 'Perunggu GBL 2025 KU14 Putra Garudaone Basketball',
    featured: false,
    achievement: true,
    featuredAchievement: false,
    previewFrame: '1 / 1',
    sourceDate: 'November 2025',
  },
  {
    id: 'reel-gbl-teaser',
    kind: 'link',
    kicker: 'MSI Tournament',
    title: 'KU14 Putra Black vs Warriors',
    caption: 'Cuplikan pertandingan MSI Tournament.',
    href: 'https://www.instagram.com/reel/Dd0bkreJqlR/',
    localPath: 'media/reel-gbl-teaser.jpg',
    localReady: true,
    alt: 'Reels pertandingan KU14 Putra Black Garudaone Basketball',
    featured: false,
  },
  {
    id: 'reel-momentum',
    kind: 'link',
    kicker: 'Turnamen 3×3',
    title: 'DRY Tournament · KU10 Mix',
    caption: 'Semangat tim di turnamen 3×3.',
    href: 'https://www.instagram.com/reel/DdnRzwnTj4s/',
    localPath: 'media/reel-momentum.jpg',
    localReady: true,
    alt: 'Reels turnamen 3x3 KU10 Mix Garudaone Basketball',
    featured: true,
  },
  {
    id: 'reel-game-day',
    kind: 'link',
    kicker: 'Friendly match',
    title: 'KU14 Putra vs Flamingos',
    caption: 'Pertandingan persahabatan penuh energi.',
    href: 'https://www.instagram.com/reel/DdkoEQiP_ce/',
    localPath: 'media/reel-game-day.jpg',
    localReady: true,
    alt: 'Reels friendly match KU14 Putra Garudaone Basketball',
    featured: true,
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
    id: 'parent-relation',
    kind: 'link',
    kicker: 'Orang tua & klub',
    title: 'Apresiasi untuk orang tua di lapangan',
    caption: 'Sehat-sehat untuk semua penikmat pertandingan — sampai jumpa di momen lapangan berikutnya.',
    href: 'https://www.instagram.com/p/DbTZkURnzfi/',
    localPath: 'media/parent-relation-2026.jpg',
    localReady: true,
    alt: 'Postingan apresiasi orang tua dan penonton Garudaone Basketball',
    featured: true,
    previewFrame: '1 / 1',
    sourceDate: 'Juli 2026',
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
  {
    id: 'reel-pertandingan',
    kind: 'link',
    kicker: 'Reels',
    title: 'Highlight pertandingan',
    caption: 'Momen di lapangan dari reels klub.',
    href: 'https://www.instagram.com/reel/DewPr2iPggQ/',
    localPath: 'media/reel-pertandingan-cover.jpg',
    localReady: true,
    alt: 'Thumbnail reels pertandingan Garudaone Basketball',
    featured: true,
  },
  {
    id: 'reel-court-energy',
    kind: 'link',
    kicker: 'Reels',
    title: 'Energi di lapangan',
    href: 'https://www.instagram.com/reel/Devnfo-vbwK/',
    localPath: 'media/reel-court-energy.jpg',
    localReady: true,
    alt: 'Reels energi latihan Garudaone Basketball',
    featured: false,
  },
  {
    id: 'reel-team-spirit',
    kind: 'link',
    kicker: 'Reels',
    title: 'Semangat tim',
    href: 'https://www.instagram.com/reel/DewPMKav2k-/',
    localPath: 'media/reel-team-spirit.jpg',
    localReady: true,
    alt: 'Reels semangat tim Garudaone Basketball',
    featured: false,
  },
  {
    id: 'reel-skill-work',
    kind: 'link',
    kicker: 'Reels',
    title: 'Drill & skill work',
    href: 'https://www.instagram.com/reel/DeaohOxP6ho/',
    localPath: 'media/reel-skill-work.jpg',
    localReady: true,
    alt: 'Reels drill basket Garudaone Basketball',
    featured: false,
  },
  {
    id: 'reel-highlights',
    kind: 'link',
    kicker: 'Reels',
    title: 'Highlight klip',
    href: 'https://www.instagram.com/reel/DcHaZXOTHyp/',
    localPath: 'media/reel-highlights.jpg',
    localReady: true,
    alt: 'Reels highlight Garudaone Basketball',
    featured: false,
  },
  {
    id: 'tim-ku12-msi',
    kind: 'link',
    kicker: 'MSI Tournament 2026',
    title: 'Persiapan tim KU12',
    caption: 'Good luck kiddos — siap turun ke MSI.',
    href: 'https://www.instagram.com/p/DckKoj-h9jw/',
    localPath: 'media/tim-ku12.jpg',
    localReady: true,
    alt: 'Postingan persiapan tim KU12 Garudaone Basketball',
    featured: false,
  },
  {
    id: 'ku14-development',
    kind: 'link',
    kicker: 'Pengembangan',
    title: 'KU14 · latihan & pertandingan',
    href: 'https://www.instagram.com/p/DamHmi7hQAx/',
    localPath: 'media/ku14-development.jpg',
    localReady: true,
    alt: 'Aktivitas tim KU14 Garudaone Basketball',
    featured: false,
  },
  {
    id: 'ku10-semifinal-kejurkot',
    kind: 'link',
    kicker: 'Turnamen',
    title: 'Semifinal Kejurkot · KU10 Mix',
    caption: 'Perjalanan menuju babak semifinal Kejurkot Tangsel 2026.',
    href: 'https://www.instagram.com/p/DbpeTK3PSoM/',
    localPath: 'media/prestasi-pemain.jpg',
    localReady: true,
    alt: 'Semifinal KU10 Mix Kejurkot Garudaone Basketball',
    featured: false,
  },
  {
    id: 'final-ku10-kejurkot',
    kind: 'link',
    kicker: 'Final',
    title: 'Kejurkot Tangsel · KU10 Mix vs Hawk Putih',
    caption: 'Final Kejurkot Tangsel 2026 — langkah demi langkah.',
    href: 'https://www.instagram.com/p/Db4Slv5vYbc/',
    localPath: 'media/final-ku10-kejurkot.jpg',
    localReady: true,
    alt: 'Poster final KU10 Mix Kejurkot Garudaone Basketball',
    featured: false,
    sourceDate: 'Agustus 2026',
  },
  {
    id: 'final-ku15-rising-league',
    kind: 'link',
    kicker: 'Final',
    title: 'Rising League 2026 · KU15 Putra',
    caption: 'Final Rising League — panggung terbesar untuk tim.',
    href: 'https://www.instagram.com/p/DcAOkPUPiBw/',
    localPath: 'media/final-ku15-rising-league.jpg',
    localReady: true,
    alt: 'Poster final KU15 Putra Rising League Garudaone Basketball',
    featured: false,
    sourceDate: 'Agustus 2026',
  },
  {
    id: 'ku15-rising-ready',
    kind: 'link',
    kicker: 'Turnamen',
    title: 'Persiapan Rising League · KU15 Putra',
    caption: 'Ready for Rising League 2026.',
    href: 'https://www.instagram.com/p/DauCswpPf0E/',
    localPath: 'media/ku15-rising-ready.jpg',
    localReady: true,
    alt: 'Persiapan tim KU15 Putra Rising League Garudaone Basketball',
    featured: false,
    sourceDate: 'Juli 2026',
  },
  {
    id: 'hut-ri-81',
    kind: 'link',
    kicker: 'Komunitas',
    title: 'Semangat HUT RI ke-81',
    href: 'https://www.instagram.com/p/DcMFcRKAf2U/',
    localPath: 'media/turnamen-ramadhan.jpg',
    localReady: true,
    alt: 'Postingan HUT RI Garudaone Basketball',
    featured: false,
  },
  {
    id: 'hiring-coach-brickhouse',
    kind: 'link',
    kicker: 'Info klub',
    title: 'Rekrutmen coach · Brickhouse Bintaro',
    caption: 'Lowongan coach basket — CV ke admin klub.',
    href: 'https://www.instagram.com/p/DccnyiZPqL7/',
    localPath: 'media/latihan-brickhouse.jpg',
    localReady: true,
    alt: 'Info rekrutmen coach di Brickhouse Bintaro',
    featured: false,
  },
];

/** Proporsi frame kartu — selaras feed IG (post 4:5, reel vertikal 9:16). */
export function instagramFrameAspect(item: Pick<ClubMediaItem, 'href' | 'previewFrame'>): string {
  if (item.previewFrame) return item.previewFrame;
  return item.href?.includes('/reel/') ? '9 / 16' : '4 / 5';
}

export function instagramThumbFit(
  item: Pick<ClubMediaItem, 'thumbFit' | 'achievement'>,
): 'cover' | 'contain' {
  if (item.thumbFit) return item.thumbFit;
  return item.achievement ? 'contain' : 'cover';
}

export function instagramThumbDimensions(
  item: Pick<ClubMediaItem, 'href' | 'previewFrame'>,
): { width: number; height: number } {
  if (item.href?.includes('/reel/')) {
    return { width: 360, height: 640 };
  }
  if (item.previewFrame === '1 / 1') {
    return { width: 640, height: 640 };
  }
  return { width: 640, height: 800 };
}

export function instagramPostMediaUrl(href: string | undefined): string | undefined {
  if (!href) return undefined;
  const m = href.match(/instagram\.com\/(?:p|reel)\/([^/?#]+)/i);
  if (!m) return undefined;
  const kind = href.includes('/reel/') ? 'reel' : 'p';
  return `https://www.instagram.com/${kind}/${m[1]}/media/?size=l`;
}

export function isRenderableMedia(item: ClubMediaItem): boolean {
  if (item.kind === 'local') {
    return Boolean(item.localReady && item.localPath);
  }
  if (item.kind === 'link') {
    return Boolean(item.href);
  }
  return Boolean(item.embedUrl || item.href);
}

const HOME_SECTION_MAX = 6;

function isActivityItem(item: ClubMediaItem): boolean {
  return (
    item.kind === 'link' &&
    !item.achievement &&
    Boolean(item.localReady && item.localPath && isRenderableMedia(item))
  );
}

function isAchievementItem(item: ClubMediaItem): boolean {
  return (
    item.kind === 'link' &&
    Boolean(item.achievement) &&
    Boolean(item.localReady && item.localPath && isRenderableMedia(item))
  );
}

/** Aktivitas: latihan, pertandingan, turnamen (bukan juara/medali). */
export function momentsGridMedia(): ClubMediaItem[] {
  return clubMedia.filter(isActivityItem);
}

/** Prestasi: juara, medali, runner-up. */
export function achievementsGridMedia(): ClubMediaItem[] {
  return clubMedia.filter(isAchievementItem);
}

/** Cuplikan aktivitas di homepage, max 6. */
export function homeMomentsMedia(max = HOME_SECTION_MAX): ClubMediaItem[] {
  const picks: ClubMediaItem[] = [];
  for (const item of clubMedia) {
    if (picks.length >= max) break;
    if (!item.featured || !isActivityItem(item)) continue;
    picks.push(item);
  }
  return picks;
}

/** Prestasi di homepage, max 6. */
export function homeAchievementsMedia(max = HOME_SECTION_MAX): ClubMediaItem[] {
  const picks: ClubMediaItem[] = [];
  for (const item of clubMedia) {
    if (picks.length >= max) break;
    if (!item.featuredAchievement || !isAchievementItem(item)) continue;
    picks.push(item);
  }
  return picks;
}

export function featuredClubMedia(): ClubMediaItem[] {
  return homeMomentsMedia();
}

export function instagramBlockFacts(): ClubMediaItem[] {
  return clubMedia.filter(
    (item) => item.showInInstagramBlock && !item.achievement && isRenderableMedia(item),
  );
}

export function instagramBlockEmbed(): ClubMediaItem | undefined {
  return clubMedia.find((item) => item.showInInstagramBlock && item.kind === 'embed' && item.embedUrl);
}
