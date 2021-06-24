const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function getplanets() {
    const res = await fetch(END_POINT);
    const planets = res.json();
    return planets; 
}

export default getplanets;