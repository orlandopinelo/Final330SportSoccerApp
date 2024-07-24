import { renderListWithTemplate } from "./utils.mjs";

function fixtureTemplate(fixture) {
  const homeTeam = fixture.teams.home;
  const awayTeam = fixture.teams.away;
  const halftimeScore = fixture.score.halftime;
  const fixtureDate = new Date(fixture.fixture.date).toLocaleString();
  const stadium = fixture.fixture.venue.name;

  return `
    <li class="fixture-card">

    
        <div class="team">
          <img src="${homeTeam.logo}" alt="Logo of ${homeTeam.name}" class="team-logo">
          <p class="team-name">${homeTeam.name}</p>
        </div>

     <div class = "fixture-details">

        <h2 class="fixture-league">${fixture.league.name}</h2>
        <p class="fixture-date">${fixtureDate}</p>
        <p>${stadium}</p>
        <p class="score">${halftimeScore.home !== null ? halftimeScore.home : 0} - ${halftimeScore.away !== null ? halftimeScore.away : 0}</p>
        
    </div>

        <div class="team">
          <img src="${awayTeam.logo}" alt="Logo of ${awayTeam.name}" class="team-logo">
          <p class="team-name">${awayTeam.name}</p>
        </div>
      
    </li>`;  
}

export default class FixtureListing {
  constructor(idTeam, idSeason, idLeague, dataSource, listElement) {
    this.idTeam = idTeam;
    this.idSeason = idSeason;
    this.idLeague = idLeague;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    try {
      const teamData = await this.dataSource.fetchFixtures(this.idTeam, this.idSeason, this.idLeague);
      const fixtures = teamData.response;

      if (Array.isArray(fixtures)) {
        this.renderProductList(fixtures);
      } else {
        console.error("Fixtures data is not an array", fixtures);
      }
    } catch (error) {
      console.error("Error fetching fixtures data", error);
    }
  }

  renderProductList(fixtures) {
    renderListWithTemplate(fixtureTemplate, this.listElement, fixtures);
  }
}
