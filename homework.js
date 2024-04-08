searchForm = document.getElementById('country-form');
searchForm.addEventListener('submit', e => updateCountryInfo(e, 1));
async function updateCountryInfo(e, pageNumber) {
    e.preventDefault();
    console.log('Fetching country info...');
    const countryName = document.getElementById('country-name').value;
    try {
      response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      data = await response.json();
        displayCountry(data, pageNumber);

    } catch (error) {
        console.error(error);
    }
}
function displayCountry(data, pageNumber) {
    console.log('Displaying country info...');
    console.log(data)
    for (let country of data) {
        console.log(country);
    }
    const country = data[0];
    const countryInfo = document.getElementById('country-info');
    countryInfo.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}" class="card-img-top">
        <div class="card-body">         
        <img src="${country.coatOfArms.png}" width='150px' height='150px'>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area} km<sup>2</sup></p>
        <p>Currency: ${country.currencies[Object.keys(country.currencies)[0]].name} (${country.currencies[Object.keys(country.currencies)[0]].symbol})</p>
        </div>
        </div>
    `;
   
}