const baseURL = import.meta.env.VITE_SERVER_URL;

 // Closing curly brace added here
//import { dbdata } from "./db"; 
//import { leagusdb } from "./leaguedb";
//import { teamdb } from "./teamdb";


  async function convertToJson(res) {
    const jsonResponse = await res.json();
  if (res.ok) {
       return jsonResponse;
     } else {
       throw { name: "servicesError", message: jsonResponse };
     }
   }

export default class ExternalServices {

  async getLeaguesData(){

    
    //const leagueData = leagusdb;
    //return leagueData

     const options = {
                    method: "GET",
                     headers: {
                           "x-rapidapi-key": "f03592658791198d69b990b1526e4f78",
                          "x-rapidapi-host": "v3.football.api-sports.io"
                        }
                  };
        
           const response = await fetch(baseURL + `leagues`, options);
           const data = await convertToJson(response);
           return data; 

   }
  
    
 // async getFixturesData() { 

  //  const options = {
    //             method: "GET",
      //           headers: {
        //             "x-rapidapi-key": "f03592658791198d69b990b1526e4f78",
          //           "x-rapidapi-host": "v3.football.api-sports.io"
            //     }
            //};
    
    //const response = await fetch(baseURL + `fixtures?live=all`, options);
    //const data = dbdata;
  
   // const data = await convertToJson(response);
//return data; 
  //}
  
  // async getLeaguesData() { 

  //   const options = {
  //                method: "GET",
  //                headers: {
  //                    "x-rapidapi-key": "f03592658791198d69b990b1526e4f78",
  //                    "x-rapidapi-host": "v3.football.api-sports.io"
  //                }
  //           };
    
  //   const response = await fetch(baseURL + `leagues`, options);
  //   const data = await convertToJson(response);
  //   return data; 
  // }


  
  //this is the link the apo requires https://v3.football.api-sports.io/teams?league=39&season=2024
  
  async getLeagueByIdAndSeason (league, season) {

///const teamdbData = teamdb; 
   /// return teamdbData;



    
    //const data = await convertToJson(response);
    //return data.Result;
  
  const options = {
                   method: "GET",
                   headers: {
                         "x-rapidapi-key": "f03592658791198d69b990b1526e4f78",
                           "x-rapidapi-host": "v3.football.api-sports.io"
                       }
                 };
//https://v3.football.api-sports.io/teams?league=39&season=2024
          const response = await fetch(`${baseURL}teams?league=${league}&season=${season}`, options);
          const data = await convertToJson(response);
          return data; 
  
  } 

  

} 




// export const fetchFixtures = async () => { 
//     const options = {
//         method: "GET",
//         headers: {
//             "x-rapidapi-key": "f03592658791198d69b990b1526e4f78",
//             "x-rapidapi-host": "v3.football.api-sports.io"
//         }
//     };

//     const result = await fetch("https://v3.football.api-sports.io/fixtures?live=all", options)
//         .then((response) => response.json())
//         .then((response) => response)
//         .catch((err) => console.error(err));

//     return result;
// }

/**/
