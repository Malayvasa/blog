import { useRouter } from "next/router";
import Image from "next/image";
import siteConfig from "@/data/siteConfig";
import Link from "next/link";
import { cx } from "@/lib/utils";

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <header className="fixed right-0 left-0 w-full max-w-3xl mx-auto backdrop-blur-md py-4 my-4 px-4 bg-neutral-800 bg-opacity-80 rounded-md flex justify-between items-center">
      <Link href="/" className="font-bold">
        {
          siteConfig.siteName
        }
      </Link>

      <nav>
        <ul className="flex space-x-8">
          {siteConfig.nav.map((item, index) => {
            const isActive = item.href === pathname;
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cx(
                    "text-gray-500 hover:text-gray-900",
                    "dark:text-gray-400 dark:hover:text-gray-300"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
