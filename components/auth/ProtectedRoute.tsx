"use client";

import { useCtx } from "@/context/Context"; 
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { user} = useCtx();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
      toast.success("Please login to access this page");
      return; 
    }

  }, []);

  if(!user) {
    return <></>
  }

  return children;
};

export default ProtectedRoute;