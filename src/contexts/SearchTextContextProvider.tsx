import { ReactNode, createContext, useEffect, useState } from "react";
import { useQueryParams } from "../lib/hooks";
import { useNavigate } from "react-router-dom";
import { searchParam } from "../lib/queryParams";
import { useRouterJobId } from "../hooks/useActiveId";

type SearchTextContextType = {
  searchText: string;
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
  const URLQueryParams = new URLSearchParams(location.search);
  const routerJobId = useRouterJobId();
  const { searchQ } = useQueryParams();
  const [searchVal, setSearchVal] = useState(searchQ || "");
  const searchText = routerJobId ? searchVal : searchQ || "";
  const handleChangeSearchText = (newSearchText: string) => {
    setSearchVal(newSearchText);
    URLQueryParams.set(searchParam, newSearchText);
    navigate(`/?${URLQueryParams.toString()}`, {
      replace: true,
    });
  };

  // 2 way binding
  useEffect(() => {
    searchText && setSearchVal(searchText);
  }, [searchText]);
  
  return (
    <SearchTextContext.Provider value={{ searchText, handleChangeSearchText }}>
      {children}
    </SearchTextContext.Provider>
  );
}
