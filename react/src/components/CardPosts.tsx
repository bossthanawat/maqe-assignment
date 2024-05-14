import dayjs from "dayjs";
import { cn } from "../lib/utils";

type CardPostsProps = {
  title: string;
  body: string;
  image: string;
  createdAt: string;
  author: {
    name: string;
    avatarUrl: string;
  };
} & React.HTMLAttributes<HTMLDivElement>;

const CardPosts = (props: CardPostsProps) => {
  const { title, body, image, createdAt, author, ...another } = props;
  const handleFormatDatePost = (datetime: string) => {
    return dayjs(datetime).format("dddd, MMMM D, YYYY, HH:mm");
  };
  return (
    <>
      <div
        {...another}
        className={cn("shadow-md rounded-sm", another.className)}
      >
        <div className="px-4 py-2 border-b-[1px] border-gray-300">
          <div className="flex gap-1 text-sm items-center">
            <img
              src={author?.avatarUrl}
              alt="avatar"
              className="w-5 h-5 rounded-full"
              loading="lazy"
            />
            <span className="text-orange-600 font-medium">{author?.name}</span>
            <span className="text-gray-500">
              posted on {handleFormatDatePost(createdAt)}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex gap-4 items-start">
            <img
              src={image}
              alt="post image"
              className="w-[240px] object-contain"
              loading="lazy"
            />
            <div>
              <p className="text-lg font-medium">{title}</p>
              <p className="mt-2 text-sm">{body}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPosts;
