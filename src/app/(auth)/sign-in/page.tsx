"use client";

import { useState, useEffect } from "react";
import { SignIn } from "@/sections/auth";

export default function SignInPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // This ensures the component renders only after it's mounted
  }, []);

  if (!mounted) return null; // Ensure nothing is rendered server-side to avoid router errors

  return <SignIn />;
}
