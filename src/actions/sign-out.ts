"use server";
import * as auth from "@/auth";

export async function singnOut() {
  return auth.signOut();
}
