import { withBase } from '../utils/paths';

export const club = {
  name: 'Garudaone Basketball',
  tagline: 'Together We Fly',
  location: 'Bintaro, Tangerang Selatan',
  venueName: 'Brickhouse 2.0 Bintaro',
  mapsUrl: 'https://maps.app.goo.gl/bLivkTeCuW1qRHo79',
  ages: '5–10 dan 12–18 tahun',
  phone: '6282115172019',
  instagram: 'https://www.instagram.com/garudaonebasketball/',
  logo: withBase('garuda-one-logo.jpg'),
} as const;

export const trainingLocationLine = `${club.venueName} · ${club.location}`;

export const clubMapsLinkProps = {
  href: club.mapsUrl,
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${club.phone}?text=${encodeURIComponent(message)}`;
}

export const registrationLink = whatsappLink(
  'Halo Garudaone Basketball, saya mau tanya pendaftaran latihan untuk anak saya. Boleh info kelompok usia, jadwal, lokasi, dan biayanya? Terima kasih.'
);

export const partnershipLink = whatsappLink(
  'Halo Garudaone Basketball, saya mau bahas kolaborasi/partnership. Bisa diarahkan ke kontak yang tepat? Terima kasih.'
);

/** @deprecated Pakai `partnershipLink` — alias untuk tautan lama. */
export const sponsorLink = partnershipLink;
