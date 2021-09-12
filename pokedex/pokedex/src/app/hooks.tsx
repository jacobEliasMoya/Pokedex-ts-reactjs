import { TypedUseSelectorHook,useSelector,useDispatch } from "react-redux";//importing builtin hooks

import { RootState,AppDispatch } from "../store/store";//importing types

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;