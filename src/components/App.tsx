import { Route, Routes } from "react-router-dom";
import ListingPage from "../pages/Listing";
import HomePage from "../pages/Home";
import ActiveIdContextProvider from "../contexts/ActiveIdContextProvider";
import { useEffect } from "react";
import { SS_KEY_BOOKMARKS_POPOVER, SS_KEY_SEARCH_PARAMS } from "../lib/constants";

function App() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Remove session storage keys
      [SS_KEY_BOOKMARKS_POPOVER, SS_KEY_SEARCH_PARAMS].forEach(key => sessionStorage.removeItem(key));
    };

    // Attach the event listener
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ActiveIdContextProvider>
            <HomePage />
          </ActiveIdContextProvider>
        }
      />
      {/* Dynamic route for search page */}
      <Route
        path="/:jobId"
        element={
          <ActiveIdContextProvider>
            <ListingPage />
          </ActiveIdContextProvider>
        }
      />
    </Routes>
  );
}

export default App;
