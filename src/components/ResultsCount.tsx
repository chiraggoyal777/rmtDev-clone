import { useJobItemsContext } from "../hooks/useJobItemsContext";

export default function ResultsCount() {
  const { totalNumberOfResults, isLoading } = useJobItemsContext();

  return (
    <p className="count">
      <span className="u-bold">
        {isLoading ? "Loading..." : <span>{totalNumberOfResults} results</span>}
      </span>
    </p>
  );
}
