function scuberGreetingForFeet(distanceFeet){
  let message;
  if (distanceFeet <= 400) {
    message = 'This one is on me!';
  } else if (distanceFeet > 400 && distanceFeet <= 2000) {
    message = 'That will be twenty bucks.';
  } else if (distanceFeet > 2000 && distanceFeet <=2500) {
    message = 'I will gladly take your thirty bucks.';
  } else {
    message = 'No can do.';
  }
  return message;
}

function ternaryCheckCity(cityName){
  return cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tipAmount){
  let message;
  switch (tipAmount) {
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default :
      message = 'Bye.';
  }
  return message;
}