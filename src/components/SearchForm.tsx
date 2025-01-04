import { useRef, useState } from "react";
import { useSearchTextContext } from "../hooks/useSearchTextContex";
import { useNavigate, useParams } from "react-router-dom";
import {
  SS_KEY_BOOKMARKS_POPOVER,
  SS_KEY_SEARCH_PARAMS,
} from "../lib/constants";

export default function SearchForm() {
  const { jobId } = useParams<{ jobId: string }>();
  const { searchText, handleChangeSearchText } = useSearchTextContext();
  const [searchVal, setSearchVal] = useState(searchText);
  const navigate = useNavigate();
  const searchParams = sessionStorage.getItem(SS_KEY_SEARCH_PARAMS);
  const searchInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="search">
      {jobId &&
        JSON.parse(
          sessionStorage.getItem(SS_KEY_BOOKMARKS_POPOVER) || "false"
        ) && (
          <button
            className="back-btn"
            onClick={() => {
              navigate(`/?${searchParams}`);
              sessionStorage.setItem(SS_KEY_BOOKMARKS_POPOVER, "false");
              sessionStorage.removeItem(SS_KEY_SEARCH_PARAMS);
            }}
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
          <button className="clear-search-btn" type="button" onClick={() => (setSearchVal(""), searchInputRef.current?.focus())}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}
      </form>
    </div>
  );
}
