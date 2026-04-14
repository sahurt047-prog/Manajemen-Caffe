import { NextResponse } from "next/server";
import { staffMembers } from "@/data/mock";

export async function GET() {
  return NextResponse.json({ data: staffMembers });
}

