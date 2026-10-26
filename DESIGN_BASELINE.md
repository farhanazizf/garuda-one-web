# Baseline UI Garudaone Basketball

Baseline ini menerapkan `gpt-taste` dengan penyesuaian pada tujuan klub: pendaftaran melalui WhatsApp, profil resmi untuk orang tua dan sponsor, serta penggunaan aset yang benar-benar berasal dari klub. Desain saat ini disukai pengguna dan menjadi titik awal untuk perubahan berikutnya.

## Keputusan visual

- Komposisi hero editorial split: judul dan dua aksi di kiri, logo asli di kanan. Judul dibatasi dua baris di desktop dan maksimum tiga baris pada layar ponsel yang diuji.
- Geist untuk teks antarmuka; Barlow Condensed dipertahankan untuk judul olahraga yang sudah cocok dengan karakter logo.
- Palet hitam, putih gading, dan beige/emas dari logo. Merah dari materi GBL tidak dipakai sebagai warna utama situs sampai statusnya dikonfirmasi.
- Tidak memakai foto stok sebagai foto atlet atau aktivitas klub. Foto resmi dapat dimasukkan setelah aset dan izin publikasi tersedia.
- Alur halaman: perhatian melalui hero, informasi klub dan langkah bergabung, aktivitas serta FAQ, lalu ajakan WhatsApp yang jelas.

## Komponen dan gerak

- Marquee menggunakan teks merek dan lokasi, tanpa mengklaim sponsor yang belum diverifikasi.
- FAQ memakai tiga panel horizontal di desktop dan panel vertikal di ponsel. Satu jawaban terbuka awalnya; panel lain tetap memiliki ringkasan yang terbaca.
- Logo asli muncul di hero dan sebagai gambar kecil di dalam tipografi `Together We Fly`.
- `@gsap/react` dan `ScrollTrigger` memberi gerak skala/fade pada logo hero dan gerak berlapis yang ringan pada tiga langkah bergabung. Keduanya dinonaktifkan saat pengguna memilih reduced motion.
- Grid langkah berisi tepat tiga item dalam tiga kolom desktop, dengan `grid-auto-flow: dense`; tidak ada sel kosong.

## Batas sebelum publikasi

Jadwal, biaya, alamat latihan, foto atlet, materi sponsor, dan domain resmi masih perlu konfirmasi. Semua klaim baru harus bersumber dari klub dan mudah diperbarui tanpa mengubah arah visual dasar.
