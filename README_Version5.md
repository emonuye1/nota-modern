# Aplikasi Nota Modern

Aplikasi nota modern berbasis desktop menggunakan **Electron.js**, **SQLite**, dan **Tailwind CSS**. Aplikasi ini dirancang untuk bisnis skala kecil hingga menengah dengan fitur lengkap untuk manajemen nota, pelanggan, laporan, dan lainnya.

## Fitur Utama
### 1. Manajemen Nota
- Pembuatan nota dengan rincian item, harga, pajak, diskon, dan total.
- Ekspor nota ke PDF atau cetak langsung.
- Edit dan hapus nota.

### 2. Manajemen Pelanggan
- Tambah, ubah, dan hapus data pelanggan.
- Cari pelanggan berdasarkan nama atau ID.

### 3. Laporan Penjualan
- Laporan harian, mingguan, dan bulanan.
- Grafik penjualan menggunakan Chart.js.
- Ekspor laporan ke file CSV atau PDF.

### 4. Integrasi Pembayaran
- Opsi pembayaran: tunai, kartu, QR Code.
- Hitung otomatis pajak dan diskon.
- Simpan metode pembayaran di nota.

### 5. Desain dan Template
- Template cetak nota yang dapat dikustomisasi.
- Tambahkan logo bisnis, alamat, dan nomor telepon.

### 6. Keamanan
- Autentikasi pengguna (login/logout).
- Peran pengguna dengan akses berbeda (admin/kasir).
- Backup dan restore database.

### 7. Internasionalisasi
- Dukungan multi-bahasa (Bahasa Indonesia, Inggris, dll.).

### 8. Cloud Integration (Opsional)
- Sinkronisasi data ke cloud untuk akses dari perangkat lain.
- Backup otomatis.

## Instalasi
1. Clone repository ini:
   ```bash
   git clone https://github.com/emonuye1/nota-modern.git
   cd nota-modern
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Jalankan aplikasi:
   ```bash
   npm start
   ```

4. Jika ingin membangun CSS dengan Tailwind:
   ```bash
   npm run build-css
   ```

## Kontribusi
Kami menerima kontribusi untuk pengembangan aplikasi ini. Silakan kirim pull request atau buka issue di repository ini.

---

Happy coding! 😊