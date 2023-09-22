import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { ReviewCard } from "./Product.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);
  console.log("fetched data", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  const text = data.reviews.map((review) => review.text);
  const title = data.reviews.map((review) => review.title);
  const rating = data.reviews.map((review) => review.rating);
  const reviews = data.reviews.map((review) => review);
  console.log("Data Revies All", data.reviews);
  console.log("Reviews", reviews);
  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <>
        {reviews.length > 0 ? (
          <ReviewCard>
            <h3>Reviews</h3>
            <h4>{title}</h4>
            <p>{text} </p>
            <p>Rating: {rating} </p>
          </ReviewCard>
        ) : (
          <p></p>
        )}
      </>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
