//free code camp questions
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection?messages=success%5B0%5D%3Dflash.signin-success

// Setup
/*
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value == ""){
      delete records[id][prop];
    }
    else if (prop != "tracks"){
        records[id][prop] = value;
        //
    }else if(prop == "tracks" && records[id][prop] == undefined){
      let newArr = [value]
      records[id][prop] = newArr;
  
    }else if(prop == "tracks"){
      records[id][prop].push(value);
  
    }
  
  
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
*///----------------------------------------------------------------
  /* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup
  // Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for(let i = 0; i < contacts.length;i++){
    let obj = contacts[i];
    if(obj.firstName == name){
      if(obj[prop]== undefined){
        return "No such property";
      }else{
        return obj[prop];
      }
    }
  }return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
*/



