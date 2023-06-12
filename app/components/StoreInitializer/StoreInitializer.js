"use client";

import { useEffect, } from "react";
import { useAuthenticatedUser } from "@/app/hooks";

function StoreInitializer({ user }) {
  useEffect(() => {
    useAuthenticatedUser.setState({ user });
  }, [user]);
  return null;
}

export default StoreInitializer;
