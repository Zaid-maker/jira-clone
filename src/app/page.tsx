"use client";

import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { UserButton } from "@/features/auth/components/user-button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout()

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/login");
    }
  }, [data])

  return (
    <div>
      Only logged in users can see this page.
      <UserButton />
    </div>
  );
}
