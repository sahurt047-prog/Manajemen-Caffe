import { NextResponse } from "next/server";
import { reportSummary, salesSeries } from "@/data/mock";

export async function GET() {
  return NextResponse.json({ summary: reportSummary, salesSeries });
}

