function DueBalance() {
  const id = useLoaderData();
  return <div>{id}</div>;
}

export function loader({ params }) {
  return params.id;
}

export default DueBalance;
