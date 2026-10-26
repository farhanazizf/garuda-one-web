export type TitleEmphasis = {
  before: string;
  emphasis: string;
};

export type FaqItem = {
  question: string;
  preview: string;
  answer: string;
};

export type PathStep = {
  number: string;
  title: string;
  body: string;
};

export type SiteMessages = {
  shared: {
    ages: string;
    openPost: string;
    mapsLinkSuffix: string;
  };
  layout: {
    skipToContent: string;
    brandAriaLabel: string;
    navAriaLabel: string;
    navHome: string;
    navAbout: string;
    navPartnership: string;
    navLocation: string;
    headerCta: string;
    footerTraining: string;
    footerMaps: string;
    footerInstagram: string;
    footerWhatsapp: string;
    footerNote: string;
    schemaDescription: string;
    langSwitchLabel: string;
    langSwitchToEn: string;
    langSwitchToId: string;
  };
  wa: {
    registration: string;
    partnership: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: TitleEmphasis;
    heroIntro: string;
    heroCtaRegister: string;
    heroCtaAbout: string;
    heroLogoAlt: string;
    heroMarkCaption: string;
    heroBottomLeft: string;
    heroBottomRight: string;
    marquee: string[];
    introLabel: string;
    introTitle: TitleEmphasis;
    introLead: string;
    introSourceBeforeAges: string;
    introSourceAfterAges: string;
    introSourceVenueSuffix: string;
    introSourceTail: string;
    introLink: string;
    pathLabel: string;
    pathAside: string;
    pathTitle: TitleEmphasis;
    pathSteps: PathStep[];
    pathCta: string;
    faqLabel: string;
    faqTitle: TitleEmphasis;
    faqItems: FaqItem[];
    faqMapsLinkText: string;
    partnershipTeaserLabel: string;
    partnershipTeaserTitle: TitleEmphasis;
    partnershipTeaserBody: string;
    partnershipTeaserCta: string;
    contactLabel: string;
    contactTitle: TitleEmphasis;
    contactCta: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: TitleEmphasis;
    heroLeadBeforeTagline: string;
    heroLeadAfterTagline: string;
    factsLabel: string;
    factsAside: string;
    factLocationTitle: string;
    factAgesTitle: string;
    factActivityTitle: string;
    factActivityBody: string;
    sourceNote: string;
    contactLabel: string;
    contactTitle: string;
    contactCta: string;
  };
  partnership: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: TitleEmphasis;
    heroLead: string;
    bodyLabel: string;
    bodyTitle: TitleEmphasis;
    bodyP1: string;
    bodyP2: string;
    ctaWhatsapp: string;
    ctaInstagram: string;
  };
  achievements: {
    label: string;
    highlightTitle: TitleEmphasis;
    archiveTitle: TitleEmphasis;
    highlightIntro: string;
    archiveIntro: string;
    moreLink: string;
  };
  moments: {
    labelHighlight: string;
    labelArchive: string;
    highlightTitle: TitleEmphasis;
    archiveTitle: TitleEmphasis;
    highlightIntro: string;
    archiveIntro: string;
    igNote?: string;
    venuePrefix: string;
    moreLink: string;
  };
  instagram: {
    label: string;
    handleLink: string;
    title: TitleEmphasis;
    intro: string;
    linkTeamPost: string;
    linkGblAnnouncement: string;
    gblPosterCaption: string;
    gblOpenCarousel: string;
    embedFallbackBefore: string;
    embedFallbackLink: string;
    embedFallbackAfter: string;
    gblMediaAria: string;
    embedTitle: string;
  };
};
