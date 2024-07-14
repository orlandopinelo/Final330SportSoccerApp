import ExternalServices from "./ExternalServices.mjs"; // Make sure this import is correct

document.addEventListener("DOMContentLoaded", async () => {
  const externalServices = new ExternalServices();
  const data = await externalServices.getFixturesData();

  // Get the dataDisplay element
  const dataDisplay = document.querySelector(".dataDisplay");

  // Extract the home team names and logos
  const homeTeams = data.response.map((fixture) => ({
    name: fixture.league.name,
    logo: fixture.league.logo,
  }));

  // Create and display the home team names and logos
  homeTeams.forEach((team) => {
    // Create a container for each team
    const teamContainer = document.createElement("div");
    teamContainer.style.display = "flex";
    teamContainer.style.alignItems = "center";
    teamContainer.style.marginBottom = "10px";

    // Create an image element for the team logo
    const logoElement = document.createElement("img");
    logoElement.src = team.logo;
    logoElement.alt = `${team.name} logo`;
    logoElement.style.width = "50px";
    logoElement.style.height = "50px";
    logoElement.style.marginRight = "10px";

    // Create a text node for the team name
    const nameElement = document.createElement("span");
    nameElement.textContent = team.name;

    // Append the logo and name to the team container
    teamContainer.appendChild(logoElement);
    teamContainer.appendChild(nameElement);

    // Append the team container to the dataDisplay element
    dataDisplay.appendChild(teamContainer);
  });
});
