"use server"
import client from "@/db/db";

export async function createUser(username: string, password: string) {
  try {
    const respose = await client.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    return true;
  } catch (e) {
    return false;
  }
}
