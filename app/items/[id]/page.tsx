import Container from "@/components/common/Container";
import ItemDetails from "@/components/items/ItemDetails";
import React, { use } from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return (
    <Container className="py-16">
      <ItemDetails id={id} />
    </Container>
  );
};

export default Page;
