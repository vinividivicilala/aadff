"use client";

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

export default function SearchInput() {
  const serachParams = useSearchParams();
  return (
    <form action={actions.search}>
      <Input name="term" defaultValue={serachParams.get("term") || ""} />
    </form>
  );
}
