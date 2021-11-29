export default() => {
    getBreeds();
}
//const apiKey = ""

const breedsBtn = document.getElementById('breedBtn').addEventListener('click', getBreeds);
const ranBtn = document.getElementById('randomBtn').addEventListener('click', getDogs);

function getBreeds(){
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json ())
    .then(data => {
        console.log(data.results);
        const Breeds = data.results.map(Breeds => {
            return `
            <h3>${Breeds.name}</h3>
            `;
        }).join(" ");
        console.log(Breeds);
        document.getElementById('App').innerHTML = Breeds;
    })
    .catch(err => console.log(err));
}
function getDogs(){

}