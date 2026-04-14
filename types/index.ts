export type SalesPoint = {
  label: string;
  revenue: number;
  expense: number;
};

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "Aktif" | "Promo" | "Habis";
  image: string;
};

export type OrderItem = {
  id: string;
  table: string;
  customer: string;
  waiter: string;
  kitchen: string;
  status: "Pramusaji" | "Dapur" | "Siap Diantar" | "Selesai";
  total: number;
  createdAt: string;
};

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  shift: string;
  score: number;
  attendance: string;
  salary: number;
  leaveBalance: number;
  bonus: number;
  monthlyReview: string;
};

export type SupplyItem = {
  id: string;
  name: string;
  unit: string;
  stock: number;
  threshold: number;
  vendor: string;
  eta: string;
};

export type AssetItem = {
  id: string;
  name: string;
  category: string;
  condition: string;
  assignedTo: string;
};

export type CafeDocument = {
  name: string;
  status: string;
  updatedAt: string;
};

export type CafeProfile = {
  cafeName: string;
  owner: string;
  branch: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  taxStatus: string;
  seatingCapacity: number;
  openingHours: string;
  documents: CafeDocument[];
};

export type ReportSummary = {
  periodLabel: string;
  grossRevenue: number;
  totalExpense: number;
  netProfit: number;
  averageOrderValue: number;
  topSellingMenu: string;
};

export type AdminSession = {
  name: string;
  role: string;
  email: string;
};

