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
    url: "https://ndcoslo.com",
    month: "June",
    location: "Oslo, Norway",
  },
  {
    url: "https://ndcsydney.com",
    month: "February",
    location: "Sydney, Australia",
  },
  {
    url: "https://ndcmelbourne.com",
    month: "June",
    location: "Melbourne, Australia",
  },
  {
    url: "https://cphdevfest.com",
    month: "October",
    location: "Copenhagen, Denmark",
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
    month: "July",
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
    url: "https://europe.jcon.one",
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
  {
    url: "https://oredev.org",
    month: "November",
    location: "Malmö, Sweden",
  },
  {
    url: "https://london.cityjsconf.org",
    month: "April",
    location: "London, UK",
  },
  {
    url: "https://greece.cityjsconf.org",
    month: "June",
    location: "Athens, Greece",
  },
  {
    url: "https://medellin.cityjsconf.org",
    month: "October",
    location: "Medellin, Colombia",
  },
  {
    url: "https://berlin.cityjsconf.org",
    month: "November",
    location: "Berlin, Germany",
  },
  {
    url: "https://nigeria.cityjsconf.org",
    month: "October",
    location: "Lagos, Nigeria",
  },
  {
    url: "https://india.cityjsconf.org",
    month: "December",
    location: "New Delhi, India",
  },
  {
    url: "https://belgrade.cityjsconf.org",
    month: "September",
    location: "Belgrade, Serbia",
  },
  {
    url: "https://singapore.cityjsconf.org",
    month: "July",
    location: "Singapore",
  },
  {
    url: "https://brazil.cityjsconf.org",
    month: "August",
    location: "São Paulo, Brazil",
  },
  {
    url: "https://techorama.nl",
    month: "October",
    location: "Ede, Netherlands",
  },
  {
    url: "https://techorama.be",
    month: "May",
    location: "Antwerp, Belgium",
  },
  {
    url: "https://react.paris",
    month: "March",
    location: "Paris, France",
  },
  {
    url: "https://www.react.brussels",
    month: "October",
    location: "Brussels, Belgium",
  },
  {
    url: "https://www.bejs.io",
    month: "May",
    location: "Brussels, Belgium",
  },
  {
    url: "https://reactday.berlin",
    month: "December",
    location: "Berlin, Germany",
  },
  {
    url: "https://jsheroes.io",
    month: "May",
    location: "Cluj-Napoca, Romania",
  },
  {
    url: "https://revojs.ro",
    month: "October",
    location: "Timisoara, Romania",
  },
  {
    url: "https://jsconfbp.com",
    month: "June",
    location: "Budapest, Hungary",
  },
  {
    url: "https://www.buildstuff.events",
    month: "November",
    location: "Vilnius, Lithuania",
  },
  {
    url: "https://devoxx.be",
    month: "October",
    location: "Antwerp, Belgium",
  },
  {
    url: "https://devoxx.ma",
    month: "October",
    location: "Morocco",
  },
  {
    url: "https://www.devoxx.co.uk",
    month: "May",
    location: "London, UK",
  },
  {
    url: "https://devoxx.gr",
    month: "April",
    location: "Athens, Greece",
  },
  {
    url: "https://www.devoxx.fr",
    month: "April",
    location: "Paris, France",
  },
  {
    url: "https://voxxeddays.com/thessaloniki",
    month: "October",
    location: "Thessaloniki, Greece",
  },
  {
    url: "https://luxembourg.voxxeddays.com",
    month: "June",
    location: "Luxembourg",
  },
  {
    url: "https://voxxeddays.com/trieste",
    month: "May",
    location: "Trieste, Italy",
  },
  {
    url: "https://brussels.voxxeddays.com",
    month: "May",
    location: "Brussels, Belgium",
  },
  {
    url: "https://romania.voxxeddays.com",
    month: "March",
    location: "Bucharest, Romania",
  },
  {
    url: "https://frontend.barcelona",
    month: "December",
    location: "Barcelona, Spain",
  },
  {
    url: "https://nordicjs.com",
    month: "October",
    location: "Stockholm, Sweden",
  },
  {
    url: "https://javascript-conference.com/new-york",
    month: "October",
    location: "New York, USA",
  },
  {
    url: "https://www.jsconf.ie",
    month: "September",
    location: "Dublin, Ireland",
  },
  {
    url: "https://www.wearedevelopers.com/world-congress",
    month: "July",
    location: "Berlin, Germany",
  },
  {
    url: "https://appjs.co",
    month: "May",
    location: "Krakow, Poland",
  },
  {
    url: "https://www.reactmiami.com",
    month: "April",
    location: "Miami, USA",
  },
  {
    url: "https://weblica.hr/en/weblica",
    month: "May",
    location: "Zagreb, Croatia",
  },
  {
    url: "https://laravellive.uk",
    month: "June",
    location: "London, UK",
  },
  {
    url: "https://www.jfokus.se",
    month: "May",
    location: "Stockholm, Sweden",
  },
  {
    url: "https://phpconference.nl",
    month: "March",
    location: "Amsterdam, Netherlands",
  },
  {
    url: "https://webdevcon.nl",
    month: "March",
    location: "Amsterdam, Netherlands",
  },
  {
    url: "https://appdevcon.nl",
    month: "March",
    location: "Amsterdam, Netherlands",
  },
  {
    url: "https://javacro.hr",
    month: "October",
    location: "Rovinj, Croatia",
  },
  {
    url: "https://javazone.no",
    month: "September",
    location: "Oslo, Norway",
  },
  {
    url: "https://springio.net",
    month: "May",
    location: "Barcelona, Spain",
  },
  {
    url: "https://geecon.org",
    month: "May",
    location: "Krakow, Poland",
  },
  {
    url: "https://reactadvanced.com",
    month: "October",
    location: "London, UK",
  },
  {
    url: "https://vueday.it",
    month: "November",
    location: "Verona, Italy",
  },
  {
    url: "https://reactjsday.it",
    month: "October",
    location: "Verona, Italy",
  },
  {
    url: "https://angularday.it",
    month: "June",
    location: "Verona, Italy",
  },
  {
    url: "https://ng-de.org",
    month: "October",
    location: "Berlin, Germany",
  },
  {
    url: "https://ngrome.io",
    month: "June",
    location: "Rome, Italy",
  },
  {
    url: "https://reactsummit.com",
    month: "June",
    location: "Amsterdam, Netherlands",
  },
  {
    url: "https://reactsummit.us",
    month: "November",
    location: "New York, USA",
  },
  {
    url: "https://codegarden.umbraco.com",
    month: "June",
    location: "Odense, Denmark",
  },
  {
    url: "https://remix.run/conf",
    month: "May",
    location: "Salt Lake City, USA",
  },
  {
    url: "https://jsdaycanarias.com",
    month: "May",
    location: "Tenerife, Spain",
  },
  {
    url: "https://sunny-tech.io",
    month: "July",
    location: "Montpellier, France",
  },
  {
    url: "https://c3fest.com",
    month: "June",
    location: "Amsterdam, Netherlands",
  },
  {
    url: "https://reactconnection.io",
    month: "April",
    location: "Paris, France",
  },
  {
    url: "https://www.reactrally.com",
    month: "August",
    location: "Utah, USA",
  },
  {
    url: "https://reactlive.nl",
    month: "September",
    location: "Amsterdam, Netherlands",
  },
  {
    url: "https://www.reactindia.io",
    month: "September",
    location: "Goa, India",
  },
  {
    url: "https://reactnexus.com",
    month: "July",
    location: "Bangalore, India",
  },
  {
    url: "https://laracon.eu",
    month: "February",
    location: "Amsterdam, Netherlands",
  },
  {
    url: "https://laracon.au",
    month: "November",
    location: "Brisbane, Australia",
  },
  {
    url: "https://conference.teqnation.com",
    month: "May",
    location: "The Hague, Netherlands",
  },
  {
    url: "https://jdd.org.pl",
    month: "October",
    location: "Krakow, Poland",
  },
  {
    url: "https://epichey.dev",
    month: "November",
    location: "Lisbon, Portugal",
  },
  {
    url: "https://devworldconference.com",
    month: "February",
    location: "Amsterdam, Netherlands",
  },
  {
    url: "https://ng-conf.org",
    month: "April",
    location: "Salt Lake City, USA",
  },
  {
    url: "https://www.kcdc.info",
    month: "June",
    location: "Kansas City, USA",
  },
  {
    url: "https://refresh.rocks",
    month: "April",
    location: "Tallinn, Estonia",
  },
  {
    url: "https://ncrafts.io",
    month: "May",
    location: "Paris, France",
  },
  {
    url: "https://www.dotjs.io",
    month: "June",
    location: "Paris, France",
  },
  {
    url: "https://warszawskiedniinformatyki.pl",
    month: "April",
    location: "Warsaw, Poland",
  },
  {
    url: "https://tek.phparch.com",
    month: "April",
    location: "Chicago, USA",
  },
  {
    url: "https://appel.paris-web.fr",
    month: "September",
    location: "Paris, France",
  },
  {
    url: "https://dddeurope.com",
    month: "May",
    location: "Amsterdam, Netherlands",
  },
  {
    url: "https://www.devconf.co.za",
    month: "May",
    location: "Johannesburg, South Africa",
  },
  {
    url: "https://nordicapis.com",
    month: "October",
    location: "Stockholm, Sweden",
  },
  {
    url: "https://www.sharepointeurope.com",
    month: "November",
    location: "Stockholm, Sweden",
  },
  {
    url: "https://conference.eurostarsoftwaretesting.com",
    month: "June",
    location: "Stockholm, Sweden",
  },
  {
    url: "https://www.mdevcamp.eu",
    month: "April",
    location: "Prague, Czech Republic",
  },
  {
    url: "https://www.devquest.fr",
    month: "September",
    location: "Niort, France",
  },
  {
    url: "https://frontmania.com",
    month: "October",
    location: "Utrecht, Netherlands",
  },
  {
    url: "https://www.telerik.com/devreach",
    month: "October",
    location: "Sofia, Bulgaria",
  },
  {
    url: "https://devconf.pl",
    month: "October",
    location: "Łódź, Poland",
  },
  {
    url: "https://jdevsummitil.com",
    month: "February",
    location: "Tel Aviv",
  },
];
export default conferences;

export type Cfp = { month: string } & Pick<Talk, "location" | "url">;
