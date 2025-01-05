import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListingPage from "../pages/Listing";
import HomePage from "../pages/Home";
import BookmarkContextProvider from "../contexts/BookmarksContextProvider";
import SearchTextContextProvider from "../contexts/SearchTextContextProvider";
import JobItemsContextProvider from "../contexts/JobItemsContextProvider";
import ActiveIdContextProvider from "../contexts/ActiveIdContextProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <BookmarkContextProvider>
              <SearchTextContextProvider>
                <JobItemsContextProvider>
                  <ActiveIdContextProvider>
                    <HomePage />
                  </ActiveIdContextProvider>
                </JobItemsContextProvider>
              </SearchTextContextProvider>
            </BookmarkContextProvider>
          }
        />
        {/* Dynamic route for search page */}
        <Route
          path="/:jobId"
          element={
            <BookmarkContextProvider>
              <SearchTextContextProvider>
                <ActiveIdContextProvider>
                  <ListingPage />
                </ActiveIdContextProvider>
              </SearchTextContextProvider>
            </BookmarkContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
