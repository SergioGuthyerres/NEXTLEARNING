import { NextRequest, NextResponse } from "next/server";
const users: string[] = [];

export async function POST(request: NextRequest) {
  const { name } = await request.json();

  users.push(name);

  return NextResponse.json(users);
}
