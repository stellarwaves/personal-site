function main() {
   function scroll() { // remove "$"
      var y = $(this).scrollTop();        
      if (y > 100) {
         $(".main-header").css("background-color","green");
      }
   };
   scroll();
};


window.addEventListener('load', main);