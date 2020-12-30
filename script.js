const database = [

{
  username: "grant",
  password: "hithere"
}

];

const newsfeed = [
{
  username: "Sleepy",
  timeline: "Is it bedtime yet?"
},

{
  username: "Mickey",
  timeline: "Hello!"
}

];

function isUserValid(username, password) {
for (var i=0; i < database.length; i++) {
  if(database[i].username === username &&
    database[i].password === password) {
    return true;
  }
}
return false;
}

function signIn (username, password) {
for (var i=0; i < database.length; i++) {
  if(database[i].username === username &&
    database[i].password === password) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}


const userNamePrompt = prompt("What's your username?");
const passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
