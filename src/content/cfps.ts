import type { Talk } from "./talks";

const conferences: Cfp[] = [
  {
    url: "https://api-platform.com/con",
    month: "September",
    location: "Lille, France",
  },
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
  {
    url: "https://www.codemotion.com",
    month: "May",
    location: "Madrid, Spain",
  },
  {
    url: "https://www.neoscon.io",
    month: "May",
    location: "Dresden, Germany",
  },
  {
    url: "https://www.iglooconf.fi",
    month: "June",
    location: "Helsinki, Finland",
  },
  {
    url: "https://www.swetugg.se",
    month: "February",
    location: "Stockholm, Sweden",
  },
  {
    url: "https://www.devsum.se",
    month: "May",
    location: "Stockholm, Sweden",
  },
  {
    url: "https://mixitconf.org",
    month: "April",
    location: "Lyon, France",
  },
  {
    url: "https://confoo.ca",
    month: "February",
    location: "Montreal, Canada",
  },

  {
    url: "https://ndclondon.com",
    month: "January",
    location: "London, UK",
  },
  {
    url: "https://ndcporto.com",
    month: "October",
    location: "Porto, Portugal",
  },
  {
    url: "https://portotechhub.com",
    month: "October",
    location: "Porto, Portugal",
  },
  {
    url: "https://www.craftcms.com/blog/events",
    month: "July",
    location: "Barcelona, Spain",
  },
  {
    url: "https://websummercamp.com",
    month: "July",
    location: "Opatija, Croatia",
  },
  {
    url: "https://shift.infobip.com",
    month: "September",
    location: "Zadar, Croatia",
  },
  {
    url: "https://trondheimdc.no",
    month: "October",
    location: "Trondheim, Norway",
  },
  {
    url: "https://chainreactconf.com",
    month: "July",
    location: "Portland, Oregon, USA",
  },
  {
    url: "https://allthingsopen.org",
    month: "October",
    location: "Raleigh, North Carolina, USA",
  },
  {
    url: "https://devdays.lt",
    month: "May",
    location: "Vilnius, Lithuania",
  },
  {
    url: "https://www.developer-week.de",
    month: "Juli",
    location: "Nuremberg, Germany",
  },
  {
    url: "https://enterjs.de",
    month: "May",
    location: "Darmstadt, Germany",
  },
  {
    url: "https://js-poland.pl",
    month: "November",
    location: "Warsaw, Poland",
  },
  {
    url: "europe.jcon.one",
    month: "May",
    location: "Cologne, Germany",
  },
  {
    url: "https://www.devtalks.ro",
    month: "May",
    location: "Bucharest, Romania",
  },
  {
    url: "https://www.updateconference.net",
    month: "November",
    location: "Prague, Czech Republic",
  },
  {
    url: "https://armada-js.com",
    month: "October",
    location: "Novi Sad, Serbia",
  },
  {
    url: "https://heapcon.io",
    month: "November",
    location: "Belgrade, Serbia",
  },
  {
    url: "https://4developers.org.pl",
    month: "September",
    location: "Several cities in Poland",
  },
  {
    url: "https://dotnetday.ch",
    month: "August",
    location: "Zurich, Switzerland",
  },
  {
    url: "https://www.devday.be",
    month: "November",
    location: "Mons, Belgium",
  },
];
// TODO: NDC, Devoxx, Voxx, CityJS,
export default conferences;

export type Cfp = { month: string } & Pick<Talk, "location" | "url">;
