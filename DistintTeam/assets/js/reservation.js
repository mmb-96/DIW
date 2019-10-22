function show() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    setTimeout( function() { 
      popup.style='display:none';
    }, 3000);
  }