import JobItemContent from "../components/JobItemContent";
import JobListSearch from "../components/JobListSearch";
import Layout from "../components/Layout";
import PaginationControls from "../components/PaginationControls";
import ResultsCount from "../components/ResultsCount";
import Sidebar, { SidebarTop } from "../components/Sidebar";
import SortingControls from "../components/SortingControls";
import { useJobItemsContext } from "../hooks/useJobItemsContext";

function HomePage() {
  const { totalNumberOfResults, isLoading } = useJobItemsContext();
  return (
    <Layout>
      {(totalNumberOfResults !== 0 || isLoading) && (
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <SortingControls />
          </SidebarTop>

          <JobListSearch />
          <PaginationControls />
        </Sidebar>
      )}

      <JobItemContent />
    </Layout>
  );
}
export default HomePage;
