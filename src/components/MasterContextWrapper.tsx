import { ReactNode } from "react";
import BookmarkContextProvider from "../contexts/BookmarksContextProvider";
import SearchTextContextProvider from "../contexts/SearchTextContextProvider";
import JobItemsContextProvider from "../contexts/JobItemsContextProvider";
import ActiveIdContextProvider from "../contexts/ActiveIdContextProvider";


export default function MasterContextWrapper({ children }: { children: ReactNode }) {
  return (
    <BookmarkContextProvider>
      <SearchTextContextProvider>
        <JobItemsContextProvider>
          <ActiveIdContextProvider>{children}</ActiveIdContextProvider>
        </JobItemsContextProvider>
      </SearchTextContextProvider>
    </BookmarkContextProvider>
  );
}
