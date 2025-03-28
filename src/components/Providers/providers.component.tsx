"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/state/store";
import { FullPageLoading, Modals } from "@/components";

const Provider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ReduxProvider store={store}>
      <FullPageLoading />
      <Modals />
      {children}
    </ReduxProvider>
  );
};

export default Provider;
