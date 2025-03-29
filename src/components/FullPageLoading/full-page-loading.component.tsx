import ClipLoader from "react-spinners/ClipLoader";
import { useLoading } from "@/hooks";
import styles from "./full-page-loading.styles.module.scss";
import { colors } from "@/styles/variables";

const FullPageLoading = () => {
  const { loadingState } = useLoading();

  if (!loadingState.fullpage) return null;

  return (
    <div className={styles.fullPageLoading}>
      <ClipLoader
        color={colors.colorNeutralLightest}
        loading={loadingState.fullpage}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default FullPageLoading;
