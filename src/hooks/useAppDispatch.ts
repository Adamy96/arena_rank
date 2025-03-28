import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/state/store";

const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default useAppDispatch;
