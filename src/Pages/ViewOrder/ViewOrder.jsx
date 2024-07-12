import { useLoaderData } from "react-router-dom";

function ViewOrder() {
  const id = useLoaderData();
  return <div>{id}</div>;
}

export function loader({ params }) {
  return params.id;
}

export default ViewOrder;
