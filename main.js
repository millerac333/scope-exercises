// C IS FOR COOKIE

//---fixed scope by changing y=1 to x==1 and changed all y's to x's
const cookies = [
  "Oatmeal Raisin",
  "Chocolate Chip",
  "Sugar",
  "Peanut Butter",
  "Snickerdoodle",
  "Ginger"
];
let x = 1;

for (let x = 1; x < cookies.length; x++) {
  const currentCookie = cookies[x];
  console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`);
}

// CONJUNCTION FUNCTION

//---added console.log inside function to call created string from function
const conjunction = function(firstWord, secondWord) {
  const conjoinedWord = `${firstWord} ${secondWord}`;
  console.log(conjoinedWord);
};

conjunction("Master", "Card");
console.log(conjunction);

// MOD SQUAD

//---fixed syntax
const ModSquad = {
  members: [
    "Pete Cochran",
    "Linc Hayes",
    "Julie Barnes",
    "Capt. Adam Greer",
    "Chief Barney Metcalf"
  ],
  series: {
    start: "1968",
    end: "1973"
  }
};

//---switched from const to let inorder to change value
let HTMLRepresentation = `<h1>The Mod Squad</h1>`;

ModSquad.members.forEach(member => {
  HTMLRepresentation += `<div>${member}</div>`;
  return (HTMLRepresentation = document.querySelector(
    "#show-info"
  ).innerHTML = HTMLRepresentation);
});

// SIMON SAYS

const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]];

for (var k = 0; k < locations.length; k++) {
  const currentLocation = locations[k];
  let invalidLocation;

  if (currentLocation[0] > 2) {
    const invalidLocation = true;
  }

  if (invalidLocation) {
    console.log("This location is invalid");
  }
}

console.log(`There were ${k} locations displayed`);

// LAMBDA LLAMA

const llamaNamer = function() {
  const possibleNames = [
    "Larry",
    "Leon",
    "Leona",
    "Les",
    "Laura",
    "Lemony",
    "Lars",
    "Lekisha"
  ];
  const randomizer = Math.floor(Math.random() * 7);

  const buildName = () => {
    const suffix = " the Llama";
    const name = possibleNames[randomizer];
    return name + suffix;
  };
  return buildName();
};

console.log(llamaNamer());
