# Garudaone Basketball website

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

## Deploy (GitHub Pages)

Push ke branch `main` menjalankan workflow `.github/workflows/deploy-pages.yml`. Situs project pages:

**https://farhanazizf.github.io/garuda-one-web/**

Build CI memakai `BASE_PATH=/garuda-one-web` dan `PUBLIC_SITE_URL` di atas. Preview lokal dengan path production: `BASE_PATH=/garuda-one-web PUBLIC_SITE_URL=https://farhanazizf.github.io/garuda-one-web npm run build && npm run preview`.

## Data yang masih dibutuhkan

- Jadwal dan lokasi latihan per kelompok usia, termasuk alamat yang disetujui untuk publik.
- Biaya, prosedur pendaftaran, dan apakah ada kelas percobaan.
- Pilihan foto dan video dari akun Instagram yang akan disalin sebagai file lokal untuk website. Saat ini posting GBL 2026 ditampilkan sebagai embed resmi, sementara post lain ditautkan ke sumbernya.
- Logo vektor atau PNG transparan; logo saat ini JPG 512 × 512 dengan latar hitam.
- Profil pelatih, prestasi, testimoni, serta data sponsor yang telah disetujui dan dapat diverifikasi.
- Domain resmi dan identitas organisasi yang ingin ditampilkan pada profil sponsor.

Nomor WhatsApp diambil dari bio Instagram dan telah dikonfirmasi pengguna pada 26 Oktober 2026. Informasi aktivitas yang ditampilkan dirujuk dari akun resmi klub; daftar sumber dan status file aset ada di [ASSET_CATALOG.md](ASSET_CATALOG.md). Tidak ada formulir yang menyimpan data anak atau orang tua.
