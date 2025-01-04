import { useParams } from "react-router-dom";
import { jobIdParam } from "../lib/queryParams";

export function useActiveId() {
  const { jobId } = useParams<{ jobId: string }>();
  let activeId = null;
  if (jobId) {
    activeId = +(jobId || "");
  } else {
    const searchParams = new URLSearchParams(location.search);
    activeId = +(searchParams.get(jobIdParam) || "");
  }

  return activeId;
}
