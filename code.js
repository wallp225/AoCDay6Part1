// To Do:
// get contents of input and add to array of strings. loop array and run find task.  Once loop completed call get NumberOfLightsOn.

// lets
let myCoord1;
let myCoord2;

// build grid of lights
const gridSize = 1000;
const lights = [];

for (let i = 0; i < gridSize; i++) {
  const arr = [];
  for (let j = 0; j < gridSize; j++) {
    arr.push(false);
  }
  lights.push(arr);
}

// Read line of string and get coordinates;
function getCoords(string) {
  let regex = /(\d{1,3},\d{1,3})/g; // looks for pattern: ###,###
  let coords = string.match(regex); // places extracted pattern in container
  let coord1 = Array.from(coords[0]); // takes first element and creates a new array
  let coord1a = parseInt(
    coord1
      .slice(0, coord1.indexOf(","))
      .toString()
      .replace(/,/g, "")
  ); // removes characters from elements up to element containing , converts to a string and removes any , present
  let coord1b = parseInt(
    coord1
      .slice(coord1.indexOf(",") + 1)
      .toString()
      .replace(/,/g, "")
  );
  coord1 = [coord1a, coord1b];
  let coord2 = Array.from(coords[1]);
  let coord2a = parseInt(
    coord2
      .slice(0, coord2.indexOf(","))
      .toString()
      .replace(/,/g, "")
  );
  let coord2b = parseInt(
    coord2
      .slice(coord2.indexOf(",") + 1)
      .toString()
      .replace(/,/g, "")
  );
  coord2 = [coord2a, coord2b];
  myCoord1 = coord1;
  myCoord2 = coord2;
  function formatValue(coord, ){
    let value = parseInt(
    coord
      .slice(0, coord.indexOf(","))
      .toString()
      .replace(/,/g, "")
  );
    return value;
  }
}

// determine which function needs to be called first
function findTask(string) {
  getCoords(string);
  if (string.startsWith("turn on")) {
    turnOnLights(myCoord1, myCoord2);
  }
  if (string.startsWith("turn off")) {
    turnOffLights(myCoord1, myCoord2);
  }
  if (string.startsWith("toggle")) {
    toggleLights(myCoord1, myCoord2);
  }
}

// function to turn on lights (if 0, toggle to 1);
function turnOnLights(coord1, coord2) {
  for (let i = coord1[1]; i <= coord2[1]; i++) {
    for (let j = coord1[0]; j <= coord2[0]; j++) {
      if (lights[i][j] != true) {
        lights[i][j] = true;
      }
    }
  }
  console.log(lights);
}

// function to turn off lights (if 1, toggle to 0);
function turnOffLights(coord1, coord2) {
  for (let i = coord1[1]; i <= coord2[1]; i++) {
    for (let j = coord1[0]; j <= coord2[0]; j++) {
      if (lights[i][j] != false) {
        lights[i][j] = false;
      }
    }
  }
  console.log(lights);
}

// function to toggle lights (all 1s become 0s and all 0s become 1s);
function toggleLights(coord1, coord2) {
  for (let i = coord1[1]; i <= coord2[1]; i++) {
    for (let j = coord1[0]; j <= coord2[0]; j++) {
      lights[i][j] = !lights[i][j];
    }
  }
  console.log(lights);
}

function getNumberOfLightsOn() {
  // loop through the lights array and find all true values
  let count = 0;
  for (let i = 0; i < lights.length; i++) {
    for (let j = 0; j < lights[i].length; j++) {
      if (lights[i][j] == 1) {
        count++;
      }
    }
  }
  console.log(count);
}

// tests
let string1 = "turn on 0,0 through 999,999 should turn on all the lights";
let string2 =
  "toggle 0,0 through 999,0 should only affect the first line of lights, swapping 1s to 0s and 0s to 1s";
let string3 =
  "turn off 499,499 through 500,500 should turn off the 4 middle lights";
let strings = [string1, string2, string3];

findTask(string1);
findTask(string2);
findTask(string3);
getNumberOfLightsOn();
