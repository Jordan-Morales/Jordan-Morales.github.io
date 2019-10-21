$(() => {
  console.log($);
  let $ranNum = Math.floor(Math.random() * 150) + 1;

  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/"+$ranNum
  }).then(
    (data) => {
      // console.log(data.moves);
    $('#sprite').attr('src', data.sprites.front_default);
    () => {
        console.log('bad request');
    }
  })
})
