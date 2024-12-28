"use server";

import * as auth from "@/auth";

export async function singnIn() {
  return auth.signIn("github");
}
