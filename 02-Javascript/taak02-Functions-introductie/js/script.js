let strNaam;
let boolNaamKlopt;

// vraag de gebruiker om zijn naam
// prompt("Hoe heet je?"); 

    inputName(); // roept de functie aan
 function checkName() {
    if(boolNaamKlopt==true){ 
        alert("welkom");
    }
    else{ 
        alert("dus je het niet zo?");
        inputName();    
    }
    }