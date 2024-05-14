import { useQuery } from "@tanstack/react-query";
import { getAuthors, getPosts } from "./service";
import CardPosts from "./components/CardPosts";

const Posts = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const { data: posts, isLoading } = useQuery({
    queryKey: ["getPosts"],
    queryFn: async () => {
      const { data: posts } = await getPosts();
      const { data: authors } = await getAuthors();
      return posts.map((post) => {
        const author = authors.find((author) => author.id === post.author_id);
        return {
          ...post,
          author,
        };
      });
    },
  });
  return (
    <>
      <div className="container mt-8">
        <h1 className="text-2xl font-medium">MAQE Forum</h1>
        <p className="mt-6">Your current timezone is: {timezone}</p>
        <div className="flex flex-col gap-4 my-4">
          {isLoading && <div>Loading...</div>}
          {posts?.map((post, index) => (
            <CardPosts
              key={post.id}
              title={post.title}
              author={{
                avatarUrl: post?.author?.avatar_url || "",
                name: post?.author?.name || "",
              }}
              body={post.body}
              image={post.image_url}
              createdAt={post.created_at}
              className={index % 2 === 0 ? "bg-white" : "bg-blue-100"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
