import { NextResponse } from "next/server";
import { supplyItems } from "@/data/mock";

export async function GET() {
  return NextResponse.json({ data: supplyItems });
}

