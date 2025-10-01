import { themeVariables } from "./app/theme";

export function applyCustomTheme(theme: string) {
  const variables = themeVariables[theme];
  if (!variables) return;

  const root = document.documentElement;
  Object.entries(variables).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
