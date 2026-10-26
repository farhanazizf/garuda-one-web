# Katalog aset & sumber Instagram

Sumber diperiksa melalui profil Instagram resmi `@garudaonebasketball` di Comet pada 26 Oktober 2026.

## Aset yang tersedia di repo

| Aset | Lokasi | Sumber | Status |
| --- | --- | --- | --- |
| Logo Garudaone Basketball, JPG 512 × 512 | `public/garuda-one-logo.jpg` | Lampiran yang dikirim pemilik di chat | Dipakai di situs |
| Poster Garudaone Basketball League 2026 | Post [Dd0Ai8dPZQV](https://www.instagram.com/p/Dd0Ai8dPZQV/) | Instagram resmi, diposting 28 September 2026 | Ditampilkan sebagai embed Instagram agar tetap berasal dari post resmi; belum disimpan sebagai file lokal |

## Referensi konten yang dipakai

| Konten | Sumber |
| --- | --- |
| GBL 2026 di Sola Sport BSD, 4 Oktober–7 November 2026 | [Pengumuman GBL](https://www.instagram.com/p/Dd0Ai8dPZQV/) |
| KU14 Putra Black × Yellow; “Five on the court, one heart in the game.” | [Post tim KU14](https://www.instagram.com/p/DetkSohn2ZT/) |
| Perak Kejurkot Tangsel 2026 untuk KU10 Mix | [Profil Instagram resmi](https://www.instagram.com/garudaonebasketball/) |

## Aset yang terlihat di profil

Profil menampilkan 12 highlight, antara lain kelompok KU16, KU14, KU12, KU10, KU8, member, kompetisi, kegiatan Ramadhan, dan dokumentasi Timnas Arhan. Cover highlight dan arsip foto/video belum disalin ke repo. Profil memiliki 231 postingan saat diperiksa; katalog ini memilih materi yang relevan untuk profil klub dan bukan arsip lengkap seluruh postingan.

Sebelum menambahkan foto pemain ke file statis situs, pilih aset spesifik dan pastikan materi tersebut memang boleh dipublikasikan ulang di website. Saat ini tidak ada foto atlet yang disimpan lokal; post GBL dimuat dari embed Instagram resmi.

## Menambah foto lokal (fase A)

1. Salin file ke `outputs/assets/` (staging) lalu ke `garuda-one-web/public/media/<slug>.jpg`, atau paste langsung ke `public/media/`.
2. Tambah entri di `src/data/club-media.ts` dengan `kind: 'local'`, `localPath`, `localReady: true`, `alt`, dan `href` ke post sumber bila ada.
3. Perbarui tabel di dokumen ini.

Logo acuan sibling: `outputs/assets/garuda-one-logo-original.jpg` → salinan situs `public/garuda-one-logo.jpg`.

**Lokasi latihan (dikonfirmasi):** Brickhouse 2.0 Bintaro — [Google Maps](https://maps.app.goo.gl/bLivkTeCuW1qRHo79), field `club.venueName` / `club.mapsUrl` di `src/data/club.ts`.
