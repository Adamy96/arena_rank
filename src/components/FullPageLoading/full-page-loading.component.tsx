import ClipLoader from "react-spinners/ClipLoader";
import { useLoading } from "@/hooks";
import styles from "./full-page-loading.styles.module.scss";

const FullPageLoading = () => {
  const { loadingState } = useLoading();

  if (!loadingState.fullpage) return null;

  return (
    <div className={styles.fullPageLoading}>
      <ClipLoader
        color={"#fff"}
        loading={loadingState.fullpage}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default FullPageLoading;
