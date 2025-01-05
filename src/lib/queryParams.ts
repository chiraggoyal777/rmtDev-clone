export const QUERY_PARAMS = {
  SEARCH: "q",
  PAGE: "page",
  JOB_ID: "jobId",
  SORT: "sortBy",
  // Add more query parameters as needed
} as const;

// Use QUERY_PARAMS wherever needed
export const searchParam = QUERY_PARAMS.SEARCH;
export const pageParam = QUERY_PARAMS.PAGE;
export const jobIdParam = QUERY_PARAMS.JOB_ID;
export const sortParam = QUERY_PARAMS.SORT;