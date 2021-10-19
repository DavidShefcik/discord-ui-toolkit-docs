import { createContext } from "react";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}
export interface DocsTheme {
  theme: Theme;
  setTheme(theme: Theme): void;
}

export default createContext<DocsTheme>({
  theme: Theme.DARK,
  setTheme: () => {},
});
