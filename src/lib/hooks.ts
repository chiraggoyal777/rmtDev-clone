import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { handleError } from "./utils";
import { fetchJobItem } from "../services/apiJobItem";
import { TJobItemId, TSortBy } from "./types";
import { jobIdParam, pageParam, searchParam, sortParam } from "./queryParams";
import { DEFAULT_SORT_BY, SORT_BY_OPTIONS } from "./constants";

export function useJobItem(id: TJobItemId | null) {
  const { data, isInitialLoading } = useQuery(
    ["job-item", id],
    () => (id ? fetchJobItem(id) : null),
    {
      staleTime: 1000 * 60 * 60, // 1 hour
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError,
    }
  );

  return { jobItem: data?.jobItem, isLoading: isInitialLoading } as const;
}

export function useDebounce<T>(value: T, timedelay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedValue(value), timedelay);

    return () => clearTimeout(timerId);
  }, [value, timedelay]);

  return debouncedValue;
}

export function useQueryParams() {
  const URLQueryParams = new URLSearchParams(location.search);
  const searchQ = URLQueryParams.get(searchParam);
  const pageQ = URLQueryParams.get(pageParam);
  const jobIdQ = URLQueryParams.get(jobIdParam);
  const sortByQ = (SORT_BY_OPTIONS.includes(URLQueryParams.get(sortParam) as TSortBy) ? URLQueryParams.get(sortParam) : DEFAULT_SORT_BY) as TSortBy;
  return { searchQ, pageQ, jobIdQ, sortByQ };
}
