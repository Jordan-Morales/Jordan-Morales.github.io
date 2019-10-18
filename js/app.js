// console.log($);
// tested working

$(() => {

  $('input[type="submit"]').click(() => {
    let $userInput = $('input[type="text"]').val();

    event.preventDefault(); // required
    // currently ajax is now dependant on input to determine query
      $.ajax({
        //this ajax url is done by pokedex number or name (ie 43 or oddish)
        url: "https://pokeapi.co/api/v2/pokemon/"+$userInput
      }).then(
        (data) => {
          // console.log(data.sprites.front_default);
          //using to determing placement as docs aren't on point


          //pulls data of name, weight, and first type (need a loop for multiple types as they share an array)
        $('#sprite').attr('src', data.sprites.front_default)
        $('#name').html(data.name);
        $('#weight').html(data.weight);
        $('#type').html(data.types[1].type.name);
        () => {
            console.log('bad request');
        }
      })
  }); //closing input click
}) //closing jquery
