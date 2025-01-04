import { forwardRef } from "react";
import { useBookmarkContext } from "../hooks/useBookmarkContext";
import JobList from "./JobList";
import { createPortal } from "react-dom";

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
  const { bookmarkedJobItems, isLoading } = useBookmarkContext();

  return createPortal(
    <div ref={ref} className="bookmarks-popover">
      <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} source="bookmark" />
    </div>,
    document.body
  );
});

export default BookmarksPopover;
