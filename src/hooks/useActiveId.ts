import { useParams } from "react-router-dom";
import { TJobItemId } from "../lib/types";
import { useQueryParams } from "../lib/hooks";

export function useActiveId(): TJobItemId | null {
  const { jobId } = useParams<{ jobId: string }>();
  const { jobIdQ } = useQueryParams();
  let activeId = null;
  if (jobId) {
    activeId = +(jobId || "");
  } else {
    activeId = +(jobIdQ || "");
  }

  return activeId;
}

export function useRouterJobId(): TJobItemId | null {
  const { jobId } = useParams<{ jobId: string }>();
  const routeJobId = +(jobId || "") || null;
  return routeJobId;
}
