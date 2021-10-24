fetch("https://switch-yam-equator.azurewebsites.net/api/actors ",{
    headers: "x-chmura-cors: < 2161d3c7-d2f7-4c3f-bff9-079640ca0748>"
}

    
)
    

   .then(response => response.json())
   .then(characters => showCharacters(characters.results));

   showCharacters = characters => {
    const charactersDiv = document.querySelector("#costars");
    characters.forEach(character => {
      const characterElement = document.createElement("p");
      characterElement.innerText = `Character Name: ${character.name}`;
      charactersDiv.append(characterElement);
    });
  }