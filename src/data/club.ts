import type { Locale } from '../i18n/locales';
import { DEFAULT_LOCALE } from '../i18n/locales';
import { getMessages } from '../i18n/messages';
import { withBase } from '../utils/paths';

export const club = {
  name: 'Garudaone Basketball',
  tagline: 'Together We Fly',
  location: 'Bintaro, Tangerang Selatan',
  venueName: 'Brickhouse 2.0 Bintaro',
  mapsUrl: 'https://maps.app.goo.gl/bLivkTeCuW1qRHo79',
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

export function registrationLink(locale: Locale = DEFAULT_LOCALE) {
  const { wa } = getMessages(locale);
  return whatsappLink(wa.registration);
}

export function partnershipLink(locale: Locale = DEFAULT_LOCALE) {
  const { wa } = getMessages(locale);
  return whatsappLink(wa.partnership);
}

/** @deprecated Pakai `partnershipLink` — alias untuk tautan lama. */
export const sponsorLink = partnershipLink(DEFAULT_LOCALE);
