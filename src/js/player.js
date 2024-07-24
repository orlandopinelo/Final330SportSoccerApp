import ExternalServices from "./ExternalServices.mjs";
import { loadHeaderFooter, getParams } from "./utils.mjs";
import PlayerListing from "./PlayerListing.mjs";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeaderFooter();

  const idTeam = getParams("team");
  const idSeason = getParams("season");
  const dataSource = new ExternalServices();
  const element = document.querySelector("#playerdisplayList");

  if (idTeam && idSeason && element) {
    const listing = new PlayerListing(idTeam, idSeason, dataSource, element);
    await listing.init();
  } else {
    console.error("Required parameters or element missing");
  }
});
