import ExternalServices from "./ExternalServices.mjs";
import { getParams } from "./utils.mjs";
import TeamListing from "./TeamListing.mjs";

const idLeague = getParams("league");
const dataSource = new ExternalServices();
const element = document.querySelector("#displayList");
const listing = new TeamListing(idLeague, dataSource, element);

listing.init();
