var votes = [
  {
    "name" : "Ashley",
    "Bea" : 3,
    "Louise" : 2,
    "Eleven" : 1,
    "Chick Pea" : 4
  },
  { 
    "name" : "Bert",
    "Bea" : 2,
    "Louise" : 1,
    "Eleven" : 4,
    "Chick Pea" : 3
  },
  {
    "name" : "Joseph",
    "Bea" : 2,
    "Louise" : 1,
    "Eleven" : 3,
    "Chick Pea" : 4
  },
  {
    "name" : "Brian",
    "Bea" : 0,
    "Louise" : 2,
    "Eleven" : 1,
    "Chick Pea" : 0
  },
  {
    "name" : "Alyssa",
    "Bea" : 0,
    "Louise" : 2,
    "Eleven" : 0,
    "Chick Pea" : 1
  },
  {
    "name" : "Arta",
    "Bea" : 4,
    "Louise" : 1,
    "Eleven" : 3,
    "Chick Pea" : 2
  },
  {
    "name" : "Nicki",
    "Bea" : 0,
    "Louise" : 0,
    "Eleven" : 1,
    "Chick Pea" : 0
  },
  {
    "name" : "Sandra",
    "Bea" : 0,
    "Louise" : 0,
    "Eleven" : 1,
    "Chick Pea" : 0
  },
  {
    "name" : "Tomi",
    "Bea" : 1,
    "Louise" : 2,
    "Eleven" : 4,
    "Chick Pea" : 3
  },
  {
    "name" : "Mike F",
    "Bea" : 1,
    "Louise" : 2,
    "Eleven" : 4,
    "Chick Pea" : 3
  },
  {
    "name" : "Ilse",
    "Bea" : 1,
    "Louise" : 2,
    "Eleven" : 4,
    "Chick Pea" : 3
  },
  {
    "name" : "Rachel",
    "Bea" : 4,
    "Louise" : 2,
    "Eleven" : 3,
    "Chick Pea" : 1
  },
  {
    "name" : "Clint",
    "Bea" : 3,
    "Louise" : 2,
    "Eleven" : 4,
    "Chick Pea" : 1
  },
  {
    "name" : "Mike S",
    "Bea" : 2,
    "Louise" : 1,
    "Eleven" : 3,
    "Chick Pea" : 4
  },
  {
    "name" : "Mallory",
    "Bea" : 4,
    "Louise" : 3,
    "Eleven" : 2,
    "Chick Pea" : 1
  },
  {
    "name" : "Mike P",
    "Bea" : 2,
    "Louise" : 3,
    "Eleven" : 1,
    "Chick Pea" : 4
  }
];

// let personName = obj.name;
// let personAge = obj.age;

let voted = votes.length;
names = [ "Bea", "Louise", "Eleven", "Chick Pea" ];
let named = "";
let bea = 0;
let bea_count = 0;
let louise = 0;
let louise_count = 0;
let eleven = 0;
let eleven_count = 0;
let chickpea = 0;
let chickpea_count = 0;

let bea_weighted = 0;
let bea_weighted_count = 0;
let louise_weighted = 0;
let louise_weighted_count = 0;
let eleven_weighted = 0;
let eleven_weighted_count = 0;
let chickpea_weighted = 0;
let chickpea_weighted_count = 0;

for (var i=0; i < votes.length; i++) {

    named = votes[i].name;
    bea = votes[i]["Bea"];
    louise = votes[i]["Louise"];
    eleven = votes[i]["Eleven"];
    chickpea = votes[i]["Chick Pea"];

    let vote = [bea,louise,eleven,chickpea];

    bea_count+=bea;
    louise_count+=louise;
    eleven_count+=eleven;
    chickpea_count+=chickpea;

    if ( vote.includes(0) ) {
      let amount = 0;
      let offet = 0;
      for (let x=0; x < vote.length; x++) {
        if ( vote[x] == 0 ) {
          amount++;
        }
      }
      //console.log(amount);
      
      if ( amount == 2 ) {
        offset = 3.5;
        for (let z=0; z < vote.length; z++) {
          if ( vote[z] == 0 ) {
            vote[z] = offset;
          }
        }
      } else if ( amount == 3 ) {
        offset = 3;
        for (let z=0; z < vote.length; z++) {
          if ( vote[z] == 0 ) {
            vote[z] = offset;
          }
        }
      } 
    }

    bea_weighted = vote[0];
    louise_weighted = vote[1];
    eleven_weighted = vote[2];
    chickpea_weighted = vote[3];

    bea_weighted_count+=bea_weighted;
    louise_weighted_count+=louise_weighted;
    eleven_weighted_count+=eleven_weighted;
    chickpea_weighted_count+=chickpea_weighted;
}

window.onload = function() {
  document.getElementById("bea").getElementsByClassName("result")[0].innerHTML = bea_count;
  document.getElementById("louise").getElementsByClassName("result")[0].innerHTML = louise_count;
  document.getElementById("eleven").getElementsByClassName("result")[0].innerHTML = eleven_count;
  document.getElementById("chickpea").getElementsByClassName("result")[0].innerHTML = chickpea_count;
  document.getElementById("voted").getElementsByClassName("result")[0].innerHTML = voted;

  document.getElementById("bea_weighted").getElementsByClassName("result")[0].innerHTML = bea_weighted_count;
  document.getElementById("louise_weighted").getElementsByClassName("result")[0].innerHTML = louise_weighted_count;
  document.getElementById("eleven_weighted").getElementsByClassName("result")[0].innerHTML = eleven_weighted_count;
  document.getElementById("chickpea_weighted").getElementsByClassName("result")[0].innerHTML = chickpea_weighted_count;
};