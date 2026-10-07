import { NextResponse } from "next/server";
const usuarios = [];
export async function GET() {
  console.log("TEste");
  return NextResponse.json({ Teste: "ok" });
}
export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  usuarios.push(data);
  return NextResponse.json({ usuarios });
}
export async function PUT() {
  return NextResponse.json({});
}
export async function PATCH() {
  return NextResponse.json({});
}
export async function DELETE() {
  return NextResponse.json({});
}
