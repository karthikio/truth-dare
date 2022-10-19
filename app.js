let truthBtn = document.querySelector('.truth-btn');
let dareBtn = document.querySelector('.dare-btn');
let displayContainer = document.querySelector('.display-container');


// questions array
let truth = [
  "What is a weird food that you love?",
  "What terrible movie or show is your guilty pleasure?",
  "What was your biggest childhood fear?",
  "What is the first letter of your crush's name?",
  "What is the worst grade you received for a class in school/college?",
  "What is the biggest lie you've ever told?",
  "Have you ever accidentally hit something (or someone!) with your car?",
  "Have you ever broken an expensive item?",
  "What is one thing you'd change about your appearance if you could?",
  "If you suddenly had a million dollars, how would you spend it?",
  "Who is the best teacher you've ever had and why?",
  "What is the worst food you've ever tasted?",
  "What is the weirdest way you've met someone you now consider a close friend?",
  "What is the most embarrassing thing you've posted on social media?",
  "Who was your first celebrity crush?",
  "Have you ever revealed a friend's secret to someone else",
  "How many kids do you want to have one day (or how many did you want to have growing up)?",
  "If you could only eat one meal for the rest of your life, what would it be?",
  "What is a secret you had as a child that you never told your parents?",
  "What is your favorite book of all time?",
  "What is the last text message you sent your best friend?",
  "What is something you would do if you knew there were no consequences?",
  "What is the worst physical pain you've ever been in?",
  "Personality-wise, are you more like your mom or your dad?",
  "When is the last time you apologized (and what did you do)?",
  "Have you ever reported someone for doing something wrong (either to the police or at work/school)?",
  "If your house caught on fire and you could only save three things (besides people), what would they be?",
  "If you could pick one other player to take with you to a deserted island, who would it be?",
  "What sport or hobby do you wish you would've picked up as a child?",
  "Have you ever stolen anything?",
];

let dare = [
  "Read the last text message you sent out loud.",
  "Show the weirdest item you have in your purse/pockets.",
  "Call the first person in your contacts list and sing them “Happy Birthday.",
  "Do your best impression of a fish out of water.",
  "Give another player your phone and let them send a social media DM to anyone they want.",
  "Do as many push-ups as you can in one minute.",
  "Give a one-word “roast” to each other player.",
  "Speak in an Australian accent until your next turn.",
  "Let another player tickle you but don't laugh!",
  "Spin in a swivel chair for 30 seconds and then try to walk a straight line.",
  "Go outside and sing “You are My Sunshine” at full volume.",
  "Let another player draw a tattoo on your arm in permanent marker.",
  "Hold the plank position until it's your turn again.",
  "Tell each player who you think their celebrity look alike is.",
  "Show off your best dance moves for the full duration of a song.",
  "Narrate the game in a newscaster voice for three turns.",
  "Walk next door with a measuring cup and ask for a cup of sugar.",
  "Switch clothes with another player for the rest of the game.",
  "Put on a blindfold and touch each players' face until you can guess who each player is.",
  "Let another player pour a glass of water on your head.",
];

truthBtn.addEventListener('click', () => {
  // console.log('truth button pressed');
  // console.log(trueValue);
  let trueValue = truth[Math.floor(Math.random() * truth.length)];
  displayContainer.innerHTML = `<p class='text'>${trueValue}</p>`;
})

dareBtn.addEventListener('click', () => {
  // console.log('dare button pressed');
  // console.log(dareValue);
  let dareValue = dare[Math.floor(Math.random() * dare.length)];
  displayContainer.innerHTML = `<p class='text'>${dareValue}</p>`;
})

