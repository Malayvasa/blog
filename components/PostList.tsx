'use client'

import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import type { MDXFrontMatter } from "@/lib/types";
import { Prose } from "@/components/Prose";
import { cx, slugify } from "@/lib/utils";
import { Tag } from "./Tag";

interface PostListProps {
  posts: Array<MDXFrontMatter>;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul
      className="space-y-4"
    >
      {posts.map((post, index) => {
        return (
          <li key={index}>
            <Link
              passHref
              href={`/posts/${post.slug}`}>
              <div className="p-1 group rounded-md text-neutral-400" >
                <article>
                  <div className="flex justify-between space-x-2">
                    <h2 className="font-bold text-xl flex-grow">
                      <div
                        className={cx(
                          "transition-colors duration-300",
                          " group-hover:text-lime-300", "group:hover:dark:text-lime-300"
                        )}
                      >{post.title}</div>
                      <time
                        className={cx(
                          "block text-sm mb-2 md:hidden",
                          "text-gray-500",
                          "dark:text-neutral-600"
                        )}
                      >
                        {formatDate(post.date, 'MM/yy')}
                      </time>
                    </h2>
                    {/* {post.tags ? (
                      <div className="space-x-2 flex flex-wrap ">
                        {post.tags.map((tag, index) => {
                          return (
                            <div key={index}>
                              <Tag href={`/posts/tagged/${slugify(tag)}`}>{tag}</Tag>
                            </div>
                          );
                        })}
                      </div>
                    ) : null} */}
                    <time
                      className={cx(
                        " mb-2 hidden md:block",
                        "text-gray-500",
                        "dark:text-neutral-600"
                      )}
                    >
                      {formatDate(post.date, 'MMM yyyy')}
                    </time>


                  </div>
                  {/* {post.description ? (
                <div className="mt-3">
                  <Prose>
                    <p>{post.description}</p>
                  </Prose>
                </div>
              ) : null} */}

                </article>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>

  );
};
