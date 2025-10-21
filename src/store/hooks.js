import { useDispatch, useSelector } from 'react-redux';

// Redux hooks với TypeScript-like typing
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
