import ExternalServices from "./ExternalServices.mjs";
import { loadHeaderFooter, getParams } from "./utils.mjs";
import TeamListing from "./TeamListing.mjs";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeaderFooter();
});
const idSeason = getParams("season");
const idLeague = getParams("league");
const dataSource = new ExternalServices();
const element = document.querySelector("#displayList");
const listing = new TeamListing(idSeason, idLeague, dataSource, element);

listing.init();
