import React from "react";
import { useLoaderData } from "react-router-dom";

function EditOrder() {
  const id: any = useLoaderData();
  return <div>{id}</div>;
}

export function loader({ params }: { params: any }) {
  return params.id;
}

export default EditOrder;
