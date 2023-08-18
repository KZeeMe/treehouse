const https = require("https");

// Print the data
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
}

function getProfile(username) {
  // connect to API URL (https://teamtreehouse.com/kzaloudek.json)
  const request = https.get(
    `https://teamtreehouse.com/profiles/${username}.json`,
    (response) => {
      let body = "";
      console.dir(response.statusCode);

      // Read the data
      response.on("data", (data) => {
        body += data.toString();
      });
      response.on("end", () => {
        // Parse the data
        let profile = JSON.parse(body);

        // console.dir(JSON.parse(body));

        printMessage(
          username,
          profile.badges.length,
          profile.points.JavaScript
        );
      });
    }
  );
  request.on('error',error => console.error(error));
}

getProfile("kristazaloudek");
