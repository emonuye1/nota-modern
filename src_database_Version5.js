const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Buat atau buka database
const dbPath = path.join(__dirname, 'database', 'db.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Gagal membuka database:', err.message);
  } else {
    console.log('Berhasil terhubung ke database SQLite.');
    initDatabase();
  }
});

// Inisialisasi tabel jika belum ada
function initDatabase() {
  db.run(`
    CREATE TABLE IF NOT EXISTS pelanggan (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nama TEXT NOT NULL,
      kontak TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS nota (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pelanggan_id INTEGER,
      tanggal DATE DEFAULT (DATE('now')),
      total INTEGER,
      FOREIGN KEY (pelanggan_id) REFERENCES pelanggan (id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS item (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nota_id INTEGER,
      nama TEXT NOT NULL,
      harga INTEGER,
      jumlah INTEGER,
      FOREIGN KEY (nota_id) REFERENCES nota (id)
    )
  `);
}

module.exports = db;