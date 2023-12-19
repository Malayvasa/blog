import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { ArrowRight } from "react-feather";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <div className="text-white font-bold text-xl md:text-3xl mt-8 md:mt-32">
        A series of unrelated design and web-dev thoughts, documented.
      </div>
      <div className=" border-neutral-800 border-b-2 my-8"></div>
      <PostList posts={posts} />
      <div className="mt-8">
        <Link
          passHref
          href="/posts"
          className="group inline-flex items-center gap-2  text-neutral-800"
        >
          View more posts{" "}
          <ArrowRight
            className="group-hover:translate-x-0.5 transition-transform"
            width={".9em"}
          />
        </Link>
      </div>

    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles,
    },
  };
};

export default Home;
