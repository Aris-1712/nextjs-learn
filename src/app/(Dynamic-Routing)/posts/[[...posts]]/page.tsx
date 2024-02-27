const fetchPost = async (id: string) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // throw new Error("ERROR TEST")
  return data?.json();
};

export const generateStaticParams = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const arrData: any[] = await data?.json();
  return arrData?.map((item: any) => {
    return {
      posts: [item?.id?.toString()],
    };
  });
};

const Page = async ({ params: { posts } }: { params: { posts: any } }) => {
  if (!posts) {
    // const data: any = await fetchPost(posts?.[0]);
    return <>{"Posts"}</>;
  }
  const data: any = await fetchPost(posts?.[0]);
  return <>{data?.title}</>;
};

export default Page;
