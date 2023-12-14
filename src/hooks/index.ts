import type { AppDispatch, RootState } from '@/redux/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

type DispatchFunc = () => AppDispatch;

// Use instead of plain `useDispatch()` and `useSelector()`
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
