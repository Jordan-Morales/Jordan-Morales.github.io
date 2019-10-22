$(() => {
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

let $answer = '';

// brought back my shuffle technique from the deck of card stretch w02d03
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


// Function for the answer and two incorrect answers and pushing them to html
const choice = () => {
  $('#optionA').html(optionArray[0]);
  $('#optionB').html(optionArray[1]);
  $('#optionC').html(optionArray[2]);
}

//primary random number and ajax for displayed pokeShadow
//limiting to first 151 for my own sanity.
// $primaryRanNum should remain the same so this could be used again, or a hidden element could contain the correct answer
const game = () => {
  optionArray = [];

  let $primaryRanNum = Math.floor(Math.random() * 150) + 1;
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/"+$primaryRanNum
  }).then(
    (data) => {
    $('#sprite').attr('src', data.sprites.front_default);
    $name = data.name;
    $answer = data.name;
    optionArray.push($name);
    () => {
        console.log('bad request');
    }
  })

  pokeRandom();
  pokeRandom();
  //Had to delay the choice function because I was getting some refreshes showing only 1 or 2 choices but the array was still getting them and by the time the log completed they were there.
  setTimeout(choice,800);

}

game()

// click and win checks go down here
// if user clicks name that matches

$('#optionA').click(() => {
  if ($('#optionA').text() === $answer) {
    alert('You win. ' + $answer + ' is correct.')
    optionArray = [];
    setTimeout(game, 500)
  } else {
    alert('Incorrect. Try Again.')
  }
})
$('#optionB').click(() => {
  if ($('#optionB').text() === $answer) {
    alert('You win. ' + $answer + ' is correct.')
    optionArray = [];
    setTimeout(game, 500)
  } else {
    alert('Incorrect. Try Again.')
  }
})
$('#optionC').click(() => {
  if ($('#optionC').text() === $answer) {
    alert('You win. ' + $answer + ' is correct.')
    optionArray = [];
    setTimeout(game, 500)
  } else {
    alert('Incorrect. Try Again.')
  }
})

}) // end of jquery




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

  // console.log(optionArray);
