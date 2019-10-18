$(() => {

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
          console.log(data.moves);
          //pulls data of name, weight, and first type (need a loop for multiple types as they share an array)
          // loop example
          // let $moves = data.moves;
          //   for (var i = 0; i < $moves.length; i++) {
          //     console.log($moves[i].move.name);
          //   }
        $('#sprite').attr('src', data.sprites.front_default)
        $('#name').html(data.name);
        $('#weight').html(data.weight);
        $('#type').html(data.types[0].type.name);
        $('#move0').html(data.moves[0].move.name);
          // example using loop
          // $('#move1').html($moves[1].move.name);
        () => {
            console.log('bad request');
        }
      })
  }); //closing input click
}) //closing jquery




// graveyard
//using to determing placement as docs aren't on point
