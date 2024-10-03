import client from "@/db";

async function fetchData() {
  const user = await client.user.findFirst();

  return {
    email: user?.email,
    name: "Nirbhay",
  };
}

export default async function Home() {
  const userData = await fetchData();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>
          email: {userData?.email}
          <h1>hii</h1>
        </div>
      </div>
    </div>
  );
}
