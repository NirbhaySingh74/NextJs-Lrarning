import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
export function GET() {
  return Response.json({
    email: "nirbhay@gmail.com",
    name: "nirbhay",
    village: "Dhakcha",
  });
}

export async function POST(req: NextRequest) {
  // extract the body
  const body = await req.json();
  // store the body in the database
  console.log(body);

  await client.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  return Response.json({
    message: "You are logged in!",
  });
}

// export async function POST(req: NextRequest) {
//   //body
//   const body = await req.json();
//   console.log(body);

//   //header
//   console.log(req.headers.get("authorization"));
//   // query parameters
//   console.log(req.nextUrl.searchParams.get("name"));
//   //hit the database with username and password
//   return NextResponse.json({
//     message: "You are signed up",
//   });
// }
