import { useNavigate } from "react-router-dom";
import { TJobItem } from "../lib/types";
import BookmarkButton from "./BookmarkButton";
import { jobIdParam } from "../lib/queryParams";
import { useRouterJobId } from "../hooks/useActiveId";
import { SS_KEY_BOOKMARKS_POPOVER } from "../lib/constants";

export default function JobListItem({
  jobItem,
  isActive,
  openAsFullView,
}: {
  jobItem: TJobItem;
  isActive: boolean;
  openAsFullView?: boolean;
}) {
  const routerJobId = useRouterJobId();
  const navigate = useNavigate();
  function handleJobItemClick() {
    const URLQueryParams = new URLSearchParams(location.search);
    if (openAsFullView) {
      sessionStorage.setItem(SS_KEY_BOOKMARKS_POPOVER, "true");
      navigate(`/${jobItem.id}`, { replace: !!routerJobId });
    } else {
      // Add or update the new parameter
      URLQueryParams.set(jobIdParam, jobItem.id.toString());
      navigate(`${location.pathname}?${URLQueryParams.toString()}`, {
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
          <BookmarkButton id={jobItem.id} />
          <time className="job-item__time">{jobItem.daysAgo}d</time>
        </div>
      </div>
    </li>
  );
}
