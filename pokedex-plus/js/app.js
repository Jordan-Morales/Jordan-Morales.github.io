$(() => {

  // $.ajax({
  //   url: "https://pokeapi.co/api/v2/evolution-chain/2/"
  // }).then((data) => {
  //   console.log(data);
  // () => {
  //     console.log('bad request');
  //   }
  // })

// functions
const growth = () => {
  // growth and some other data uses the /pokemon-species url
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
        $('#spriteDisplay').show(400);
        $('button').show('slow');
        $('#sprite').slideDown(400);
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


//// graveyard
//using to determing placement as docs aren't on point

// ALL QUERY URLS:
////////////////////////////////////////////////////////
// ability: "https://pokeapi.co/api/v2/ability/"
// berry: "https://pokeapi.co/api/v2/berry/"
// berry-firmness: "https://pokeapi.co/api/v2/berry-firmness/"
// berry-flavor: "https://pokeapi.co/api/v2/berry-flavor/"
// characteristic: "https://pokeapi.co/api/v2/characteristic/"
// contest-effect: "https://pokeapi.co/api/v2/contest-effect/"
// contest-type: "https://pokeapi.co/api/v2/contest-type/"
// egg-group: "https://pokeapi.co/api/v2/egg-group/"
// encounter-condition: "https://pokeapi.co/api/v2/encounter-condition/"
// encounter-condition-value: "https://pokeapi.co/api/v2/encounter-condition-value/"
// encounter-method: "https://pokeapi.co/api/v2/encounter-method/"
// evolution-chain: "https://pokeapi.co/api/v2/evolution-chain/"
// evolution-trigger: "https://pokeapi.co/api/v2/evolution-trigger/"
// gender: "https://pokeapi.co/api/v2/gender/"
// generation: "https://pokeapi.co/api/v2/generation/"
// growth-rate: "https://pokeapi.co/api/v2/growth-rate/"
// item: "https://pokeapi.co/api/v2/item/"
// item-attribute: "https://pokeapi.co/api/v2/item-attribute/"
// item-category: "https://pokeapi.co/api/v2/item-category/"
// item-fling-effect: "https://pokeapi.co/api/v2/item-fling-effect/"
// item-pocket: "https://pokeapi.co/api/v2/item-pocket/"
// language: "https://pokeapi.co/api/v2/language/"
// location: "https://pokeapi.co/api/v2/location/"
// location-area: "https://pokeapi.co/api/v2/location-area/"
// machine: "https://pokeapi.co/api/v2/machine/"
// move: "https://pokeapi.co/api/v2/move/"
// move-ailment: "https://pokeapi.co/api/v2/move-ailment/"
// move-battle-style: "https://pokeapi.co/api/v2/move-battle-style/"
// move-category: "https://pokeapi.co/api/v2/move-category/"
// move-damage-class: "https://pokeapi.co/api/v2/move-damage-class/"
// move-learn-method: "https://pokeapi.co/api/v2/move-learn-method/"
// move-target: "https://pokeapi.co/api/v2/move-target/"
// nature: "https://pokeapi.co/api/v2/nature/"
// pal-park-area: "https://pokeapi.co/api/v2/pal-park-area/"
// pokeathlon-stat: "https://pokeapi.co/api/v2/pokeathlon-stat/"
// pokedex: "https://pokeapi.co/api/v2/pokedex/"
// pokemon: "https://pokeapi.co/api/v2/pokemon/"
// pokemon-color: "https://pokeapi.co/api/v2/pokemon-color/"
// pokemon-form: "https://pokeapi.co/api/v2/pokemon-form/"
// pokemon-habitat: "https://pokeapi.co/api/v2/pokemon-habitat/"
// pokemon-shape: "https://pokeapi.co/api/v2/pokemon-shape/"
// pokemon-species: "https://pokeapi.co/api/v2/pokemon-species/"
// region: "https://pokeapi.co/api/v2/region/"
// stat: "https://pokeapi.co/api/v2/stat/"
// super-contest-effect: "https://pokeapi.co/api/v2/super-contest-effect/"
// type: "https://pokeapi.co/api/v2/type/"
// version: "https://pokeapi.co/api/v2/version/"
// version-group: "https://pokeapi.co/api/v2/version-group/"
