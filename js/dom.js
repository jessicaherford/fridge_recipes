$(document).ready(function(){

  // var ingredients = $('#fridgeIngredients').val()

  $('#ingredientSubmit').click(function(){
    var ingredients = $('#fridgeIngredients').val()
    $('#fridgeItems').append('<li>' +ingredients+ '</li>');
    $('#fridgeIngredients').val('');
  })

  $('#clearResults').click(function(){
      $('p').remove();
  })
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
    if(e.which ===13){
      $('#ingredientSubmit').click();
      // $('#fridgeIngredients').val('');
      return false;
    }
  })

  $('#clearRecipes').click(function(){
      $('li').remove();
  })

  var call = $.ajax({
        url: "http://food2fork.com/api/search?key=c24b2377e69e34d6b450d0b43e35c9e0",
        method: "GET",
        dataType: 'json'
});


call.done(function(response){
  //console.log(response)
  //response is an object
  var recipes = response.recipes[0].title;
  var recipesArray = [];
  for(i=0; i<response.recipes.length; i++){
    var recipes = response.recipes[i].title;
    //console.log(recipes);
    recipesArray.push(recipes);
    //$('#results').append('<p>' +recipes+ '</p>');
  }
  //console.log(recipesArray);

  // for(i=0;i<recipesArray.length; i++){
  //   if("recipesArray[i]:contains('Bacon')"){
  //     $('#results').append('<p>' +recipesArray[i]+ '</p>');
  //   }
  // }

  //added from fridgeItemsHolder() need to put inside
  var fooItems = document.getElementById('fridgeItems');
  var fooListItems = fooItems.getElementsByTagName('li');

  var fridgeListItems = [];

  for(var i = 0 ; i<fooListItems.length; i++){
    fridgeListItems.push(fooListItems[i].innerHTML);
  }
  console.log(fridgeListItems);
  console.log(recipesArray);
  for(i=0; i<recipesArray.length; i++){
  if(recipesArray[i].includes(fridgeListItems)){
    $('#results').append('<p>' +recipesArray[i]+ '</p>');
  }
  //return recipesArray;

  }

//Have


//grabs list element by name
//put inside #findRecipes function?
function fridgeItemsHolder(fridgeListItems){
var fooItems = document.getElementById('fridgeItems');
var fooListItems = fooItems.getElementsByTagName('li');

var fridgeListItems = [];

for(var i = 0 ; i<fooListItems.length; i++){
  fridgeListItems.push(fooListItems[i].innerHTML);
}
for(i=0; i<recipesArray.length; i++){
if(recipesArray[i].includes(fridgeListItems)){
  $('#results').append('<p>' +recipesArray[i]+ '</p>');
}
}
console.log(fridgeListItems);

return fridgeListItems;


}


//looping through recipes object to see if stuff in fridge matches
 //Working on getting the results to append to the page
 //add things to the results area
  $('#findRecipes').click(function(){
      // var ingredientsId = ('#fridgeItems').length;
      // console.log(ingredientsId);
      return fridgeItemsHolder();
  })

})

})
