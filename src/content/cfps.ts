import type { Talk } from "./talks";

const conferences: Cfp[] = [
  {
    url: "https://djangocon.eu",
    month: "June",
    location: "Vigo, Spain",
  },
];

export default conferences;

export type Cfp = { month: string } & Pick<Talk, "location" | "url">;
