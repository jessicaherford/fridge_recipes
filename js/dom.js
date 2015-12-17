$(document).ready(function(){

  // var ingredients = $('#fridgeIngredients').val()

  // $('#ingredientSubmit').click(function(){
  //   var ingredients = $('#fridgeIngredients').val()
  //   $('#fridgeItems').append('<li>' +ingredients+ '</li>');
  //   $('#fridgeIngredients').val('');
  // })
  //
  // $('#clearResults').click(function(){
  //     $('p').remove();
  //     $('img').remove();
  // })
  // var ingredientsId = ('#fridgeItems').length
  // console.log(ingredientsId);
  // for(var i = 0; i<ingredientsId; i++){
  //   console.log(ingredientsId[i]);
  // }

//   var albumsId = results["results"];
//   for (var i = 0; i < albumsId.length; i++) {
//     var my_id = albumsId[i]["id"];
//     console.log(my_id);
//     $(".albums").append('<img src="images/'+albumsId[i]["cover_art"]+'" id="'+my_id+'"/>');
//     var my_div = $("#"+my_id);
//   }
//
// console.log(albumsId);
$('#fridgeIngredients').keypress(function(e){
  if(e.which === 13){
    $('#ingredientSubmit').click();
    ('#fridgeIngredients').val('');
    return false;
  }
})

//Working Search Code
$('#ingredientSubmit').click(function(){

  // if(('#fridgeIngredients').val() === ' '){
  //
  // }

  var searchedValue = $('#fridgeIngredients').val();
  if(searchedValue === ''){
    $('h2').replaceWith("<h5>Top Trending Recipes</h5>");
    $("h1").css('color', '#fff');

  }

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
  // $("#results").append('<p id="recipeTitle">'+recipes+ '</p>' + '<a href=" '+imageLink+'" >'  + '<img src=" '+image+' "/>' + '</a>');
  $("#results").append('<div id="recipeTitle">' + '<span id="recipe">' +recipes+ '</span>' + '<a target="_blank" href=" '+imageLink+'" >'  + '<img src=" '+image+' "/>' + '</a>' + '</div>' );
  $("#clearResults").css('visibility', 'visible');
  }
})

})

// $("#recipe").mouseenter(function(){
//   $("#recipe").css('visibility', 'hidden');
// })

$('#clearResults').click(function(){
  $("#results").empty();
})




//
//   $('#clearRecipes').click(function(){
//       $('li').remove();
//   })
//
//
//   var call = $.ajax({
//         url: "http://food2fork.com/api/search?key=c24b2377e69e34d6b450d0b43e35c9e0",
//         method: "GET",
//         dataType: 'json',
//
//
// });
//
//
//
//
// call.done(function(response){
//   console.log(response)
//   //response is an object
//
//   var recipes = response.recipes[0].title;
//   var recipesArray = [];
//   for(i=0; i<response.recipes.length; i++){
//     var recipes = response.recipes[i].title;
//     var pic = response.recipes[i].image_url;
//     //console.log(recipes);
//     recipesArray.push(recipes,pic);
//     // recipesArray.push(pic);
//     // $('#results').append('<p>' +recipes+ '</p>');
//     // $('#results').append('<img src=" '+pic+' " />' );
// //This part is working
//   }
//   console.log(recipesArray);
//
//
//   //added from fridgeItemsHolder() need to put inside
//   var fooItems = document.getElementById('fridgeItems');
//   var fooListItems = fooItems.getElementsByTagName('li');
//
//   var fridgeListItems = [];
//
//   for(var i = 0 ; i<fooListItems.length; i++){
//     fridgeListItems.push(fooListItems[i].innerHTML);
//   }
//   console.log(fridgeListItems);
//
// //trying to remove last item it appends
//   for(i=0; i<recipesArray.length; i++){
//   if(recipesArray[i].includes(fridgeListItems)){
//     $('#results').append('<p>' +recipesArray[i]+ '</p>'+ '<img src=" '+recipesArray[i+1]+' "/>');
//     // console.log(recipesArray[i+1]);
//     // $('#results').append('<img src=" '+recipesArray[i+1] +' "/>' );
//   }
//   else{
//
//   }
//   //return recipesArray;
//
//   }
// //
// //
// //
// // //grabs list element by name
// // //put inside #findRecipes function?
//
// function fridgeItemsHolder(fridgeListItems){
//
//
// var fooItems = document.getElementById('fridgeItems');
// var fooListItems = fooItems.getElementsByTagName('li');
//
// var fridgeListItems = [];
//
// for(var i = 0 ; i<fooListItems.length; i++){
//   fridgeListItems.push(fooListItems[i].innerHTML);
// }
// for(i=0; i<recipesArray.length; i++){
//   // var pic = response.recipes[i].image_url;
//   // console.log(pic);
// if(recipesArray[i].includes(fridgeListItems)){
//   $('#results').append('<p>' +recipesArray[i]+ '</p>');
//   // $('#results').append('<img src=" '+recipesArray[i+1]+' "/>' );
//
// }
// }
// console.log(fridgeListItems);
//
// return fridgeListItems;
//
//
// }
// //
// //
// // //looping through recipes object to see if stuff in fridge matches
// //  //Working on getting the results to append to the page
// //  //add things to the results area
//   $('#findRecipes').click(function(){
//       // var ingredientsId = ('#fridgeItems').length;
//       // console.log(ingredientsId);
//       return fridgeItemsHolder();
//   })
//
// })

})
