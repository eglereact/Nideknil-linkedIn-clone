import TimeAgo from "timeago-react";

function Article({ title, publishedAt, url }) {
  return (
    <div
      className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 dark:hover:bg-black/20
    px-2.5 py-1"
    >
      <div>
        <h5 className="max-w-xs font-medium text-sm truncate pr-10">
          <a href={url}>{title}</a>
        </h5>
        <TimeAgo
          datetime={publishedAt}
          className="text-xs mt-0.5 dark:text-white/75 opacity-80"
        />
      </div>
    </div>
  );
}

export default Article;
