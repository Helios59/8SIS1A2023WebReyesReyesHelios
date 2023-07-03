/*
Una API REST nos perite obtener informacion sobre diferentes elementos de un modelo
que se encuentra en algun sitio web, para poder realizar la Pokedex, vamos a tener
que conectarnos con el servicio de https://pokeapi.con/
*/

const pokeApiUrl = "https://pokeapi.con/api/v2";

//vamos a crear una funcion flecha que nos permita poder obtener los elementos de la API.

const pokedex = () => {
    /*
    Necesitamos un objeto auxiliar que nos permita aceder a los campos deseados de la API,
    para asi mostrar las estadisticas, buscarm ver, etc que viene por parte del DOM.
    */
   const pokemonStatsElements = {
    hp: document.getElementById("pokemonStatHp"),
    attack: document.getElementById("pokemonStatAttack"),
    defense: document.getElementById("pokemonStatDefense"),
    specialAttack: document.getElementById("pokemonStatSpecialAttack"),
    specialDefense: document.getElementById("pokemonStatSpecialDefense"),
    speed: document.getElementById("pokemonStatSpeed")
   };

   //necesitamos un auxiiar que nos permite poder cambiar la css de acuero al tipo de pokemon
   let currentClassType = null;

   //necesitamos una cadena que nos muestre la imagen del tipo de pokemon.
   const imageTemple = "<img clss = 'pokedisplat' src= '{imgSrc}' alt='pokedisplay' />";
   // cuando pone {imgSrc} mandas a llamar una funcion
   /*
   Necesitamos un objeto que guarde la ruta de las imagenes de apoyo, como lo que son
   para la busqueda cuando uno se encuentra el pokemon, la carga.
   */

   const images = {
    imgPokemonNotFound : "../img/404.png",
    imgLoading : "../img/loading.gif"
   };

   //Necesitamos un objeto que contenga las referencias de los elementos se van a
   //desplegar de acuerdo a la informacion del pokemon.
   const containers = {
    imageContainer : document.getElementById("pokedisplay-container"),
    pokemonTypesContainer : document.getElementById("pokemonTypes"),
    pokemonNameElement : document.getElementById("pokemonNameResult"),
    pokemonAbilitiesElement : document.getElementById("pokemonAbilities"),
    pokemonMovesElement : document.getElementById("pokemonMoves"),
    pokemonIdElement : document.getElementById("pokemonId"),
   };

   //necesitamos un ibjeto que contenga las referencias de todos los botones.
   const buttons = {
    all : Array.from(document.getElementById("btn")),
    search : document.getElementById("btnSearch"),
    next : document.getElementById("btnUp"),
    previous : document.getElementById("btnDown")
   };

   //necesitamos la referencia al campo de texto que usa el usuario
   //para escribir el nombre del pokemon
   const pokemonInput = document.getElementById("pokemonName");

   /**
    Necesitamos una funcion que se encague de obtener el tipo de pokemon
    y nos devuelva e resultado de la busqueda dentro de la API.
    */
   const processPokemonTypes = (pokemonData) => {
    let pokemonType = "";
    //vamos a utilizar la primera clase para dar color a los conetenedores.
    const firstClass = pokemonData.types[0].type.name;

    //donde sale types, sale directamente de la pagina de pokeapi.
    pokemonData.types.forEach((pokemonTypeData) => {
        //vamos a crear una etiqueta de clase por cada tipo de pokemon dentro del arreglo.
        pokemonType += `<span class = "pokemon-type ${pokemonTypeData.type.name}" >${pokemonTypeData.type.name}
        </span>`
    });

    //vamos a quitar la clase previa del contenedor de habilidades y movimientos y actualizar por la nueva.
    if (currentClassType){
        containers.pokemonMovesElement.classList.remove(currentClassType);
        containers.pokemonAbilitiesElement.classList.remove(currentClassType);
    }

    //ahora se agrega la clase al contenedor de habilidades y movimientos.
    containers.pokemonMovesElement.classList.add(firstClass);
    containers.pokemonAbilitiesElement.classList.add(firstClass);

    currentClassType = firstClass;

    //se agregan las etiquetas creadas.
    containers.pokemonTypesContainer.innerHTML = pokemonType;
   };

   //vamos a hacer una funcion para obtener todas las estadisticas.
   const processPokemonStats = (pokemonData) => {
    //vamos a utilizar el operador ternario ? para realizar un encadenamiento
    //del recorrido del arreglo.
    pokemonData.stats?.forEach((pokemonStatData) => {
        //vamos a evaluar el nombre de la estadistica y colocar su valor
        //respectivo dentro del contenedor.
        switch(pokemonStatData.stat.name){
            case "hp":
            pokemonStatsElements.hp.innerHTML = pokemonStatData.base_stat;
            pokemonStatsElements.hp.style = `background: lineal-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%,
            rgba(0,0,0,1)${pokemonStatData.base_stat}%);`;
            break;
        case "attack":
            pokemonStatsElements.attack.innerHTML = pokemonStatData.base_stat;
            pokemonStatsElements.attack.style = `background: lineal-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%,
            rgba(0,0,0,1)${pokemonStatData.base_stat}%);`;
            break;
        case "defense":
            pokemonStatsElements.defense.innerHTML = pokemonStatData.base_stat;
            pokemonStatsElements.defense.style = `background: lineal-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%,
            rgba(0,0,0,1)${pokemonStatData.base_stat}%);`;
            break;
        case "special-attack":
            pokemonStatsElements.specialAttack.innerHTML = pokemonStatData.base_stat;
            pokemonStatsElements.specialAttack.style = `background: lineal-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%,
            rgba(0,0,0,1)${pokemonStatData.base_stat}%);`;
            break;
        case "special-defense":
            pokemonStatsElements.specialDefense.innerHTML = pokemonStatData.base_stat;
            pokemonStatsElements.specialDefense.style = `background: lineal-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%,
            rgba(0,0,0,1)${pokemonStatData.base_stat}%);`;
            break;
        case "speed":
            pokemonStatsElements.speed.innerHTML = pokemonStatData.base_stat;
            pokemonStatsElements.speed.style = `background: lineal-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%,
            rgba(0,0,0,1)${pokemonStatData.base_stat}%);`;
            break;
        }
    });

   };

   /*
   Necesitamos una fucion que haga lo mismo que la de stats pero con los movimientos.
   */
  const processPokemonMoves = (pokemonData) => {
    let pokemonMovesContent = "";
    pokemonData.moves?.forEach((pokemonMove) => {
        pokemonMovesContent += `<li>${pokemonMove.move.name}</li>`;
    });

    containers.pokemonMovesElement.innerHTML = pokemonMovesContent;
  }

  const processPokemonAbilities = (pokemonData) => {
    let pokemonAbilitiesContent = "";
    pokemonData.abilities?.forEach((pokemonAbility) => {
        pokemonAbilitiesContent += `<li>${pokemonAbility.ability.name}</li>`;
    });

    containers.pokemonAbilitiesElement.innerHTML = pokemonAbilitiesContent;
  };

  //necesitamos una funcion para habilitar y deshabilitar los botones.
  const setLoading = () => {
    containers.imageContainer.innerHTML = imageTemple.replace("{imgSrc}", images.imgLoading);
    buttons.forEach(button => button.disable = true);
  };

  const setLoadingComplete = () => {
    buttons.all.forEach(button => checkDisabled(button));
  };

}