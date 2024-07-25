
import { renderListWithTemplate} from "./utils.mjs";

function statisticsTemplate(team) {
  return `
    <p class = "team_name">${team.team.name}</p>
    <div class = "statistics_header"><Span></Span><Span>HOME</span> <Span>AWAY</span> <Span>TOTAL</span></div>
    <li class="statistics-card">
      
      <div><p>Games Played:</p>
      <p>Wins: </p>
      <p>Draws:</p>
      <p>Loss:</p>
      <p>Goals For:</p>
      <p>Goals Against:</p>
      </div>
      <div>

      <p>${team.fixtures.played.home}</p>
      <p>${team.fixtures.wins.home}</p>
      <p>${team.fixtures.draws.home}</p>
      <p>${team.fixtures.loses.home}</p>
      <p>${team.goals.for.total.home}</p>
      <p>${team.goals.against.total.home}</p>
      </div>
            <div>

      <p>${team.fixtures.played.away}</p>
      <p>${team.fixtures.wins.away}</p>
      <p>${team.fixtures.draws.away}</p>
      <p>${team.fixtures.loses.away}</p>
      <p>${team.goals.for.total.away}</p>
      <p>${team.goals.against.total.away}</p>
      </div>
            <div>

      <p>${team.fixtures.played.total}</p>
      <p>${team.fixtures.wins.total}</p>
      <p>${team.fixtures.draws.total}</p>
      <p>${team.fixtures.loses.total}</p>
      <p>${team.goals.for.total.total}</p>
      <p>${team.goals.against.total.total}</p>
      </div>
      
    </li>`;
    
}
 

export default class teamstats {
  constructor(idTeam, idSeason, idLeague, dataSource, listElement,) {
      // We passed in this information to make our class as reusable as possible.
      // Being able to define these things when we use the class will make it very 
    this.idTeam = idTeam;  
    this.idSeason = idSeason;  
    this.idLeague = idLeague;
    this.dataSource = dataSource;
    this.listElement = listElement;
    }

    async init() {
   
      const teamData = await this.dataSource.getTeamStatistics(this.idTeam, this.idSeason, this.idLeague);
      const team = teamData.response;

     
      if (typeof team === "object" && !Array.isArray(team)) {
        this.renderProductList([team]);
      } else {
        console.error("Teams data is not an object", team);
      }

    
    }

    renderProductList(team) {
      if (Array.isArray(team)) {
        renderListWithTemplate(statisticsTemplate,this.listElement, team);
      } else {
        
        console.error("Teams data is not an array", team);
      }
    }
}
  
  