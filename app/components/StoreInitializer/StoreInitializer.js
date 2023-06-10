"use client";

import { useRef } from "react";
import { useAuthenticatedUser } from "@/app/hooks";

function StoreInitializer({ user }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useAuthenticatedUser.setState({ user });
    initialized.current = true;
  }
  return null;
}

export default StoreInitializer;
