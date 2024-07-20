import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Tag from "../ui/Tag";
import Overlay from "../ui/Overlay";
import Link from "next/link";

interface blogCardProps {
  id: string;
  title: string;
  image_path: string;
  paragraph: string;
  featured: boolean;
  topPost: boolean;
  tags: string[];
  authorImage: string;
  authorName: string;
  publishDate: string;
}
const BlogCard = ({ post, index }: { post: blogCardProps; index: number }) => {
  return (
    <article className="relative rounded-lg overflow-hidden">
      <div className="2-[1000px] h-[450px] relative">
        <Image
          src={post.image_path}
          fill
          alt={`image for ${post.title}`}
          className="object-cover"
        />
        <Overlay />
      </div>

      <div className="absolute w-full h-full top-0 p-5 flex flex-col justify-between">
        <div>
          <Tag text={post.tags} />
          <h3 className="text-3xl font-extrabold uppercase text-white">
            {post.title}
          </h3>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
