import { useNavigate } from "react-router-dom";
import { TJobItem } from "../lib/types";
import BookmarkIcon from "./BookmarkIcon";
import { jobIdParam, searchParam } from "../lib/queryParams";
import { SS_KEY_BOOKMARKS_POPOVER, SS_KEY_SEARCH_PARAMS } from "../lib/constants";

export default function JobListItem({
  jobItem,
  isActive,
  openAsFullView,
  fromBookmarksPopover
}: {
  jobItem: TJobItem;
  isActive: boolean;
  openAsFullView?: boolean;
  fromBookmarksPopover?: boolean;
}) {
  const navigate = useNavigate();
  function handleJobItemClick() {
    const searchParams = new URLSearchParams(location.search);
    if (openAsFullView) {
      if (fromBookmarksPopover && searchParams.size > 0 && searchParams.has(searchParam)) {
        sessionStorage.setItem(SS_KEY_BOOKMARKS_POPOVER, "true");
        sessionStorage.setItem(SS_KEY_SEARCH_PARAMS, searchParams.toString());
      }
      // searchParams.delete(jobIdParam);
      // navigate(`/${jobItem.id}?${searchParams.toString()}`);

      navigate(`/${jobItem.id}`);
    } else {
      // Add or update the new parameter
      searchParams.set(jobIdParam, jobItem.id.toString());
      navigate(`${location.pathname}?${searchParams.toString()}`, {
        replace: true,
      });
    }
  }
  return (
    <li className={`job-item ${isActive ? "job-item--active" : ""}`}>
      <div
        className="job-item__link"
        role="button"
        tabIndex={0} // Makes it focusable
        onClick={handleJobItemClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleJobItemClick();
          }
        }}
      >
        <div className="job-item__badge">{jobItem.badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{jobItem.title}</h3>
          <p className="job-item__company">{jobItem.company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon id={jobItem.id} />
          <time className="job-item__time">{jobItem.daysAgo}d</time>
        </div>
      </div>
    </li>
  );
}
