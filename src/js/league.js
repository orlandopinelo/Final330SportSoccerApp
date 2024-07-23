import ExternalServices from "./ExternalServices.mjs";
import { loadHeaderFooter } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", async () => {

  await loadHeaderFooter();                                            
  const externalServices = new ExternalServices();
  const leaguedata = await externalServices.getLeaguesData();

  //get selected elements
  const countrySelect = document.querySelector("#countrySelect");
  const seasonSelect = document.querySelector("#seasonSelect");
 
  //extract  country and season year
  const leagueCountries = [
    ...new Set(
      leaguedata.response
        .map((league) => league.country.name)
        .filter((name) => name),
    ),
  ].sort((a, b) => a.localeCompare(b));
  const leagueSeasons = [
    ...new Set(
      leaguedata.response.flatMap((league) =>
        league.seasons.map((season) => season.year),
      ),
    ),
  ];
  //const leagueSeasons = [...new Set(leaguedata.response.map(league => league.seasons.year).filter(year => year))];

  //populate slected elements
  leagueCountries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });
  leagueSeasons.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    seasonSelect.appendChild(option);
  });

  countrySelect.addEventListener("change", () => {
    filterAndDisplayLeagues(leaguedata.response);
  });
  seasonSelect.addEventListener("change", () => {
    filterAndDisplayLeagues(leaguedata.response);
  });

  if (leagueCountries.length > 0 && leagueSeasons > 0) {
    filterAndDisplayLeagues(leaguedata.response);
  }
});

function filterAndDisplayLeagues(leagues) {
  const countrySelect = document.querySelector("#countrySelect");
  const seasonSelect = document.querySelector("#seasonSelect");
  const displayList = document.querySelector("#displayList");

  const selectedCountry = countrySelect.value;
  const slectedSeason = parseInt(seasonSelect.value);

  displayList.innerHTML = "";

  const filteredLeagues = leagues.filter(
    (league) =>
      league.country.name === selectedCountry &&
      Array.isArray(league.seasons) &&
      league.seasons.some((season) => season.year === slectedSeason),
  );

  filteredLeagues.forEach((league) => {
    const leagueContainer = document.createElement("div");
    leagueContainer.style.display = "flex";
    leagueContainer.style.alignItems = "center";
    leagueContainer.style.marginBottom = "10px";

    const leagueCardLink = document.createElement("a");
    leagueCardLink.className = "team-card"
    leagueCardLink.href = `../teams/index.html?league=${encodeURIComponent(league.league.id)}&season=${encodeURIComponent(slectedSeason)}`;

    const logoLeague = document.createElement("img");
    logoLeague.src = league.league.logo;
    logoLeague.alt = `${league.league.name} logo`;
    logoLeague.style.width = "50px";
    logoLeague.style.height = "50px";
    logoLeague.style.marginRight = "10px";

    const leagueName = document.createElement("span");
    leagueName.textContent = league.league.name;

    leagueCardLink.appendChild(logoLeague);
    leagueCardLink.appendChild(leagueName);

    displayList.appendChild(leagueCardLink);
  });
}
