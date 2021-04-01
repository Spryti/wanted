/* Bonus 1*/
function changeHeading(imgElement){
  var geniusName = imgElement.getAttribute('alt');
  var newHeadingVal = geniusName + " Is The Most Wanted Genius!";
  document.getElementById("mainHeading").innerHTML = newHeadingVal;

}


/* Bonus 2*/
function changeColor(imgElement){
  var geniusName = imgElement.getAttribute('alt');
 
  if(geniusName =="Perry Irving"){
    document.getElementsByTagName("body")[0].style.color= 'blue';
  }
  else if(geniusName =="James Green"){
     document.getElementsByTagName("body")[0].style.color="green";
  }else if(geniusName =="Paris Irving"){
     document.getElementsByTagName("body")[0].style.color="yellow";
  }else{
    document.getElementsByTagName("body")[0].style.color="white";
  }

}