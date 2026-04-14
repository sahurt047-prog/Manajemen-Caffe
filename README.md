# CafeFlow Admin Template

Template frontend sistem manajemen cafe berbasis Next.js 16, TypeScript, dan Tailwind CSS dengan gaya glassmorphism, warna lembut, serta struktur reusable untuk admin dashboard.

## Fitur yang sudah disiapkan

- App Router Next.js
- TypeScript strict mode
- Tailwind CSS v4 dengan soft pastel theme
- Dashboard layout bergaya glassmorphism
- Halaman contoh: Dashboard, Menu, Pesanan
- Reusable components: button, modal, card, table, skeleton, checkbox, radio
- Integrasi UI library sesuai kebutuhan frontend:
  - TanStack Table
  - React Hook Form
  - Chart.js
  - Flatpickr (Bahasa Indonesia)
  - FontAwesome
  - CompressorJS
  - Zoom gambar
  - Upload file
  - Quill editor
  - ReCAPTCHA
  - PDF export sederhana
  - Invoice preview
  - Carousel ringan
  - Sidebar dengan Metis Menu

## Struktur folder

```text
app/
  dashboard/
  menu/
  pesanan/
components/
  charts/
  data/
  forms/
  invoice/
  layout/
  ui/
data/
lib/
types/
```

## Menjalankan project

```bash
npm install
npm run dev
```

## Catatan

- Template ini fokus frontend dan dummy data.
- Integrasi backend, autentikasi, storage file, dan validasi server belum ditambahkan.
- `react-google-recaptcha` memakai placeholder `sitekey`, jadi perlu diganti saat integrasi nyata.

