import type {
  AssetItem,
  CafeProfile,
  MenuItem,
  OrderItem,
  ReportSummary,
  SalesPoint,
  StaffMember,
  SupplyItem,
} from "@/types";

export const summaryCards = [
  {
    title: "Pendapatan Hari Ini",
    value: "Rp 8.450.000",
    change: "+12.4%",
    tone: "from-sky-200/70 to-white/20",
  },
  {
    title: "Pesanan Aktif",
    value: "24 Order",
    change: "6 menunggu dapur",
    tone: "from-emerald-200/70 to-white/20",
  },
  {
    title: "Bahan Menipis",
    value: "5 Supply",
    change: "Perlu restock hari ini",
    tone: "from-amber-100/80 to-white/20",
  },
  {
    title: "Skor Layanan",
    value: "4.8 / 5",
    change: "Naik dari minggu lalu",
    tone: "from-rose-100/80 to-white/20",
  },
] as const;

export const salesSeries: SalesPoint[] = [
  { label: "08 Apr", revenue: 6.2, expense: 3.5 },
  { label: "09 Apr", revenue: 7.4, expense: 4.1 },
  { label: "10 Apr", revenue: 6.9, expense: 3.8 },
  { label: "11 Apr", revenue: 8.1, expense: 4.4 },
  { label: "12 Apr", revenue: 8.8, expense: 4.9 },
  { label: "13 Apr", revenue: 9.2, expense: 5.1 },
];

export const menuItems: MenuItem[] = [
  {
    id: "M-001",
    name: "Cloud Latte",
    category: "Coffee",
    price: 32000,
    stock: 40,
    status: "Aktif",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "M-002",
    name: "Pandan Cream Toast",
    category: "Bakery",
    price: 28000,
    stock: 15,
    status: "Promo",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "M-003",
    name: "Lychee Tea Breeze",
    category: "Non Coffee",
    price: 27000,
    stock: 0,
    status: "Habis",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80",
  },
];

export const orders: OrderItem[] = [
  {
    id: "ORD-2104",
    table: "Teras 02",
    customer: "Alya",
    waiter: "Raka",
    kitchen: "Chef Rio",
    status: "Dapur",
    total: 96000,
    createdAt: "09:10",
  },
  {
    id: "ORD-2105",
    table: "Indoor 05",
    customer: "Kevin",
    waiter: "Mila",
    kitchen: "Chef Rio",
    status: "Siap Diantar",
    total: 124000,
    createdAt: "09:22",
  },
  {
    id: "ORD-2106",
    table: "Outdoor 01",
    customer: "Nadia",
    waiter: "Raka",
    kitchen: "Chef Sinta",
    status: "Pramusaji",
    total: 58000,
    createdAt: "09:36",
  },
];

export const staffMembers: StaffMember[] = [
  {
    id: "ST-01",
    name: "Mila Putri",
    role: "Pramusaji",
    shift: "Pagi",
    score: 4.9,
    attendance: "98%",
    salary: 4200000,
    leaveBalance: 9,
    bonus: 750000,
    monthlyReview: "Excellent service consistency",
  },
  {
    id: "ST-02",
    name: "Raka Pratama",
    role: "Pramusaji",
    shift: "Siang",
    score: 4.7,
    attendance: "96%",
    salary: 4150000,
    leaveBalance: 7,
    bonus: 500000,
    monthlyReview: "Strong sales conversion during lunch rush",
  },
  {
    id: "ST-03",
    name: "Rio Mahesa",
    role: "Kitchen",
    shift: "Full Day",
    score: 4.8,
    attendance: "99%",
    salary: 5500000,
    leaveBalance: 10,
    bonus: 900000,
    monthlyReview: "Kitchen output stable and fast",
  },
];

export const supplyItems: SupplyItem[] = [
  { id: "SP-01", name: "Biji Kopi House Blend", unit: "kg", stock: 8, threshold: 10, vendor: "Java Roastery", eta: "15 Apr 2026" },
  { id: "SP-02", name: "Susu Oat", unit: "liter", stock: 14, threshold: 12, vendor: "Green Dairy", eta: "17 Apr 2026" },
  { id: "SP-03", name: "Sirup Vanilla", unit: "botol", stock: 3, threshold: 6, vendor: "Sweet Supply", eta: "14 Apr 2026" },
];

export const assetItems: AssetItem[] = [
  {
    id: "AS-01",
    name: "Mesin Espresso La Marzocco",
    category: "Bar Equipment",
    condition: "Prima",
    assignedTo: "Bar Utama",
  },
  {
    id: "AS-02",
    name: "Tablet POS",
    category: "Operasional",
    condition: "Perlu Kalibrasi",
    assignedTo: "Kasir",
  },
];

export const cafeProfile: CafeProfile = {
  cafeName: "CafeFlow Signature",
  owner: "FRENLY",
  branch: "Pekanbaru",
  address: "Jl. Sudirman No. 18, Pekanbaru",
  contactEmail: "hello@cafeflow.id",
  contactPhone: "+62 812-3456-7788",
  taxStatus: "PKP Aktif",
  seatingCapacity: 84,
  openingHours: "07.00 - 22.00 WIB",
  documents: [
    { name: "NIB", status: "Terverifikasi", updatedAt: "12 Apr 2026" },
    { name: "NPWP", status: "Perlu pembaruan", updatedAt: "03 Apr 2026" },
    { name: "Sertifikat Halal", status: "Diproses", updatedAt: "10 Apr 2026" },
  ],
};

export const reportSummary: ReportSummary = {
  periodLabel: "8 - 13 April 2026",
  grossRevenue: 46600000,
  totalExpense: 25800000,
  netProfit: 20800000,
  averageOrderValue: 68000,
  topSellingMenu: "Cloud Latte",
};

