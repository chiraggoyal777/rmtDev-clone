import { forwardRef } from "react";
import { useBookmarkContext } from "../hooks/useBookmarkContext";
import JobList from "./JobList";
import { createPortal } from "react-dom";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
  const { bookmarkedJobItems, isLoading } = useBookmarkContext();

  return createPortal(
    <div ref={ref} className="bookmarks-popover">
      {bookmarkedJobItems.length === 0 ? (
        <div className="bookmarks-popover__empty">
          <BookmarkFilledIcon />
          <p>Bookmarks will appear here</p>
        </div>
      ) : (
        <JobList
          jobItems={bookmarkedJobItems}
          isLoading={isLoading}
          source="bookmark"
        />
      )}
    </div>,
    document.body
  );
});

export default BookmarksPopover;
