const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
   return response.json();
})
	
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    towns.sort((a,b) => (a.averageRainfall > b.averageRainfall) ? 1 : ((b.averageRainfall > a.averageRainfall) ? -1 : 0));
    towns.reverse();
    for (let i = 0; i < towns.length; i++) {
       if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                // Create Elements
                let card = document.createElement('section');
               let name = document.createElement('h2');
               let motto = document.createElement('h4');
               let image = document.createElement('img');
               let yearFounded = document.createElement('p');
               let currentPopulation = document.createElement('p');
               let averageRainfall = document.createElement('p');
               let details = document.createElement('div');
                //select used information
                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
                averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall + 'in';
                // set attributes for img
                details.setAttribute('class', 'details');
                image.setAttribute('src', 'images/'+ towns[i].photo);
                image.setAttribute('alt', towns[i].name + ' Hometown');
                // select and order information used
                details.appendChild(name);
                details.appendChild(motto);
                details.appendChild(yearFounded);
                details.appendChild(currentPopulation);
                details.appendChild(averageRainfall);
                card.appendChild(details); 
                card.appendChild(image);

                document.querySelector('div.card').appendChild(card);
            }
        }
  }); 