var actbutton = $(".act");
var probutton = $(".pro");
var relbutton = $(".rel");
var message = $(".empty");



var actmesoptions = ["Go for a run around your neighborhood.", "Find a new favorite hiking spot.", "Shoot hoops with your friends!", "Walk your dog!", "Is it summertime? Go paddle boarding!", "Learn a new sport."]


function pickActMessage() {
var randomDecimal = Math.random();
var random = randomDecimal * actmesoptions.length;
var final = Math.floor(random);
return actmesoptions[final];
}

actbutton.on("click", change);

function change() {
  var activity = pickActMessage();
  message.text(activity);
}

var promesoptions = ["Do your homework.","Cook dinner!", "Finish that project that you've been procrastinating doing.", "Clean your room!", "Do your laundry.", "Organize that mess you keep saying you'll get to.", "Be proactive about an upcoming task!"]


function pickProMessage() {
var randomDecimal = Math.random();
var random = randomDecimal * promesoptions.length;
var final = Math.floor(random);
return promesoptions[final];
}

probutton.on("click", changee);

function changee() {
  var product = pickProMessage();
  message.text(product);
}

var relmesoptions = ["Plan a trip, but focus on the fun parts not the stressful parts!", "Watch your favorite TV show, again.", "Watch the sunset.", "Spend a day by the pool reading & relaxing.", "Do you have a hammock? Use it once in a while!", "Learn a new yoga pose!", "Try meditating", "Go stargazing.", "Plan a day with your friends!"]


function pickRelMessage() {
var randomDecimal = Math.random();
var random = randomDecimal * actmesoptions.length;
var final = Math.floor(random);
return relmesoptions[final];
}

relbutton.on("click", chhhange);

function chhhange() {
  var relaxation = pickRelMessage();
  message.text(relaxation);
}
