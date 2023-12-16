var votes = [
  {
    "name" : "Ashley",
    "v1" : "Eleven",
    "v2" : "Louise",
    "v3" : "Bea",
    "v4" : "Chick Pea"
  },
  {
    "name" : "Bert",
    "v1" : "Louise",
    "v2" : "Bea",
    "v3" : "Chick Pea",
    "v4" : "Eleven"
  },
  {
    "name" : "Joseph",
    "v1" : "Louise",
    "v2" : "Bea",
    "v3" : "Eleven",
    "v4" : "Chick Pea"
  },
  {
    "name" : "Brian",
    "v1" : "Eleven",
    "v2" : "Louise",
    "v3" : false,
    "v4" : false
  },
  {
    "name" : "Alyssa",
    "v1" : "Chickpea",
    "v2" : "Louise",
    "v3" : false,
    "v4" : false
  },
  {
    "name" : "Arta",
    "v1" : "Louise",
    "v2" : "Chickpea",
    "v3" : "Eleven",
    "v4" : "Bea"
  },
  {
    "name" : "Nicki",
    "v1" : "Eleven",
    "v2" : false,
    "v3" : false,
    "v4" : false
  },
  {
    "name" : "Sandra",
    "v1" : "Eleven",
    "v2" : false,
    "v3" : false,
    "v4" : false
  },
  {
    "name" : "Tomi",
    "v1" : "Bea",
    "v2" : "Louise",
    "v3" : "Chick Pea",
    "v4" : "Eleven"
  },
  {
    "name" : "Mike F",
    "v1" : "Bea",
    "v2" : "Louise",
    "v3" : "Chick Pea",
    "v4" : "Eleven"
  },
  {
    "name" : "Ilse",
    "v1" : "Bea",
    "v2" : "Louise",
    "v3" : "Chick Pea",
    "v4" : "Eleven"
  },
  {
    "name" : "Rachel",
    "v1" : "Chick Pea",
    "v2" : "Louise",
    "v3" : "Eleven",
    "v4" : "Bea"
  },
  {
    "name" : "Clint",
    "v1" : "Chick Pea",
    "v2" : "Louise",
    "v3" : "Bea",
    "v4" : "Eleven"
  },
  {
    "name" : "Mike S",
    "v1" : "Louise",
    "v2" : "Bea",
    "v3" : "Eleven",
    "v4" : "Chick Pea"
  },
  {
    "name" : "Mallory",
    "v1" : "Chick Pea",
    "v2" : "Eleven",
    "v3" : "Louise",
    "v4" : "Bea"
  },
  {
    "name" : "Mike P",
    "v1" : "Eleven",
    "v2" : "Bea",
    "v3" : "Louise",
    "v4" : "Chick Pea"
    }
];

// let personName = obj.name;
// let personAge = obj.age;

let voted = votes.length;
names = [ "Bea", "Louise", "Eleven", "Chick Pea" ];
let bea = 0;
let louise = 0;
let eleven = 0;
let chickpea = 0;

let bea_weighted = 0;
let louise_weighted = 0;
let eleven_weighted = 0;
let chickpea_weighted = 0;

let novote = 0;
let totalpoints;

let first = 0;
let second = 0;
let third = 0;
let fourth = 0;

var parseVote = function(name, weight) {
  // console.log (name);

  if ( name == "Bea") {
    bea+=weight;
  } else if ( name == "Louise") {
    louise+=weight;
  } else if ( name == "Eleven" ) {
    eleven+=weight;
  } else if ( name == "Chick Pea" ) {
    chickpea+=weight;
  } else {
    novote+=weight;
  }
};

var parseVoteWeighted = function(name, weight) {
  //console.log (name);

  if ( name == "Bea") {
    bea_weighted+=weight;
  } else if ( name == "Louise") {
    louise_weighted+=weight;
  } else if ( name == "Eleven" ) {
    eleven_weighted+=weight;
  } else if ( name == "Chick Pea" ) {
    chickpea_weighted+=weight;
  } else {
    //console.log("oops");
  }
};

