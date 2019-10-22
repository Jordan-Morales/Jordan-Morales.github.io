$(() => {


//////////////////////////////////// Functions
const extendedData = () => {
  // growth and some other data uses the /pokemon-species url
let $curID = parseInt($('#id').text());
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon-species/"+$curID
  }).then((data) => {
    $('#growthRate').html(data.growth_rate.name);
    aboutText(data);
  () => {
      console.log('bad request');
    }
  })
}
const types = (data) => {
  $('#type2').empty();
  if (data.types.length === 1) {
    $('#type').html(data.types[0].type.name);
  }
  else {
    $('#type').html(data.types[0].type.name);
    $('#type2').html(data.types[1].type.name);
  }
}
const heightWeight = (data) => {
  $('#height').html(data.height);
  let $height = parseInt($('#height').text());
  $height = ($height / 10)
  $('#height').empty()
  $('#height').text($height)

  $('#weight').html(data.weight);
  let $weight = parseInt($('#weight').text());
  $weight = ($weight / 10)
  $('#weight').empty()
  $('#weight').text($weight)
}
//working through soluction to post on En about info
const aboutText = (data) => {
for (var i = 0; i < data.flavor_text_entries.length; i++) {
  if (data.flavor_text_entries[i].language.name === "en") {
    $('#flavorText').html(data.flavor_text_entries[i].flavor_text);
    break;
  }
  else {
   console.log('Thats a no go Houston');
  }
}
}
/////////////////////////////////// Playing with Type Colors

// Trying to modify background behind type to become coloured depending on pl
// const colored = () => {
// let type1 = $('#type').value;
// if (type1 === "normal") {
// $('#type').css('background-color', 'grey')
// } else if (type1 === "flying") {
// $('#type').css('background-color', 'purple')
// }
//
// switch (type1) {
//   case 'normal':
//     $('#type').css('background-color', 'grey')
//     break;
//   case 'fighting':
//     $('#type').css('background-color', 'red')
//     break;
//   case 'flying':
//     $('#type').css('background-color', 'purple')
//     break;
//   default:
// }
// }






///////////////////////////////////// Primary submit
  $('input[type="submit"]').click(() => {
    let $userInput = $('input[type="text"]').val().toLowerCase();
    $('input[type="text"]').val('');
    //query is case-sensitive
    event.preventDefault(); // required
    // currently ajax is now dependant on input to determine query
      $.ajax({
        //this ajax url is done by pokedex number or name (ie 43 or oddish)
        url: "https://pokeapi.co/api/v2/pokemon/"+$userInput
      }).then(
        (data) => {
        $('#sprite').attr('src', data.sprites.front_default)
        $('#id').html(data.id);
        $('#name').html(data.name);
        extendedData();
        types(data);
        heightWeight(data);
        () => {
            console.log('bad request');
        }
        $('#spriteDisplay').show(400);
        $('#display').show(300)
        $('button').show('slow');
        $('#sprite').slideDown(400);
      })
  }); //closing input click

/////////////////////////////////// button to go backwards
  $('#prev').click(() => {
    let $newID = parseInt($('#id').text());
      if ($newID == 1) {
        $newID = 808
        $newID = ($newID - 1);
      } else {
        $newID = ($newID - 1);
      }

    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/"+$newID
    }).then(
      (data) => {
      $('#sprite').attr('src', data.sprites.front_default)
      $('#id').html(data.id);
      $('#name').html(data.name);
      extendedData();
      types(data);
      heightWeight(data);

      () => {
          console.log('bad request');
      }
  })
  })
///////////////////////////////////// button to go forwards
  $('#next').click(() => {
    let $newID = parseInt($('#id').text());
      if ($newID == 807) {
        $newID = 0
        $newID = ($newID + 1);
      } else {
        $newID = ($newID + 1);
      }
      $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/"+$newID
      }).then(
        (data) => {
        $('#sprite').attr('src', data.sprites.front_default)
        $('#id').html(data.id);
        $('#name').html(data.name);
        extendedData();
        types(data);
        heightWeight(data);

        () => {
            console.log('bad request');
        }
        })

  }) // end of forward button function







}) ////////////closing jquery on document load

//////////////////////////////// graveyard

// $('#pokedexCover').css("visibility", "hidden")
// $('#containAll').css('visibility' , 'visible')

// $('#flavorText').html(data.flavor_text_entries[2].flavor_text);
// languages aren't in same order throughout array. This could be an issue.

// $.ajax({
//   url: "https://pokeapi.co/api/v2/evolution-chain/2/"
// }).then((data) => {
//   console.log(data);
// () => {
//     console.log('bad request');
//   }
// })
// console.log(data.moves);



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
