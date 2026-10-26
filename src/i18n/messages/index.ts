import type { Locale } from '../locales';
import { en } from './en';
import { id } from './id';
import type { SiteMessages } from './schema';

const MESSAGES: Record<Locale, SiteMessages> = { id, en };

export function getMessages(locale: Locale): SiteMessages {
  return MESSAGES[locale];
}

export type { SiteMessages } from './schema';
