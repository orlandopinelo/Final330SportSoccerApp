import ExternalServices from "./ExternalServices.mjs";
import { loadHeaderFooter, getParams } from "./utils.mjs";
import FixtureListing from "./FixtureListing.mjs";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeaderFooter();

  const idTeam = getParams("team");
  const idSeason = getParams("season");
  const idLeague = getParams("league");
  const dataSource = new ExternalServices();
  const element = document.querySelector("#fixturedisplayList");

  if (idTeam && idSeason && idLeague && element) {
    const listing = new FixtureListing(
      idTeam,
      idSeason,
      idLeague,
      dataSource,
      element,
    );
    await listing.init();
  } else {
    console.error("Required parameters or element missing");
  }
});
