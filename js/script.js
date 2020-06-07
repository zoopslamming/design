function addTopNavigation(page){
  var outputHTML = "";

  outputHTML +=
    "<a href='/'>Home</a> / " + page;

  $("#topNavigation").html(outputHTML);
}
