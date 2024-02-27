import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async () => {
  const data = await getData();
  return (
    <>
      <h3>
        The route of this page is /services-provided. The folder with
        parenthesis i.e (Services). Is just for organising the project structure
        and does not get included in the route itself
      </h3>
      <ul>
        {data?.map((items: any) => {
          return (
            <li key={items?.id}>
              <Link href={`/services-provided/${items?.id}`}>
                {items?.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Page;
