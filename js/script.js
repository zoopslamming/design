function addTopNavigation(page){
  var outputHTML = "";

  outputHTML +=
    "<a href='index.html'>Home</a> / " + page;

  $("#topNavigation").html(outputHTML);
}
