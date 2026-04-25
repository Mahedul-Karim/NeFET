import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Container from "@/components/common/Container";
import ManageItems from "@/components/items/ManageItems";
import React from "react";

const Page = () => {
  return (
    <Container className="py-16">
      <ProtectedRoute>
        <ManageItems />
      </ProtectedRoute>
    </Container>
  );
};

export default Page;
