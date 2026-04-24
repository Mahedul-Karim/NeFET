import Container from "@/components/common/Container";
import ItemDetails from "@/components/items/ItemDetails";
import { getItem } from "@/lib/utils";
import React, { use } from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  const data = getItem(id)!;

  return (
    <Container className="py-16">
      <ItemDetails item={data} />
    </Container>
  );
};

export default Page;
