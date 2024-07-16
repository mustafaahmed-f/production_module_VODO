import { useLoaderData } from "react-router-dom";
import React from "react";
function ViewOrder() {
  const id: any = useLoaderData();
  return <div>{id}</div>;
}

export function loader({ params }: { params: any }) {
  return params.id;
}

export default ViewOrder;
