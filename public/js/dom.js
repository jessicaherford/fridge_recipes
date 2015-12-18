$(document).ready(function(){

$('#fridgeIngredients').keypress(function(e){
  if(e.which === 13){
    $('#ingredientSubmit').click();
    $('#fridgeIngredients').val('');
    return false;
  }
})

//Working Search Code
$('#ingredientSubmit').click(function(){
  $('#results').empty();
  var searchedValue = $('#fridgeIngredients').val();
  if(searchedValue === ''){
    $('h2').replaceWith("<h5>Top Trending Recipes</h5>");
    $("h1").css('color', '#fff');
  }
  else{

  }


// var dataStorage = document.getElementById("userName");
//
// dataStorage.addEventListener('click', function(){
//   var userNameName = document.getElementById("userName").val();
//   console.log(userNameName);
// })



$.ajax({
      url: "http://food2fork.com/api/search?key=c24b2377e69e34d6b450d0b43e35c9e0",
      method: "GET",
      data: {q:searchedValue},
      dataType: 'json',
}).done(function(response){
  console.log(response);
  for( i=0; i<response.recipes.length; i++){
  var recipes = response.recipes[i].title;
  var image = response.recipes[i].image_url;
  var imageLink = response.recipes[i].source_url;
  $("#results").append('<a target="_blank" href=" '+imageLink+'" >'  + '<div id="recipeTitle" class="animated slideInUp">' + '<span id="recipe">' +recipes+ '</span>' + '<img src=" '+image+' "/>'  + '</div>'+ '</a>' );
  $("#clearResults").css('visibility', 'visible');
  $(".recipes").css('visibility', 'visible');
  $("header").animate({'margin-top':'45px'}, 1000);
  }

})

})

$('#clearResults').click(function(){
  $("#results").empty();
})


})
