

//local json file for testing before consuming remotely
 // Closing curly brace added here
//import { dbdata } from "./db"; 
 import { leagusdb } from "./leaguedb";
 import { teamdb } from "./teamdb";
 import { stats } from "./statisticsdb";
 import { fixture } from "./fixturedb";
 import { player } from "./playerdb";


export default class ExternalServices {

  async getLeaguesData() {

    const leagueData = leagusdb;
   return leagueData
 }
  
    

  
  async getLeagueByIdAndSeason (league, season) {

 const teamdbData = teamdb; 
 return teamdbData;



    
  //  const dataLeagueAndSeason = await convertToJson(response);
  //   return dataLS.Result;
  
    // const options = {
    //                  method: "GET",
    //                  headers: {
    //                        "x-rapidapi-key": "f03592658791198d69b990b1526e4f78",
    //                          "x-rapidapi-host": "v3.football.api-sports.io"
    //                      }
    //                };

    //         const response = await fetch(`${baseURL}teams?league=${league}&season=${season}`, options);
    //         const dataLS = await convertToJson(response);
    //         return dataLS;

//////https://v3.football.api-sports.io/teams?league=39&season=2024
  
  } 

  


async getTeamStatistics () {

 const teamStatisticsData = stats; 
return teamStatisticsData;
  
} 
  
    
  
 async fetchFixtures  (team, season, league) { 

const teamFixture = fixture;
return teamFixture;

}



async getPlayers (team, season) {

  const playerdbData = player; 
   return playerdbData;
 } 

 }
/***************************************Toggle Comments to Use Remote API*********************************************** */

// const baseURL = import.meta.env.VITE_SERVER_URL;

// ////local json file for testing before consuming remotely
//  //// Closing curly brace added here
// ////import { dbdata } from "./db"; 
// ////import { leagusdb } from "./leaguedb";
// ///import { teamdb } from "./teamdb";
// ////import { stats } from "./statisticsdb";
// ////import { fixture } from "./fixturedb";
// /////import { player } from "./playerdb";


//  async function convertToJson(res) {
//    const jsonResponse = await res.json();
//   if (res.ok) {
//       return jsonResponse;
//     } else {
//       throw { name: "servicesError", message: jsonResponse };
//     }
//    }

// export default class ExternalServices {

//  async getLeaguesData() {

   
// /////const leagueData = leagusdb;
//   /////return leagueData

//     const options = {
//                    method: "GET",
//                    headers: {
//                           "x-rapidapi-key": "f03592658791198d69b990b1526e4f78",
//                          "x-rapidapi-host": "v3.football.api-sports.io"
//                        }
//                  };
       
//            const response = await fetch(baseURL + `leagues`, options);
//            const data = await convertToJson(response);
//            return data; 

//   }
 
   

 
//  async getLeagueByIdAndSeason (league, season) {

// /////const teamdbData = teamdb; 
// /////return teamdbData;



   
//  /////  const dataLeagueAndSeason = await convertToJson(response);
//  /////   return dataLS.Result;
 
//    const options = {
//                     method: "GET",
//                     headers: {
//                           "x-rapidapi-key": "f03592658791198d69b990b1526e4f78",
//                             "x-rapidapi-host": "v3.football.api-sports.io"
//                         }
//                   };

//            const response = await fetch(`${baseURL}teams?league=${league}&season=${season}`, options);
//            const dataLS = await convertToJson(response);
//            return dataLS;

// //////https://v3.football.api-sports.io/teams?league=39&season=2024
 
//  } 

 


// async getTeamStatistics (team, season, league) {

// /////const teamStatisticsData = stats; 
// ////return teamStatisticsData;
 
//        ////const dataStats = await convertToJson(response);
//      /////return dataStats.Result;
   
    
//      const options = {
//                       method: "GET",
//                       headers: {
//                             "x-rapidapi-key": "f03592658791198d69b990b1526e4f78",
//                               "x-rapidapi-host": "v3.football.api-sports.io"
//                           }
//                     };
 
//              const response = await fetch(`${baseURL}teams/statistics?season=${season}&team=${team}&league=${league}`, options);
//              const dataStats = await convertToJson(response);


//             return dataStats;
 
//  // ///////https://v3.football.api-sports.io/teams/statistics?season=2024&team=33&league=39



   
//    } 
 
   
 
// async fetchFixtures  (team, season, league) { 

// //const teamFixture = fixture;
// //return teamFixture;
//      const options = {
//          method: "GET",
//           headers: {
//               "x-rapidapi-key": "f03592658791198d69b990b1526e4f78",
//               "x-rapidapi-host": "v3.football.api-sports.io"
//           }
//       };
// /////////https://v3.football.api-sports.io/fixtures?team=33&season=2024&league=39
//       const response = await fetch(`${baseURL}fixtures?league=${league}&season=${season}&team=${team}`, options);
//              const data = await convertToJson(response);
//              return data;

// }

// /**/

// async getPlayers (team, season) {

//  //const playerdbData = player; 
//   //return playerdbData;
 
 
 
     
//     ///const data = await convertToJson(response);
//     // return data.Result;
   
//      const options = {
//                        method: "GET",
//                        headers: {
//                              "x-rapidapi-key": "f03592658791198d69b990b1526e4f78",
//                                "x-rapidapi-host": "v3.football.api-sports.io"
//                            }
//                      };
//  // //////https://v3.football.api-sports.io/players?season=2024&team=33
//               const response = await fetch(`${baseURL}players?team=${team}&season=${season}`, options);
//               const data = await convertToJson(response);
//               return data; 
   
//    } 

// }