$(document).ready(function(){
    $('input.autocomplete').autocomplete({
      
    });
});
//For Dash Board PAGE
function myFunction(){
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.textdecoration = "line-through";
    } else {
      text.style.textdecoration = "line-through";
    }
  };
  
  
  //FOR CREAT TODO PAGE save data on local storage//

   function   check(){
    

    var t = document.getElementById("one").value;
    var l = document.getElementById("two").value;
    var d = document.getElementById("three").value;
    if(d === "")
    {
      alert("Descripton is Must Before send your data");
    }
    var obj = {
      "title" : t,
      "location" : l,
      "description" : d
    };
    localStorage.setItem("title" , obj.title);
    localStorage.setItem("location" , obj.location);
    localStorage.setItem("description" , obj.description);
    
   }
   

   // To Close Dashboard by click on cross btn.
function Finish() {
  document.getElementById("hide").className = "hidden";
}

   //now also data should show on dasboard//
 /*document.getElementById("showTitleOnDashboard").innerHTML += localStorage.title;*/


function  retrive(){
var tt =localStorage.getItem("title");
var ll =localStorage.getItem("location");
var dd =localStorage.getItem("description");
document.getElementById("abc").innerText = "Title : " + tt +   "; Location :" + ll + " ; Description :" + dd + ";";
}
















//FOR EDIT TODO
function checkedit(){
    alert("ok");

  /*var te = document.getElementById("first").value;
  var le = document.getElementById("second").value;
  var de = document.getElementById("third").value;
  if(de === "")
  {
    alert("Descripton is Must Before send your data");
  }
  var objedit = {
    "title" : te,
    "location" : le,
    "description" : de
  };
  localStorage.setItem("title" , objedit.title);
  localStorage.setItem("location" , objedit.location);
  localStorage.setItem("description" , objedit.description);*/
  
 }


 function displayLD(){
  var ttt =localStorage.getItem("title");
  var lll =localStorage.getItem("location");
  var ddd =localStorage.getItem("description");
  document.getElementById("one").value = ttt;
  document.getElementById("two").value = lll;
  document.getElementById("three").value = ddd;
  
 }


   