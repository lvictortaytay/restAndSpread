





//   $("#new-movie-form").on("submit", function(evt) { 
//     evt.preventDefault();  
//     let title = $("#title").val();  
//     let rating = $("#rating").val(); 
//     if(title.length < 2){
//         alert("title must be  2 characters or longer :(")
//         return null;
//     }

//     let movieData = { title, rating, currentId }; 
//     const HTMLtoAppend = createMovieDataHTML(movieData); 

//     currentId++  
//     moviesList.push(movieData); 
//     console.log(moviesList)

//     $("#movie-table-body").append(HTMLtoAppend); 
//     $("#new-movie-form").trigger("reset"); 



//   });





//   $("tbody").on("click", ".btn.btn-danger", function(evt) {  
   
//     let indexToRemoveAt = moviesList.findIndex( function(movie){ movie.currentId === +$(evt.target).data("deleteId")})
    
    
//     moviesList.splice(indexToRemoveAt, 1)

//     $(evt.target)
//       .closest("tr")
//       .remove();
    
//   });


//   $(".fas").on("click", function(evt) {  
    

//     let direction = $(evt.target).hasClass("fa-sort-down") ? "down" : "up";  
//     let keyToSortBy = $(evt.target).attr("id");   
//     let sortedMovies = sortBy(moviesList, keyToSortBy, direction); 
    
 

//     $("#movie-table-body").empty();      

   
//     for (let movie of sortedMovies) { 
//       const HTMLtoAppend = createMovieDataHTML(movie);  
//       $("#movie-table-body").append(HTMLtoAppend);  
//     }

//     // toggle the arrow
//     $(evt.target).toggleClass("fa-sort-down"); 
//     $(evt.target).toggleClass("fa-sort-up");  
//   });




// function sortBy(array, keyToSortBy, direction) {    
//   return array.sort(function(a, b) {   
//     if (keyToSortBy === "rating") {
//       a[keyToSortBy] = +a[keyToSortBy]; 
//       b[keyToSortBy] = +b[keyToSortBy];
//     }
//     if (a[keyToSortBy] > b[keyToSortBy]) {
//       return direction === "up" ? 1 : -1;
//     } else if (b[keyToSortBy] > a[keyToSortBy]) {
//       return direction === "up" ? -1 : 1;
//     }
//     return 0;
//   });
// }



// function createMovieDataHTML(data) {  
//   return `
//     <tr>
//       <td>${data.title}</td>  
//       <td>${data.rating}</td>
//       <td>   <button class="btn btn-danger" data-delete-id=${data.currentId}> delete  </button>  </td>
//     <tr>
//   `;
  
// }















let currentId = 0;

let moviesList = []; 
console.log("hello")






let number = 0

$(".entryForm").on("submit" , function(evt){
    evt.preventDefault();
    const movieTitle = $("#title").val();
    const movieRating = $("#rating").val(); 
    number++;

    const dataObj = {movieRating,movieTitle,number}
    const data = getHtmlForTable(dataObj)
    console.log(data)
    $("#table-body").append(data)
    deleteMovie();
    $(".entryForm").trigger("reset");
})

function deleteMovie(){
    $("#table-body").on("click",function(evt){
       $(evt.target).closest("tr").remove()
    })
}



function getHtmlForTable(data){
    return `
    
    <tr class = "${number}">
    <td> ${data.movieTitle}</td>
    <td> ${data.movieRating} </td>
    <td> <button class="btn btn-danger"> delete  </button> </td>
    </tr>
 
    `
}


