var parseWeighted = function(r) {
  //console.log(r.includes(false));
  if ( r.includes(false) ) {
    //console.log (r);
    // how many false
    let count = 0;
    for (var f=0; f < r.length; f++) {
      if ( r[f] == false ) {
        count++;
      }
    }
    let offset;
    let namesCopy;
    let x; 
    let index;

    if ( count == 1 ) {
      // none
    } else if ( count == 2 ) {
      offset = 3;
      //console.log(r[0]);
      //console.log(r[1]);

      // missing name needs to be determined
      namesCopy= [...names];
      index = namesCopy.indexOf(r[0]);
      x = namesCopy.splice(index, 1);
      index = namesCopy.indexOf(r[1]);
      x = namesCopy.splice(index, 1);
      
      parseVoteWeighted(r[0], 1);
      parseVoteWeighted(r[1], 2);

      parseVoteWeighted(namesCopy[0], offset);
      parseVoteWeighted(namesCopy[1], offset);
    } else if ( count == 3 ) {
      offset = 3.5;
      //console.log(r[0]);

      namesCopy= [...names];
      index = namesCopy.indexOf(r[0]);
      x = namesCopy.splice(index, 1);

      parseVoteWeighted(r[0], 1);
      
      parseVoteWeighted(namesCopy[0], offset);
      parseVoteWeighted(namesCopy[1], offset);
      parseVoteWeighted(namesCopy[2], offset);
    } else if ( count == 4 ) {
      // none
    }
  } else {
    //console.log (r);
    parseVoteWeighted(r[0], 1);
    parseVoteWeighted(r[1], 2);
    parseVoteWeighted(r[3], 3);
    parseVoteWeighted(r[4], 4);
  }
};

for (var i=0; i < votes.length; i++) {

    var name = votes[i].name;
    var v1 = votes[i].v1;
    var v2 = votes[i].v2;
    var v3 = votes[i].v3;
    var v4 = votes[i].v4;

    parseVote(v1, 1);
    parseVote(v2, 2);
    parseVote(v3, 3);
    parseVote(v4, 4);
}

  // weighted
  for (var i=0; i < votes.length; i++) {

    var name = votes[i].name;
    var v1 = votes[i].v1;
    var v2 = votes[i].v2;
    var v3 = votes[i].v3;
    var v4 = votes[i].v4;

    vote = parseWeighted([v1,v2,v3,v4]);

    // parseVote(v1, 1);
    // parseVote(v2, 2);
    // parseVote(v3, 3);
    // parseVote(v4, 4);
  }


// console.log("Bea : " + bea);
// console.log("Louise : " + louise);
// console.log("Eleven : " + eleven);
// console.log("Chick Pea : " + chickpea);
console.log("voted: " + voted);
console.log("no vote: " + novote);

totalpoints = bea + louise + eleven + chickpea + novote;

window.onload = function() {
  document.getElementById("bea").getElementsByClassName("result")[0].innerHTML = bea;
  document.getElementById("louise").getElementsByClassName("result")[0].innerHTML = louise;
  document.getElementById("eleven").getElementsByClassName("result")[0].innerHTML = eleven;
  document.getElementById("chickpea").getElementsByClassName("result")[0].innerHTML = chickpea;
  document.getElementById("voted").getElementsByClassName("result")[0].innerHTML = voted;
  document.getElementById("novote").getElementsByClassName("result")[0].innerHTML = novote;
  document.getElementById("total-points").getElementsByClassName("result")[0].innerHTML = totalpoints;

  // document.getElementById("bea_weighted").getElementsByClassName("result")[0].innerHTML = bea_weighted;
  // document.getElementById("louise_weighted").getElementsByClassName("result")[0].innerHTML = louise_weighted;
  // document.getElementById("eleven_weighted").getElementsByClassName("result")[0].innerHTML = eleven_weighted;
  // document.getElementById("chickpea_weighted").getElementsByClassName("result")[0].innerHTML = chickpea_weighted;
};