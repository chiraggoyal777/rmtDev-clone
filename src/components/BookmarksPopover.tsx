import { forwardRef } from "react";
import { useBookmarkContext } from "../hooks/useBookmarkContext";
import JobList from "./JobList";
import { createPortal } from "react-dom";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import JobListItem from "./JobListItem";

function BookmarkPopoverEmpty() {
  return (
    <div className="bookmarks-popover__empty">
      <BookmarkFilledIcon />
      <p>Bookmarks will appear here</p>
    </div>
  );
}
const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
  const { bookmarkedJobItems, isLoading } = useBookmarkContext();

  return createPortal(
    <div ref={ref} className="bookmarks-popover">
      {bookmarkedJobItems.length === 0 && !isLoading && (
        <BookmarkPopoverEmpty />
      )}
      <JobList
        jobItems={bookmarkedJobItems}
        isLoading={isLoading}
        source="bookmark"
        renderJobListItem={(jobItem, activeId) => {
          return (
            <JobListItem
              jobItem={jobItem}
              key={jobItem.id}
              isActive={jobItem.id === activeId}
              openAsFullView={true}
            />
          );
        }}
      />
    </div>,
    document.body
  );
});

export default BookmarksPopover;
