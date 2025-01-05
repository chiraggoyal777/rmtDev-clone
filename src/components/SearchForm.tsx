import { useRef, useState } from "react";
import { useSearchTextContext } from "../hooks/useSearchTextContext";
import { useNavigate } from "react-router-dom";
import { useRouterJobId } from "../hooks/useActiveId";
import { SS_KEY_BOOKMARKS_POPOVER } from "../lib/constants";

export default function SearchForm() {
  const { searchText, handleChangeSearchText } = useSearchTextContext();
  const [searchVal, setSearchVal] = useState(searchText);
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const routerJobId = useRouterJobId();
  const fromBookmarks = sessionStorage.getItem(SS_KEY_BOOKMARKS_POPOVER);

  return (
    <div className="search">
      {routerJobId && fromBookmarks && (
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
          title="Back to results"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      )}
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          handleChangeSearchText(searchVal);
        }}
      >
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        <input
          ref={searchInputRef}
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          spellCheck="false"
          type="text"
          required
          placeholder="Find remote developer jobs..."
        />

        {searchVal !== "" && (
          <button
            className="clear-search-btn"
            type="button"
            onClick={() => (setSearchVal(""), searchInputRef.current?.focus())}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}
      </form>
    </div>
  );
}
