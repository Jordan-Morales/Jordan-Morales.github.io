$(() => {
  let optionArray = [];
  const pokeRandom = () => {
    let $ranNum = Math.floor(Math.random() * 150) + 1;
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/"+$ranNum
    }).then(
      (data) => {
        optionArray.push(data.name);
      () => {
          console.log('bad request');
      }
  })
  }; // end of pokeRandom


const shuffle = () => {
  let currentIndex = optionArray.length;
  let tempValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempValue = optionArray[currentIndex];
    optionArray[currentIndex] = optionArray[randomIndex];
    optionArray[randomIndex] = tempValue;
  }
  return optionArray;
}

//getting the other two options into the array
pokeRandom();
pokeRandom();

// Function for the answer and two incorrect answers and pushing them to html
const choice = () => {
  // shuffle();
  $('#optionA').text(optionArray[0]);
  $('#optionB').text(optionArray[1]);
  $('#optionC').text(optionArray[2]);
  console.log(optionArray);
}

//primary random number and ajax for displayed pokeShadow
//limiting to first 151 for my own sanity.
// $primaryRanNum should remain the same so this could be used again, or a hidden element could contain the correct answer
let $primaryRanNum = Math.floor(Math.random() * 150) + 1;
$.ajax({
  url: "https://pokeapi.co/api/v2/pokemon/"+$primaryRanNum
}).then(
  (data) => {
    // console.log(data.moves);
  $('#sprite').attr('src', data.sprites.front_default);
  $name = data.name;
  optionArray.push($name);
  () => {
      console.log('bad request');
  }
})

//Had to delay the choice function because I was getting some refreshes showing only 1 or 2 choices but the array was still getting them and by the time the log completed they were there.
setTimeout(choice,1000);


// click and win checks go down here
// if user clicks name that matches


})




/////////////// graveyard



  //     pokeRandom();
  //     pokeRandom();
  //     console.log(optionArray);
  //     // shuffle();
  //     // insert items into options
  //     $('#optionA').text(optionArray[0])
  //     $('#optionB').text(optionArray[1])
  //     $('#optionC').text(optionArray[2])
  // }
