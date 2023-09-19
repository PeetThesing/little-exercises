import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function DetailsPage() {
  const router = useRouter();
  const routerId = router.query.id;
  const { data, error, isLoading } = useSWR(
    `/api/products/${routerId}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (data.status) {
    return <h1>Page not found. Sooooorry! Really Sorry again.</h1>;
  }

  return (
    <>
      <h1>{data.name} </h1>
      <p>{data.description} </p>
      <p>
        {data.price} {data.currency}
      </p>
      <p>{data.category} </p>
    </>
  );
}
