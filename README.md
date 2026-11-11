# YapPlan — Kalender & Generator Ide Konten Yapping

Website statis yang bisa dibuka di Chrome dan dipublikasikan gratis melalui **GitHub Pages**. Tidak butuh server, database, akun, ataupun API key.

## Fitur
- Kalender bulanan interaktif dan tanggal posting.
- Generator tiga kategori: **Daily Life**, **This or That**, **Rating Time** (makanan dan minuman).
- Jam mulai bebas pada kelipatan **15 menit** dan jeda antarposting 15 menit.
- Buat jadwal untuk **1, 7, atau 30 hari**, dengan **1–96 posting per hari** (sesuai ketersediaan jam dalam 24 jam).
- Ide tidak berulang: setiap kombinasi topik/angle mempunyai ID unik dan tercatat sebagai sudah digunakan, **bahkan bila posting jadwalnya dihapus**.
- Caption pembuka + CTA interaktif untuk tiap ide.
- Salin ide, salin jadwal satu hari, hapus posting, ekspor CSV, backup/pulihkan JSON.
- Simpan otomatis di localStorage pada browser/perangkat yang dipakai.

## Cara mencoba di Chrome tanpa GitHub
Ekstrak ZIP dan buka file **index.html** di Google Chrome. Jika tersedia internet, font Google akan tampil; tanpa internet situs tetap berfungsi dengan font bawaan.

## Cara upload ke GitHub Pages
1. Masuk ke https://github.com dan buat repository baru, misalnya `yapplan` dengan pilihan **Public**.
2. Upload file **index.html**, **style.css**, **app.js**, dan **README.md** ke **root** (bukan ZIP). Klik **Commit changes**.
3. Buka menu **Settings → Pages**.
4. Di **Build and deployment**, pilih **Deploy from a branch**, pilih branch **main** dan folder **/(root)**, lalu klik **Save**.
5. Setelah GitHub Pages selesai menerbitkan situs, buka URL yang ditampilkan di bagian Pages. Umumnya berbentuk `https://USERNAME.github.io/yapplan/`.

**Catatan:** Link live baru akan ada setelah pengguna mengunggah file ke repository GitHub miliknya. Website ini bekerja sepenuhnya secara lokal, sehingga data konten tidak otomatis tersinkron ke perangkat lain. Gunakan **Backup JSON** lalu **Pulihkan backup** untuk pindah perangkat/browser. Menghapus site data/clear storage tanpa backup akan menghapus isi planner.

## Privasi dan keterbatasan
Tidak memakai backend atau integrasi ke platform media sosial, jadi **jadwal adalah perencanaan, bukan auto-posting**. Unik berarti kombinasi ide yang pernah dihasilkan tidak diulang; setelah seluruh stok kombinasi habis, generator akan berhenti alih-alih membuat duplikat. Ide memiliki variasi sudut pembahasan yang dapat mengangkat topik sama dengan pertanyaan dan perspektif berbeda. Konten tersimpan per browser, bukan di GitHub.


## Cream Edition (revisi)
- Palet warna krem, cokelat hangat, dan aksen peach.
- Topik Daily Life difokuskan pada kejadian dan rutinitas keseharian saja (bukan opini atau motivasi abstrak).
- Riwayat posting dari versi lama tetap tersimpan di browser yang sama, selama domain dan penyimpanan browser tidak berubah.
- Saat update GitHub, unggah dan timpa `index.html`, `style.css`, `app.js`, serta `README.md` pada root repository yang sama.
