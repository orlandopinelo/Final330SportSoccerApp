
import { renderListWithTemplate} from "./utils.mjs";

function TeamTemplate(team) {
  return `
    <li class="team-card">
      <a>
        <img src="${team.team.logo}" alt="Image of ${team.team.name}">
        <h2 class="card__name">${team.team.name}</h2>
        
         </a>
    </li>`;
} 

export default class TeamListing {
  constructor(idLeague, dataSource, listElement) {
      // We passed in this information to make our class as reusable as possible.
      // Being able to define these things when we use the class will make it very flexible
    this.idLeague = idLeague;
    this.dataSource = dataSource;
    this.listElement = listElement;
    }

    async init() {
      // our dataSource will return a Promise...so we can use await to resolve it.
      //const teamData = await this.dataSource.getLeagueByIdAndSeason(this.idLeague);
      const teamData = await this.dataSource.getLeagueByIdAndSeason(this.idLeague);
      const team = teamData.response;

      // render the list
      //this.renderList(list);
      this.renderProductList(team)
      //set the title to the current category
     // document.querySelector(".title").innerHTML = this.category;
    }

    renderProductList(team) {
      if (Array.isArray(team)) {
        
        renderListWithTemplate(TeamTemplate, this.listElement, team);
      } else {
        console.error("Teams data is not an array", team);
      }
    }
  }
  
  
  