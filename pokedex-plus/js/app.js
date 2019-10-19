$(() => {

// functions
const growth = () => {
let $curID = parseInt($('#id').text());
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon-species/"+$curID
  }).then((data) => {
    $('#growthRate').html(data.growth_rate.name),
  () => {
      console.log('bad request');
    }
  })
}

// Primary submit
  $('input[type="submit"]').click(() => {
    let $userInput = $('input[type="text"]').val();
    //query is case-sensitive
    $userInput = $userInput.toLowerCase();
    event.preventDefault(); // required
    // currently ajax is now dependant on input to determine query
      $.ajax({
        //this ajax url is done by pokedex number or name (ie 43 or oddish)
        url: "https://pokeapi.co/api/v2/pokemon/"+$userInput
      }).then(
        (data) => {
          // console.log(data.moves);
          //pulls data of name, weight, and first type (need a loop for multiple types as they share an array)
          // loop example
            // for (var i = 0; i < 4; i++) {
            //   let move = $moves[i].move.name;
            // }
        $('#sprite').attr('src', data.sprites.front_default)
        $('#id').html(data.id);
        $('#name').html(data.name);
        $('#height').html(data.height);
        $('#weight').html(data.weight);
        growth();
        $('#type').html(data.types[0].type.name);
        // $('#move0').html(data.moves[0].move.name);
        // $('#move1').html(data.moves[1].move.name);
        () => {
            console.log('bad request');
        }
        $('button').show();
      })
  }); //closing input click

// button to go backwards
  $('#prev').click(() => {
    let n = parseInt($('#id').text());
    let $newID = (n - 1);
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/"+$newID
    }).then(
      (data) => {
      $('#sprite').attr('src', data.sprites.front_default)
      $('#id').html(data.id);
      $('#name').html(data.name);
      $('#height').html(data.height);
      $('#weight').html(data.weight);
      growth();
      $('#type').html(data.types[0].type.name);
      () => {
          console.log('bad request');
      }
  })
  })
// button to go forwards
  $('#next').click(() => {
    let n = parseInt($('#id').text());
    let $newID = (n + 1);

    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/"+$newID
    }).then(
      (data) => {
      $('#sprite').attr('src', data.sprites.front_default)
      $('#id').html(data.id);
      $('#name').html(data.name);
      $('#height').html(data.height);
      $('#weight').html(data.weight);
      growth();
      $('#type').html(data.types[0].type.name);
      () => {
          console.log('bad request');
      }
  })
  })
}) //closing jquery


// graveyard
//using to determing placement as docs aren't on point
