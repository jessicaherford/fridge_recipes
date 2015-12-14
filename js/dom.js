$(document).ready(function(){

  var ingredients = $('#fridgeIngredients').val()

  $('#ingredientSubmit').click(function(){
    var ingredients = $('#fridgeIngredients').val()
    $('#fridgeItems').append('<li>' +ingredients+ '<li>');
  })

  $('#fridgeIngredients').keypress(function(e){
    if(e.which ===13){
      $('#ingredientSubmit').click();
      $('#fridgeIngredients').val('');
      return false;
    }
  })

  $('#clearRecipes').click(function(){
      $('li').remove();
  })

  $('li').mouseenter(function(){
    $(this).css('background-color', 'white');
  })



  var call = $.ajax({
        url: "http://food2fork.com/api/search?key=c24b2377e69e34d6b450d0b43e35c9e0",
        method: "GET",
        dataType: 'json'
});

call.done(function(response){
  console.log(response)
  // var recipes = response.recipes[0].title;
  // console.log(recipes);
  for(i=0; i<response.recipes.length; i++){
    var recipes = response.recipes[i].title;
    console.log(recipes);
    $('#results').append('<p>' +recipes+ '</p>');

    for(var recipes in response){
      console.log(recipes);
      if(recipes.innerHTML === 'Banana'){
        $('#results').append('<p>' +recipes+ '</p>');
      }
      // if(recipes:contains('#fridgeItems')){
      //   $('#results').append('<p>' +recipes+ '</p>');
      // }
    }
  }


//looping through recipes object to see if stuff in fridge matches
 //Working on getting the results to append to the page
 //add things to the results area
  $('#findRecipes').click(function(){
      $('#results').append('<p> Hello! It Worked! </p>');
  })

})

})
