import { createContext, useContext } from "react";
import { CountryBasicInfo } from "../types/country";
import { State } from "../types/state";

interface ContextState {
  country: CountryBasicInfo;
}

export const CurrentCountryContext = createContext({} as ContextState);
export const useCurrentCountryContext = () => useContext(CurrentCountryContext);
