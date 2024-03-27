const movieGernes = document.querySelector('.movieGernes');
const movieList = document.querySelector('.movielist');
const movieDetailsPage = document.querySelector('.movie-details-page');

/*build gerne*/
let buildGernes = '';
for (let i = 0; i < allMovies.length; i++) {
    buildGernes += `
      <option value="${i}" class="option">${allMovies[i].gerne}</option>
   `;
}
movieGernes.innerHTML = buildGernes;

/*populate movie list based on gernes*/
function populateMovies(g){
    let buildList = '';
    let currentGerne = allMovies[g];
    for (let i = 0; i < currentGerne.movies.length; i++) {
        buildList += `
        <li onclick ="loadDetailPage(${g}, ${i})">
         <h4>${currentGerne.movies[i].title}</h4>
         <img src="assets/img/${currentGerne.movies[i].thumb}">
         <p class="description">${currentGerne.movies[i].desc}</p>
         <div class="row movie-stats m0 p0">
         <class="col m0 p0">Date: <span>${currentGerne.movies[i].date}</span> </div>
         <div class="col m0 p0">Length: <span>${currentGerne.movies[i].length}min</span> </div>
         </div>
        </li>
 `;
    }
    movieList.innerHTML = buildList;
}

/*Load Movies Details Page*/

function loadDetailPage(g, m){
    let currentGerne = allMovies[g];
    let buildDetailpage = `
        <h1>${currentGerne.movies[m].title}</h1>
        <h4>Date:${currentGerne.movies[m].date} | Length:${currentGerne.movies[m].length}min</h4>
        <div class="container">
        ${currentGerne.movies[m].trailer}
        </div>
        
        <h4>${currentGerne.movies[m].actors}</h4>
        <p>${currentGerne.movies[m].desc }</p>
        `;

movieDetailsPage.innerHTML = buildDetailpage;
}