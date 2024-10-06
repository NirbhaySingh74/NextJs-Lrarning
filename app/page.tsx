import client from "@/db";

async function fetchData() {
  const user = await client.user.findFirst();

  return {
    email: user?.email,
  };
}

export default async function Home() {
  const userData = await fetchData();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          email: {userData?.email}
          <h1>hii</h1>
        </div>
      </div>
    </div>
  );
}
