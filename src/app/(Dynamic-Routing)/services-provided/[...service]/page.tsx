import Link from "next/link";

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async ({ params }: { params: any }) => {
  const data = await getData(params?.service?.[0]);

  return (
    <div>
      <Link href="/services-provided">All Services</Link>
      <h2 style={{ color: "green" }}>{data?.body}</h2>
    </div>
  );
};

export default Page;
