let movieGernes = document.querySelector(".movieGernes");
let movielist   = document.querySelector(".movielist");


loadGenres();
loadMovieList(0);

function loadGenres() {
    let buildGenres ="";

    for(i=0; i<allMovies.length; i++){
        buildGenres +='<option value="'+i+'">'+allMovies[i].gerne+'</option>';
    }

    movieGernes.innerHTML = buildGenres;
}

function loadMovieList(index){

    let buildLI ="";
    let movieGerne = allMovies[index].movies;
    for( let i=0; i<movieGerne.length; i++){
         buildLI +='<li onClick="loadMovieDetails('+index+','+i+')">';
           buildLI+= '<h4>'+movieGerne[i].title+'</h4>';
           buildLI+= '<img src="assets/img/'+movieGerne[i].thumb+'" alt="Plane">';
           buildLI+= '<p class="description">'+movieGerne[i].desc+'/p>';
           buildLI+= '<div class="row movie-stats m0 p0">';
              buildLI+='<div class="col m0 p0">Date: <span>01-03-2023</span> </div>';
              buildLI+='<div class="col m0 p0">Length: <span>108</span> </div>';
           buildLI+='</div>';
         buildLI+='</li>';
    }
    movielist.innerHTML = buildLI;
       
    
}