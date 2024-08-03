import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body.username);
  const respose = await client.user.create({
    data: {
      username : body.username,
      password : body.password,
    },
  });
  
  console.log(respose);
  return NextResponse.json({
    username: body.username,
    password: body.password,
  });
}