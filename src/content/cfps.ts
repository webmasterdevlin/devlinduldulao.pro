import type { Talk } from "./talks";

const conferences: Cfp[] = [
  {
    url: "https://djangocon.eu",
    month: "June",
    location: "Vigo, Spain",
  },
  {
    url: "https://www.javaland.eu",
    month: "March",
    location: "Nürburg, Germany",
  },
  {
    url: "https://webexpo.net",
    month: "May",
    location: "Prague, Czech Republic",
  },
  {
    url: "https://jonthebeach.com",
    month: "May",
    location: "Málaga, Spain",
  },
  {
    url: "https://www.phpconference.co.uk",
    month: "February",
    location: "London, UK",
  },
  {
    url: "https://www.azurefest.nl",
    month: "September",
    location: "Utrecht, Netherlands",
  },
  {
    url: "https://www.azurelowlands.com",
    month: "June",
    location: "Utrecht, Netherlands",
  },
  {
    url: "https://dotnetdays.ro",
    month: "April",
    location: "Iasi, Romania",
  },
  {
    url: "https://weyweyweb.com",
    month: "November",
    location: "Malaga, Spain",
  },
  {
    url: "https://reactalicante.es",
    month: "September",
    location: "Alicante, Spain",
  },
  {
    url: "https://www.devbcn.com",
    month: "June",
    location: "Barcelona, Spain",
  },
];

export default conferences;

export type Cfp = { month: string } & Pick<Talk, "location" | "url">;
