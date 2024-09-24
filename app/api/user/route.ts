import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export function GET() {
  return Response.json({
    email: "nirbhay@gmail.com",
    name: "nirbhay",
  });
}

export async function POST(req: NextRequest) {
  // extract the body
  const body = await req.json();
  // store the body in the database
  await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  return Response.json({
    message: "You are logged in!",
  });
}
