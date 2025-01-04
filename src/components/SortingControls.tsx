import { useJobItemsContext } from "../hooks/useJobItemsContext";
import { TSortBy } from "../lib/types";

export default function SortingControls() {
  const { sortBy, handleChangeSortBy, totalNumberOfResults, isLoading } =
    useJobItemsContext();

  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <SortingButton
        onClick={handleChangeSortBy}
        sortBy="relevant"
        isActive={"relevant" === sortBy}
        disabled={isLoading || totalNumberOfResults === 0}
      />
      <SortingButton
        onClick={handleChangeSortBy}
        sortBy="recent"
        isActive={"recent" === sortBy}
        disabled={isLoading || totalNumberOfResults === 0}
      />
    </section>
  );
}

type SortingButtonProps = {
  onClick: (newSortBy: TSortBy) => void;
  sortBy: TSortBy;
  isActive: boolean;
  disabled?: boolean;
};

function SortingButton({
  onClick,
  sortBy,
  isActive,
  disabled,
}: SortingButtonProps) {
  return (
    <button
      onClick={() => onClick(sortBy)}
      className={`sorting__button sorting__button--${sortBy} ${
        isActive ? "sorting__button--active" : ""
      }`}
      disabled={disabled}
    >
      {sortBy}
    </button>
  );
}
