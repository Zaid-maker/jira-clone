"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button variant="secondary">
        <Link href="/sign-up">Sign Up</Link>
      </Button>
      <Button variant="primary">
        <Link href="/sign-in">Sign In</Link>
      </Button>
    </div>
  );
}
