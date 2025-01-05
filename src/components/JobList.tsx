import { useActiveIdContext } from "../hooks/useActiveIdContext";
import { COUNT_ON_PAGE } from "../lib/constants";
import { TJobItem, TJobItemId } from "../lib/types";
import JobListItem from "./JobListItem";
// import Skeleton from "./Skeleton";
// import Spinner from "./Spinner";

type JobListProps = {
  jobItems: TJobItem[];
  isLoading: boolean;
  source?: "listing" | "bookmark";
  renderJobListItem?: (
    jobItem: TJobItem,
    activeId: TJobItemId | null
  ) => JSX.Element;
};
import Skeleton from "./Skeleton";

function JobListItemSkeleton() {
  return (
    <li className={`job-item pe-none`}>
      <div className="job-item__link">
        <div className="job-item__badge"></div>

        <div className="job-item__middle">
          <h3 className="third-heading">
            <Skeleton width={150} />
          </h3>
          <p className="job-item__company">
            <Skeleton width={100} />
          </p>
        </div>

        <div className="job-item__right">
          {/* <BookmarkIcon id={jobItem.id} /> */}
          <Skeleton width={16} />
          <time className="job-item__time">
            <Skeleton width={16} />
          </time>
        </div>
      </div>
    </li>
  );
}
// reusable component - can't use
export function JobList({
  jobItems,
  isLoading,
  source = "listing",
  renderJobListItem,
}: JobListProps) {
  const { activeId } = useActiveIdContext();

  return (
    <ul className="job-list">
      {isLoading &&
        Array.from({ length: source === "bookmark" ? 3 : COUNT_ON_PAGE }).map(
          (_, index) => <JobListItemSkeleton key={index} />
        )}

      {!isLoading &&
        (renderJobListItem
          ? jobItems.map((jobItem) => renderJobListItem(jobItem, activeId))
          : jobItems.map((jobItem) => (
              <JobListItem
                jobItem={jobItem}
                key={jobItem.id}
                isActive={jobItem.id === activeId}
              />
            )))}
    </ul>
  );
}

export default JobList;
