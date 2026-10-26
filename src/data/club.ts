export const club = {
  name: 'Garuda One Basketball',
  tagline: 'Together We Fly',
  location: 'Bintaro, Tangerang Selatan',
  ages: '5–10 dan 12–18 tahun',
  phone: '6282115172019',
  instagram: 'https://www.instagram.com/garudaonebasketball/',
  logo: '/garuda-one-logo.jpg',
};

export function whatsappLink(message: string) {
  return `https://wa.me/${club.phone}?text=${encodeURIComponent(message)}`;
}

export const registrationLink = whatsappLink(
  'Halo Garuda One Basketball, saya ingin menanyakan pendaftaran latihan untuk anak saya. Mohon info kelompok usia, jadwal, lokasi, dan biaya. Terima kasih.'
);

export const sponsorLink = whatsappLink(
  'Halo Garuda One Basketball, saya ingin membahas peluang kerja sama/sponsor. Mohon informasi kontak yang tepat. Terima kasih.'
);
