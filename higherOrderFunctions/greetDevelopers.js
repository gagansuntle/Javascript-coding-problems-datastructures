// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?
function greetDevelopers(list) {
 return list.map(function(x) {
     x.greeting = "Hi "+x.firstName+", what do you like the most about "+x.language+"?"
     return x;
 })
}