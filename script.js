 $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false 
    });
    $('.dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: false, // Displays dropdown below the button
          alignment: 'left' // Displays dropdown with edge aligned to the left of button
        }
     );
     $('select').material_select();
});

function download() {
   if (document.getElementById('Mac').checked==true){
       location.href = 'http://cosmicsearch.org/quarkrip/downloads/mac'+document.getElementById("Verison").value+".zip";
   }
   if (document.getElementById('Linux').checked==true) {
       location.href = 'http://cosmicsearch.org/quarkrip/downloads/linux'+document.getElementById("Verison").value+".zip";
   }
   if (document.getElementById('Windows').checked==true) {
       location.href = 'http://cosmicsearch.org/quarkrip/downloads/windows'+document.getElementById("Verison").value+".zip";
   }
}