import ExternalServices from "./ExternalServices.mjs";
import {
  loadHeaderFooter,
  getLocalStorage,
  setLocalStorage,
} from "./utils.mjs";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeaderFooter();

  const localLeaguesData = getLocalStorage("leaguesData");
  let leaguedata;

  if (
    localLeaguesData &&
    localLeaguesData.response &&
    localLeaguesData.response.length > 0
  ) {
    leaguedata = localLeaguesData;
  } else {
    const externalServices = new ExternalServices();
    leaguedata = await externalServices.getLeaguesData();
    setLocalStorage("leaguesData", leaguedata);
    console.log("Get remotely");
  }

  //get selected elements
  const countrySelect = document.querySelector("#countrySelect");
  const seasonSelect = document.querySelector("#seasonSelect");

  //extract country and season year
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
  ].sort((a, b) => b - a); // Sort in descending order

  //populate selected elements
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

  if (leagueCountries.length > 0 && leagueSeasons.length > 0) {
    filterAndDisplayLeagues(leaguedata.response);
  }

  [countrySelect, seasonSelect].forEach((select) => {
    select.addEventListener("focus", () => {
      select.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)";
      select.style.transform = "scale(1.09)";
    });
    select.addEventListener("blur", () => {
      select.style.boxShadow = "none";
      select.style.transform = "scale(1)";
    });
  });

  // Add event listener for button click effect
  const displayList = document.querySelector("#displayList");
  displayList.addEventListener("click", (event) => {
    if (event.target.closest(".league-card")) {
      event.target.closest(".league-card").style.backgroundColor =
        "rgba(0, 123, 255, 0.1)";
      setTimeout(() => {
        event.target.closest(".league-card").style.backgroundColor = "";
      }, 300);
    }
  });
});

function filterAndDisplayLeagues(leagues) {
  const countrySelect = document.querySelector("#countrySelect");
  const seasonSelect = document.querySelector("#seasonSelect");
  const displayList = document.querySelector("#displayList");

  const selectedCountry = countrySelect.value;
  const selectedSeason = parseInt(seasonSelect.value);

  displayList.innerHTML = "";

  const filteredLeagues = leagues.filter(
    (league) =>
      league.country.name === selectedCountry &&
      Array.isArray(league.seasons) &&
      league.seasons.some((season) => season.year === selectedSeason),
  );

  filteredLeagues.forEach((league) => {
    const leagueContainer = document.createElement("div");
    leagueContainer.style.display = "flex";
    leagueContainer.style.alignItems = "center";
    leagueContainer.style.marginBottom = "10px";

    const leagueCardLink = document.createElement("a");
    leagueCardLink.className = "league-card";
    leagueCardLink.href = `../teams/index.html?league=${encodeURIComponent(
      league.league.id,
    )}&season=${encodeURIComponent(selectedSeason)}`;

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

// import ExternalServices from "./ExternalServices.mjs";
// import {
//   loadHeaderFooter,
//   getLocalStorage,
//   setLocalStorage,
// } from "./utils.mjs";

// document.addEventListener("DOMContentLoaded", async () => {
//   await loadHeaderFooter();

//   const localLeaguesData = getLocalStorage("leaguesData");
//   let leaguedata;

//   if (
//     localLeaguesData &&
//     localLeaguesData.response &&
//     localLeaguesData.response.length > 0
//   ) {
//     leaguedata = localLeaguesData;
//   } else {
//     const externalServices = new ExternalServices();
//     leaguedata = await externalServices.getLeaguesData();
//     setLocalStorage("leaguesData", leaguedata);
//     console.log("Get remotely");
//   }

//   //get selected elements
//   const countrySelect = document.querySelector("#countrySelect");
//   const seasonSelect = document.querySelector("#seasonSelect");

//   //extract country and season year
//   const leagueCountries = [
//     ...new Set(
//       leaguedata.response
//         .map((league) => league.country.name)
//         .filter((name) => name),
//     ),
//   ].sort((a, b) => a.localeCompare(b));

//   const leagueSeasons = [
//     ...new Set(
//       leaguedata.response.flatMap((league) =>
//         league.seasons.map((season) => season.year),
//       ),
//     ),
//   ];

//   //populate selected elements
//   leagueCountries.forEach((country) => {
//     const option = document.createElement("option");
//     option.value = country;
//     option.textContent = country;
//     countrySelect.appendChild(option);
//   });

//   leagueSeasons.forEach((year) => {
//     const option = document.createElement("option");
//     option.value = year;
//     option.textContent = year;
//     seasonSelect.appendChild(option);
//   });

//   countrySelect.addEventListener("change", () => {
//     filterAndDisplayLeagues(leaguedata.response);
//   });

//   seasonSelect.addEventListener("change", () => {
//     filterAndDisplayLeagues(leaguedata.response);
//   });

//   if (leagueCountries.length > 0 && leagueSeasons.length > 0) {
//     filterAndDisplayLeagues(leaguedata.response);
//   }

//   [countrySelect, seasonSelect].forEach(select => {
//     select.addEventListener("focus", () => {
//       select.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)";
//       select.style.transform = "scale(1.09)";
//     });
//     select.addEventListener("blur", () => {
//       select.style.boxShadow = "none";
//       select.style.transform = "scale(1)";
//     });

// });

//  // Add event listener for button click effect
//  const displayList = document.querySelector("#displayList");
//  displayList.addEventListener("click", (event) => {
//    if (event.target.closest(".league-card")) {
//      event.target.closest(".league-card").style.backgroundColor = "rgba(0, 123, 255, 0.1)";
//      setTimeout(() => {
//        event.target.closest(".league-card").style.backgroundColor = "";
//      }, 300);
//    }
//  });
// });

// function filterAndDisplayLeagues(leagues) {
//   const countrySelect = document.querySelector("#countrySelect");
//   const seasonSelect = document.querySelector("#seasonSelect");
//   const displayList = document.querySelector("#displayList");

//   const selectedCountry = countrySelect.value;
//   const selectedSeason = parseInt(seasonSelect.value);

//   displayList.innerHTML = "";

//   const filteredLeagues = leagues.filter(
//     (league) =>
//       league.country.name === selectedCountry &&
//       Array.isArray(league.seasons) &&
//       league.seasons.some((season) => season.year === selectedSeason),
//   );

//   filteredLeagues.forEach((league) => {
//     const leagueContainer = document.createElement("div");
//     leagueContainer.style.display = "flex";
//     leagueContainer.style.alignItems = "center";
//     leagueContainer.style.marginBottom = "10px";

//     const leagueCardLink = document.createElement("a");
//     leagueCardLink.className = "league-card";
//     leagueCardLink.href = `../teams/index.html?league=${encodeURIComponent(league.league.id)}&season=${encodeURIComponent(selectedSeason)}`;

//     const logoLeague = document.createElement("img");
//     logoLeague.src = league.league.logo;
//     logoLeague.alt = `${league.league.name} logo`;
//     logoLeague.style.width = "50px";
//     logoLeague.style.height = "50px";
//     logoLeague.style.marginRight = "10px";

//     const leagueName = document.createElement("span");
//     leagueName.textContent = league.league.name;

//     leagueCardLink.appendChild(logoLeague);
//     leagueCardLink.appendChild(leagueName);

//     displayList.appendChild(leagueCardLink);
//   });
// }
