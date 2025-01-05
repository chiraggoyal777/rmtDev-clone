import { TSortBy } from "./types";

export const BASE_URL =
  "https://bytegrad.com/course-assets/projects/rmtdev/api/data";

export const COUNT_ON_PAGE = 7;
export const SS_KEY_SEARCH_PARAMS = "searchQuery";
export const SS_KEY_BOOKMARKS_POPOVER = "fromBookmarksPopover";
export const DEFAULT_SORT_BY: TSortBy = "relevant";
export const SORT_BY_OPTIONS: TSortBy[] = ["relevant", "recent"];
