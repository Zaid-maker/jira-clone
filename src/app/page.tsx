"use client";

import { useCurrent } from "@/features/auth/api/use-current";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const { data, isLoading } = useCurrent();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/login");
    }
  }, [data])

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Only logged in users can see this
    </div>
  );
}
