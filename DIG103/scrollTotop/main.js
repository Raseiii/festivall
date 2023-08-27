
// Scroll to top. add this code to your main.js file

$(".scrollToTop").on("click",function(){
   var rootElement = document.documentElement;
   rootElement.scrollTo({
     top: 0,
     behavior: "smooth"
   }) 
 });