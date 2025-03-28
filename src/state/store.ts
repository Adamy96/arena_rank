import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "./modals/modalsSlice";
import loadingReducer from "./loading/loadingSlice";

// Criação da store com os reducers
export const store = configureStore({
  reducer: {
    modals: modalsReducer,
    loading: loadingReducer,
  },
});

// Tipagem para o estado global da aplicação
export type RootState = ReturnType<typeof store.getState>;

// Tipagem para o dispatch (função que dispara as actions)
export type AppDispatch = typeof store.dispatch;

// Criação de hooks personalizados para usar com os tipos definidos
// Para acessar o dispatch com tipagem correta
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Para acessar o estado com tipagem correta
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
