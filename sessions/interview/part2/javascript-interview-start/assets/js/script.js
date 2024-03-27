const movieGernes      = document.querySelector('.movieGernes');
const movielist        = document.querySelector('.movielist');
const movieDetailsPage = document.querySelector('.movie-details-page');

populateMovies(0);
loadDetailPage(0, 2);

/* Dropdown for Gernes */
let buildGernes = '';
for(var run=0; run<allMovies.length; run++){
    buildGernes += `
        <option value="${run}">${allMovies[run].gerne}</option>
    `;
}
movieGernes.innerHTML = buildGernes;

/* Populate Movie list based on Gernes */
function populateMovies(g){
    let buildList = '';
    let currentGerne = allMovies[g];

        for (let run=0; run<currentGerne.movies.length; run++){
            buildList += `
                <li onclick="loadDetailPage(this, ${g}, ${run})">
                    <h4>${currentGerne.movies[run].title}</h4>
                    <img src="assets/img/${currentGerne.movies[run].thumb}" alt="${currentGerne.movies[run].title}">
                    <p class="description">${currentGerne.movies[run].desc}</p>
                    <div class="row movie-stats m0 p0">
                        <div class="col m0 p0">Date: <span>${currentGerne.movies[run].date}</span> </div>
                        <div class="col m0 p0">Length: <span>${currentGerne.movies[run].length}</span> </div>
                    </div>
                </li>
            `;
        }
        movielist.innerHTML = buildList;
        loadDetailPage(g, 0);
}

/*Selected Movie*/
function selectedMovie(_li, g, m){
    const selectedMovie = document.querySelector(".selected-movie");
    if(selectedMovie){
        selectedMovie.classList.remove('selected-movie');
    }
    else{
        _li.classList.add("selected-movie");
    }
    loadDetailPage(g, m);
}

/* Load Movie Details Page */
function loadDetailPage(g, m){
    let currentGerne = allMovies[g];

    let listActors = "";
    currentGerne.movies[m].actors.forEach((item, index)=> {
        listActors += item + ", ";
    })

    let buildDetailPage = `
            <h1>${currentGerne.movies[m].title} (2023)</h1>
            <h4>Date: ${currentGerne.movies[m].date} | Length: ${currentGerne.movies[m].length} min</h4>
            <div class="container">
                ${currentGerne.movies[m].trailer}
            </div>

            <h4>${listActors}</h4>
            <p>${currentGerne.movies[m].desc}</p>
        `;

        movieDetailsPage.innerHTML = buildDetailPage;
}