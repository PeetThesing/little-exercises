import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(`/api/random-character/`, fetcher);
  if (error)
    return <div>failed to load, you probably did something very wrong.</div>;
  if (isLoading) return <div>maaaaybe loading...</div>;
  const { character } = data;
  const { firstName, lastName, age } = character;

  return (
    <>
      <h1>Character</h1>
      <p>
        First Name:
        {firstName}
        <p>Last Name:{lastName}</p>
      </p>
      <p>Age: {age}</p>
    </>
  );
}
