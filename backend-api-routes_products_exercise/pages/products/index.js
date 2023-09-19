import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);
  return (
    <>
      <h1>List of Fish</h1>
      <ul>
        {data.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </>
  );
}
