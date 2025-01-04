import { ReactNode, createContext, useState } from "react";
import { useDebounce } from "../lib/hooks";
import { useNavigate } from "react-router-dom";
import { searchParam } from "../lib/queryParams";

type SearchTextContextType = {
  searchText: string;
  debouncedSearchText: string;
  handleChangeSearchText: (newSearchText: string) => void;
};

export const SearchTextContext = createContext<SearchTextContextType | null>(
  null
);

export default function SearchTextContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const navigate = useNavigate();
  // Parse the query string
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchParam); // Extract searchParam parameter
  const [searchText, setSearchText] = useState(query || "");

  const debouncedSearchText = useDebounce(searchText, 500);

  const handleChangeSearchText = (newSearchText: string) => {
    setSearchText(newSearchText);
    // Add or update the new parameter
    searchParams.set(searchParam, newSearchText);
    navigate(`/?${searchParams.toString()}`, {
      replace: true,
    });
  };
  return (
    <SearchTextContext.Provider
      value={{ searchText, debouncedSearchText, handleChangeSearchText }}
    >
      {children}
    </SearchTextContext.Provider>
  );
}
