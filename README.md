# Garudaone Basketball website

Situs profil awal untuk orang tua dan sponsor, dengan WhatsApp sebagai jalur pendaftaran. Dibangun memakai Astro (berbasis Vite) agar halaman utama menghasilkan HTML statis. React dipakai hanya untuk pengarah animasi GSAP; isi utama tetap ada di HTML statis.

Baseline visual dan aturan refinement berikutnya tercatat di [DESIGN_BASELINE.md](DESIGN_BASELINE.md).

## Isi situs (ringkas)

| Bagian | Homepage | Halaman Tentang |
| --- | --- | --- |
| **Prestasi** (juara, medali) | Max 6 highlight | Arsip lengkap (`#prestasi-klub`) |
| **Aktivitas** (latihan, pertandingan, komunitas) | Max 6 highlight | Arsip lengkap (`#aktivitas-klub`) |
| **Instagram / GBL** | Poster lokal GBL 2026 + ringkasan posting | — |
| **Kolaborasi / partnership** | Teaser di home | `/kolaborasi/` (`/sponsor/` redirect) |

Semua kartu Instagram dikelola di [`src/data/club-media.ts`](src/data/club-media.ts):

- `achievement: true` → hanya section prestasi.
- `featured` / `featuredAchievement` → cuplikan homepage (masing-masing max 6).
- Preview post diunduh dari feed IG (`/p/{code}/media/?size=l`, biasanya 4:5); poster turnamen sering `thumbFit: contain`.

GBL 2026 memakai poster lebar lokal `public/media/gbl-2026-poster.png` dengan tautan ke [post resmi](https://www.instagram.com/p/Dd0Ai8dPZQV/); fallback embed jika poster tidak ditandai `localReady`.

## Jalankan lokal

```bash
npm install
npm run dev
```

Verifikasi build (sama dengan CI):

```bash
npm run check
npm run build
```

Saat domain resmi sudah dipilih, set `PUBLIC_SITE_URL=https://domain-resmi.example` pada lingkungan build untuk menghasilkan canonical URL, URL gambar sosial, dan URL di data terstruktur. Ganti `domain-resmi.example` dengan domain sebenarnya. Sitemap dapat diaktifkan setelah domain ditentukan.

## Deploy (GitHub Pages)

Push ke branch `main` menjalankan workflow `.github/workflows/deploy-pages.yml`. Situs project pages:

**https://farhanazizf.github.io/garuda-one-web/**

Build CI memakai `BASE_PATH=/garuda-one-web` dan `PUBLIC_SITE_URL` di atas. Preview lokal dengan path production:

```bash
BASE_PATH=/garuda-one-web PUBLIC_SITE_URL=https://farhanazizf.github.io/garuda-one-web npm run build && npm run preview
```

## Menambah / memperbarui media Instagram

1. Simpan preview ke `public/media/<slug>.jpg` (atau PNG untuk poster lebar).
2. Tambah atau ubah entri di `src/data/club-media.ts` (`href`, `localPath`, `localReady: true`, `alt`, flag prestasi/featured).
3. Perbarui [ASSET_CATALOG.md](ASSET_CATALOG.md) bila perlu.

Reels: endpoint `/media/?size=l` sering tidak tersedia; thumbnail reels bisa diperbarui manual dari IG.

## Data yang masih dibutuhkan

- Jadwal dan lokasi latihan per kelompok usia, termasuk alamat yang disetujui untuk publik (venue saat ini: Brickhouse 2.0 Bintaro — lihat `src/data/club.ts`).
- Biaya, prosedur pendaftaran, dan apakah ada kelas percobaan.
- Logo vektor atau PNG transparan; logo saat ini JPG 512 × 512 dengan latar hitam.
- Profil pelatih, testimoni, serta data sponsor yang telah disetujui dan dapat diverifikasi.
- Domain resmi dan identitas organisasi yang ingin ditampilkan pada profil sponsor.

Nomor WhatsApp diambil dari bio Instagram dan telah dikonfirmasi pengguna pada 26 Oktober 2026. Konten prestasi dan aktivitas dirujuk dari akun resmi `@garudaonebasketball`; daftar sumber dan status file aset ada di [ASSET_CATALOG.md](ASSET_CATALOG.md). Tidak ada formulir yang menyimpan data anak atau orang tua.
