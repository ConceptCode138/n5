"use strict";

function verificationFormulaire(){
    //  vérifier que l'utilisateur a renseigné tous les champs texte d'un formulaire
    let input = document.getElementById("verifJS").elements;
    let alertTxt = "";
    let n = input.length;
    let i;

    
    for (i = 0; i < n; i++)
    {
        if (input[i].type.toLowerCase() == "text" && input[i].value.length == 0)
        {
            alertTxt += "Le champ : " + input[i].name + " n'est pas rempli, il est [OBLIGATOIRE]\n";
        }
        else
        {
            alertTxt = "Voulez-vous valider ce formulaire\nAprès cela, il ne sera pas possible de revenir en arrière";
        }
    }
    alert(alertTxt).color="#ff0000b4";
}

//---------------------------------------------------------------------------
// récupération de la date - ANNEE
let date = new Date();
document.getElementById("yearDate").innerHTML = date.getFullYear();

//---------------------------------------------------------------------------

//  L'événement orientationchange (en-US) est déclenché chaque fois que l'appareil change l'orientation de l'écran et l'orientation peut elle-même être lue avec la propriété Screen.orientation (en-US).
screen.addEventListener("orientationchange", function () {
    console.log("The orientation of the screen is: " + screen.orientation);
  });

//  Empêcher le changement d'orientation
screen.lockOrientation('portrait');




// pour l'age parseFloat(str)
//------------------------------------------------------------------------------------------------------



/*#regionMENU_RESPONSIVE*/
/**
 * Basculement entre l'affichage et le masquage des liens
 * du menu de navigation adaptatif lorsque l'on clique
 * sur l'icône de menu hamburger
 */
function menuResponsive() {
    let lienMenuResponsive = document.getElementById("myLinks");

    if (lienMenuResponsive.style.display === "block") {

      lienMenuResponsive.style.display = "none";

    } 
    else {
      lienMenuResponsive.style.display = "block";
      lienMenuResponsive.style.marginTop = "100px";
      lienMenuResponsive.style.zIndex = "999";
    }
  }
/*#endregionMENU_RESPONSIVE*/


function addFormOnPage(){

}



/**
 * fonction testant deux entrées inputs type => mot de passe 
 */
function check(){
  let input_1 = document.getElementById("inputPWD").value;
  let input_2 = document.getElementById("inputPWD_valid").value;

  if(input_1 === input_2) {
    document.getElementById("checkValue").innerHTML="OK !";
  }
  else {
    document.getElementById("checkValue").innerHTML="ERREUR saisie !";
  }
}




function checkAge(){
  let input_age = document.getElementById("inputAge").value;

  if(input_age >= 18) {
    document.getElementById("checkLegal").innerHTML="OK !";
  }
  else if(input_age === ""){
    document.getElementById("checkLegal").innerHTML="Des chiffres SVP !";
  }
  else {
    //let icon = document.createElement("i");
    //icon.setAttribute("id","checkLegal");
    //icon.innerHTML = '<i class="fas fa-balance-scale-left"></i>';
    document.getElementById("checkLegal").innerHTML="Vous n'êtes pas majeur !";
  }
}
