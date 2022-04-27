import Image from "next/image";
import { MdInfoOutline } from "react-icons/md";
import Article from "./Article";
import ad from "../images/ad.jpg";

function Widgets({ articles }) {
  return (
    <div className="hidden xl:inline space-y-2">
      <div
        className="bg-white dark:bg-[#1d2226] py-2.5 rounded-lg space-y-2 
      w-11/12 overflow-hidden border border-gray-300 dark:border-none"
      >
        <div className="flex items-center justify-between font-bold px-2.5">
          <h4>Nideknil News</h4>
          <MdInfoOutline className="text-2xl" />
        </div>
        <div className="space-y-1">
          {articles.slice(0, 5).map((article) => (
            <Article
              key={article.url}
              title={article.title}
              publishedAt={article.publishedAt}
              url={article.url}
            />
          ))}
        </div>
      </div>
      <div
        className="bg-white dark:bg-[#1d2226] w-11/12 h-64 px-2.5 rounded-lg sticky top-20
      border border-gray-300 dark:border-none"
      >
        <div className="relative w-full h-full">
          <Image src={ad} layout="fill" objectFit="contain" priority />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
