import { NextRequest } from "next/server";

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
  console.log(body);

  return Response.json({
    message: "You are logged in!",
  });
}
