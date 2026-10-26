# Garuda One Basketball website

Situs profil awal untuk orang tua dan sponsor, dengan WhatsApp sebagai jalur pendaftaran. Dibangun memakai Astro (berbasis Vite) agar halaman utama menghasilkan HTML statis. React dipakai hanya untuk pengarah animasi GSAP; isi utama tetap ada di HTML statis.

Baseline visual dan aturan refinement berikutnya tercatat di [DESIGN_BASELINE.md](DESIGN_BASELINE.md).

## Jalankan lokal

```bash
npm install
npm run dev
```

Verifikasi build:

```bash
npm run check
npm run build
```

Saat domain resmi sudah dipilih, set `PUBLIC_SITE_URL=https://domain-resmi.example` pada lingkungan build untuk menghasilkan canonical URL, URL gambar sosial, dan URL di data terstruktur. Ganti `domain-resmi.example` dengan domain sebenarnya. Sitemap dapat diaktifkan setelah domain ditentukan.

## Data yang masih dibutuhkan

- Jadwal dan lokasi latihan per kelompok usia, termasuk alamat yang disetujui untuk publik.
- Biaya, prosedur pendaftaran, dan apakah ada kelas percobaan.
- Foto asli yang disetujui untuk website, terutama karena subjeknya anak-anak.
- Logo vektor atau PNG transparan; logo saat ini JPG 512 × 512 dengan latar hitam.
- Profil pelatih, prestasi, testimoni, serta data sponsor yang telah disetujui dan dapat diverifikasi.
- Domain resmi dan identitas organisasi yang ingin ditampilkan pada profil sponsor.

Nomor WhatsApp diambil dari bio Instagram dan telah dikonfirmasi pengguna pada 26 Oktober 2026. Informasi lain di situs dirujuk dari Instagram klub dan direktori PERBASI Tangerang Selatan. Tidak ada formulir yang menyimpan data anak atau orang tua.
