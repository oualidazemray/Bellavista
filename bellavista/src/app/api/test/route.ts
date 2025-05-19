import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany(); // Adjust table name if needed
    return NextResponse.json({ message: "Connected!", users });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { error: "DB connection failed" },
      { status: 500 }
    );
  }
}
