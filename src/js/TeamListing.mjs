
import { renderListWithTemplate} from "./utils.mjs";

function TeamTemplate(team, idLeague, idSeason) {
  return `
    <li class="team-card">
      <a >
        <img src="${team.team.logo}" alt="Image of ${team.team.name}">
        <h2 class="card__name">${team.team.name}</h2>
      </a>
      <a class = "team_stats" href="../statistics/index.html?id=${team.team.id}&season=${idSeason}&league=${idLeague}">Statistics</a>
      <a class = "team_players"> Players </a>
      <a class ="team_fixtures" > Fixtures</a>
    </li>`;
}
 

export default class TeamListing {
  constructor(idSeason,idLeague, dataSource, listElement,) {
      // We passed in this information to make our class as reusable as possible.
      // Being able to define these things when we use the class will make it very flexible
    this.idSeason = idSeason;  
    this.idLeague = idLeague;
    this.dataSource = dataSource;
    this.listElement = listElement;
    }

    async init() {
      // our dataSource will return a Promise...so we can use await to resolve it.
      //const teamData = await this.dataSource.getLeagueByIdAndSeason(this.idLeague);
      
      ////const teamData = await this.dataSource.getLeagueByIdAndSeason();
      const teamData = await this.dataSource.getLeagueByIdAndSeason(this.idLeague, this.idSeason);
      const team = teamData.response;

      // render the list
      //this.renderList(list);
      this.renderProductList(team)
      //set the title to the current category
     // document.querySelector(".title").innerHTML = this.category;
    }

    renderProductList(teams) {
      if (Array.isArray(teams)) {
        renderListWithTemplate((team) => TeamTemplate(team, this.idLeague, this.idSeason), this.listElement, teams);
      } else {
        console.error("Teams data is not an array", teams);
      }
    }
}
  
  