import Head from "next/head";
import { onlyText } from "react-children-utilities";
import { formatDate } from "@/lib/formatDate";
import siteConfig from "@/data/siteConfig";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft } from "react-feather";

interface PageProps {
  date?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  thumbnail?: string;
  children?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
  date,
  title,
  description,
  thumbnail,
  children,
}) => {
  const metaTitle = onlyText(title);
  const metaDescription = description
    ? onlyText(description)
    : siteConfig.siteDescription;
  const metaThumbnail = thumbnail ? thumbnail : siteConfig.siteThumbnail;
  // fixed https://github.com/vercel/next.js/discussions/38256
  const customTitle = `${metaTitle} - ${siteConfig.siteName}`;
  return (
    <>
      <Head>
        <title>{customTitle}</title>
        <meta name="og:url" content={siteConfig.siteUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content={`${siteConfig.siteUrl}${metaThumbnail}`}
        />
      </Head>
      <header
        className={cx(
          "border-b pb-12 mb-8 mt-52",
          "border-gray-200",
          "dark:border-neutral-700 text-neutral-400"
        )}
      >
        <Link href="/">
          <div className="flex gap-x-2 mb-4 ">
            <ArrowLeft width={18} />
            <div>Back</div>


          </div>
        </Link>

        <h1 className="text-white font-bold text-3xl">{title}</h1>
        {date ? (
          <time
            className={cx("block mt-2", "text-gray-500", "dark:text-neutral-400")}
          >
            {formatDate(date, 'dd MMMM yyyy')}
          </time>
        ) : null}
        {/* {description ? (
          <div className="mt-4">
            <Prose>
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </Prose>
          </div>
        ) : null} */}
      </header>
      {children}
    </>
  );
};
