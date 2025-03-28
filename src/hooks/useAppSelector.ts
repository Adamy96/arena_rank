import { useSelector } from "react-redux";
import type { RootState } from "@/state/store";

const useAppSelector = useSelector.withTypes<RootState>();

export default useAppSelector;
