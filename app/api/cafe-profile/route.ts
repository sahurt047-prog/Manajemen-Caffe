import { NextResponse } from "next/server";
import { cafeProfile } from "@/data/mock";

export async function GET() {
  return NextResponse.json({ data: cafeProfile });
}

