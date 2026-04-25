import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Container from "@/components/common/Container";
import AddItemForm from "@/components/items/AddItemForm";
import React from "react";

const Page = () => {
  return (
    <Container className="py-16">
      <ProtectedRoute>
        <AddItemForm />
      </ProtectedRoute>
    </Container>
  );
};

export default Page;
