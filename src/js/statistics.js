import ExternalServices from "./ExternalServices.mjs";
import { loadHeaderFooter, getParams } from "./utils.mjs";
import teamstats from "./teamstats.mjs";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeaderFooter();

  const idTeam = getParams("team");
  const idSeason = getParams("season");
  const idLeague = getParams("league");
  const dataSource = new ExternalServices();
  const element = document.querySelector("#statisticsdisplayList");

  if (idTeam && idSeason && idLeague && element) {
    const listing = new teamstats(
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

  const toggleStripingButton = document.getElementById("toggleStriping");
  toggleStripingButton.addEventListener("click", () => {
    const statisticsList = document.querySelector("#statisticsdisplayList");
    statisticsList.classList.toggle("striped");
  });
});
