# [Pokédex-Plus](https://jordan-morales.github.io/pokedex-plus/)
> Developing a basic Pokédex using the PokéAPI.

## Technology used in this project:

* HTML5
* CSS3
* JavaScript
* jQuery

## Resources

* [PokéAPI](https://pokeapi.co/docs/v2.html/)

## Initial functions:
* Search by Pokémon Number - check
* Search by Pokémon Name - check
* Traverse through Pokédex by ID number - check
* Have various information displayed - check
* Map page available with PokéWorld Map, no specific functionality - check
* Game Page with basic function - check
* additional features to come later


## Endless Scrolling

![Image of Carousel in Pokédex](https://github.com/Jordan-Morales/Jordan-Morales.github.io/blob/master/pokedex-plus/refImages/carousel%20through%20pokedex.gif)

>Using .ajax dependent on the next / prev button clicks and using the current pages reference point I'm able to move forward and backward through the array of objects pulled from the API.

![!Image of Prev Button Code](https://github.com/Jordan-Morales/Jordan-Morales.github.io/blob/master/pokedex-plus/refImages/prevbutton.png)

>Passing through an if-else statement the ID numbers (pulled from the current page data) is checked to ensure if you are at ID: 1 going backward you are brought to ID: 807, and the reverse is true ID: 807 leads you to ID: 1.

## Stick Nav (Header)
> Header bar containing the form and search function is sticky so that it remains at the top of the page when scrolling. This typically only becomes relevant when a mobile screen is rotated to landscape, or on a full desktop monitor with the window full expanded.

## Responsive UI

>Working towards developing a proper responsive design.
>All sizing is done using VW and % to make items adjust based on screen size, excluding borders which remained in px sizing.

![!Image of Responsive UI Code](https://github.com/Jordan-Morales/Jordan-Morales.github.io/blob/master/pokedex-plus/refImages/responsiveUI.png)

>Size is built for mobile first then resizes at 520px,
>and again at 990px. This allows the page to dynamically size depending on screen size, as the Pokédex needed to be oversized for a mobile screen and scaled down for full desktop screens.

## Data Locations within PokéAPI

>Data locations with in the PokéAPI we not as straightforward as I hoped they would be.

![!Image of Primary Code](https://github.com/Jordan-Morales/Jordan-Morales.github.io/blob/master/pokedex-plus/refImages/primarysubmit.png)

>Each Pokémon has two different data points the follow matching IDs but contain a variety of different information. Thus some data came from one and some form the other.

>One issue I ran into with the organization method of this API is that 'flavor text' is not easily accessible through your Pokémon Species query, there isn't one standard order that the different languages or games are kept in the array, needed my to sort through them.

![!About Text](https://github.com/Jordan-Morales/Jordan-Morales.github.io/blob/master/pokedex-plus/refImages/abouttext.png)

>Additionally, some Pokémon possess more than one type, I placed this in its own function and passes the query data through to this function, allowing my to create an if-else statement to sift through the data.

![!Image of Type Code](https://github.com/Jordan-Morales/Jordan-Morales.github.io/blob/master/pokedex-plus/refImages/typefunc.png)

>I did the same thing with my secondary data point, using a second function containing an .ajax I'm able to pull an populate different endpoints through different urls and place them on the same page at the same time.

![!Image of Query for Additional Data](https://github.com/Jordan-Morales/Jordan-Morales.github.io/blob/master/pokedex-plus/refImages/extendedDatafunc.png)

>The height and weight data came through originally using decimeters and hectograms, as these aren't very intuitive measurement values I switched them by using a divide by 10. (THANK YOU METRIC SYSTEM FOR BEING LOGICAL.)

![!Image of Height and Weight Code](https://github.com/Jordan-Morales/Jordan-Morales.github.io/blob/master/pokedex-plus/refImages/heightweightfunc.png)


## Additional Features

#### I made a Game! Can You Guess That Pokémon?!

>The game starts out by collecting a random Pokémon sprite and name (holding the name in a js varia)
>One of the challenges I ran into with this game was that I needed things to move a little slower since I was getting data from somewhere else, moving and manipulating it and then calling it again.

![!Primary Game](https://github.com/Jordan-Morales/Jordan-Morales.github.io/blob/master/pokedex-plus/refImages/primarygame.png)

>Next I had to gather the choices and make them available as buttons to be clicked on.

![!Choices](https://github.com/Jordan-Morales/Jordan-Morales.github.io/blob/master/pokedex-plus/refImages/choices.png)

>The game is all about guessing a Pokémon based on it's silhouette.

![!Darken a Sprite](https://github.com/Jordan-Morales/Jordan-Morales.github.io/blob/master/pokedex-plus/refImages/takespritedarken.png)

>Finally you have to know if you've clicked the right name. So

#### Winning!

![!Wining](https://github.com/Jordan-Morales/Jordan-Morales.github.io/blob/master/pokedex-plus/refImages/winning.png)




>work in progress
