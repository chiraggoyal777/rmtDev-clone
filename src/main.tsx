import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookmarkContextProvider from "./contexts/BookmarksContextProvider.tsx";
import SearchTextContextProvider from "./contexts/SearchTextContextProvider.tsx";
import JobItemsContextProvider from "./contexts/JobItemsContextProvider.tsx";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <BookmarkContextProvider>
            <SearchTextContextProvider>
              <JobItemsContextProvider>
                <App />
              </JobItemsContextProvider>
            </SearchTextContextProvider>
        </BookmarkContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
