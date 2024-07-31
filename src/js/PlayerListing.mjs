
import { renderListWithTemplate } from "./utils.mjs";

function playerTemplate(player) {
  const playerDetails = player.player;
  const statistics = player.statistics[0]; // Assuming the first statistics object is relevant

  return `
  
    
                <section class="card-section">


                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--city">
                                 <img src="${playerDetails.photo}" alt="Photo of ${playerDetails.firstname} ${playerDetails.lastname}" class="player-photo">
                                 
                            <p class="card-front__text-price">
                                --------------------------
                            </p>
                                </div>

                                <div class="card-front__bt">
                                    <h2 class="card-front__text-view card-front__text-view--city"></h2>
                                    
                                    

        

                                </div>
                            </div>
                            <div class="card-back">
                                    <p class="card-front__text-view card-front__text-view--city">Country:${playerDetails.birth.country}</p>
                                    <p class="card-front__text-view card-front__text-view--city">Age: ${playerDetails.age}</p>
                                    <p class="card-front__text-view card-front__text-view--city">Date of Birth: ${playerDetails.birth.date}</p>
                                    <p class="card-front__text-view card-front__text-view--city">Height: ${playerDetails.height}</p>
                                    <p class="card-front__text-view card-front__text-view--city">Weight: ${playerDetails.weight}</p>
                                    <p class="card-front__text-view card-front__text-view--city">Position: ${statistics.games.position}</p>
                                    
                                
                            </div>
                          
                        </div>
                    </div>


                     <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--city">
                                Player Statistics
                            </h3>
                            
                            <a href="#" class="inside-page__btn inside-page__btn--city">View deals</a>
                            <h2 class="card-front__text-view card-front__text-view--city">${playerDetails.firstname} ${playerDetails.lastname}</h2>
                             <p class="card-front__text-view card-front__text-view--city">${statistics.games.position}</p>
                        </div>

                    </div>
                    <h2 class="card-front__text-view card-front__text-view--city"></h2>
                </div>
            </section>

    `
}

export default class PlayerListing {
  constructor(idTeam, idSeason, dataSource, listElement) {
    this.idTeam = idTeam;
    this.idSeason = idSeason;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    try {
      const playerData = await this.dataSource.getPlayers(this.idTeam, this.idSeason);
      const players = playerData.response;

      if (Array.isArray(players)) {
        this.renderProductList(players);
      } else {
        console.error("Fixtures data is not an array", players);
      }
    } catch (error) {
      console.error("Error fetching fixtures data", error);
    }
  }

  renderProductList(players) {
    renderListWithTemplate(playerTemplate, this.listElement, players);
  }
}
