import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import client from "@/db/db"

// async function getUserDetails() {
//   // await new Promise((r) => setTimeout(r, 5000));
//   const response = await axios.get(
//     "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
//   );
//   return response.data;
// }

async function getUserDetails() {
  const user = await client.user.findFirst();
  return {
    username: user?.username,
    name: "Kz",
  };
}
export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>

          {userData?.username}
        </div>
      </div>
    </div>
  );
}
