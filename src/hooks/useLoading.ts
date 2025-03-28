"use client";

import { setFullPageLoading as setFullPageLoadingReducer } from "../state/loading/loadingSlice";
import { useAppSelector, useAppDispatch } from "@/state/store";

const useLoading = () => {
  const loadingState = useAppSelector((state) => state.loading);
  const dispatch = useAppDispatch();

  const setFullPageLoading = (value: boolean) => {
    dispatch(setFullPageLoadingReducer(value));
  };

  return {
    loadingState,
    setFullPageLoading,
  };
};

export default useLoading;
