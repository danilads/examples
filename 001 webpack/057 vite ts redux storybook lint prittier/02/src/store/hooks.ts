import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "./store";

import { translateFile } from "translate/translate";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTranslation = (): Record<string, string> => {
  const language = useAppSelector((state) => state.translate.lang);

  const langNumber = (() => {
    if (language === "EN") {
      return 0;
    }
    return 0;
  })();

  const result: Record<string, string> = {};

  for (const key in translateFile) {
    if (!Object.prototype.hasOwnProperty.call(translateFile, key)) continue;

    const arr = translateFile[key];
    if (!Array.isArray(arr) || arr.length <= langNumber) continue;

    result[key] = arr[langNumber];
  }

  return result;
};
