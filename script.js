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

const userNamePrompt = prompt("What's your username?");
const passwordPrompt = prompt("What's your password?");

function signIn (username, password) {
  if (user === database[0].username &&
    password === database[1].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username or password");
  }
}
