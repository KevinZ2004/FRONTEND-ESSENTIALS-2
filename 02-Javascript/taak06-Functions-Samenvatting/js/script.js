var score = 0;
let getal1;
let getal2;

function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);
}

function showRandomNumber1(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}

getal1 = showRandomNumber1();

function showRandomNumber2(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}

getal2 = showRandomNumber2();


/*function geefAntwoord(antwoord){
    if(getal1 < getal2){
        
        
        if(antwoord == 'lager'){
            console.log(antwoord);
            document.body.style.backgroundColor = "green";
            score++;
            
        }
        else{
            document.body.style.backgroundColor = "red";
            score--;
        }
        
        
    }
    else{
        if(antwoord =='hoger'){
            console.log(antwoord);
            document.body.style.backgroundColor = "green";
            score++;
        }
        else{
            document.body.style.backgroundColor = "red";
            score--;
        }
    }*/

    function geefAntwoord(antwoord){
        if(antwoord == "hoger"){
            
            
            if(getal1 > getal2){
                console.log(antwoord);
                document.body.style.backgroundColor = "green";
                score++;
                
            }
            else{
                document.body.style.backgroundColor = "red";
                score--;
            }
            
            
        }
        else{
            if(getal1 < getal2){
                console.log(antwoord);
                document.body.style.backgroundColor = "green";
                score++;
            }
            else{
                document.body.style.backgroundColor = "red";
                score--;
            }
        }
    
    document.getElementById("score").innerHTML = score;
    function makeRandomNumber(){
        return Math.floor(Math.random()*99+1);
    }
    
    function showRandomNumber1(){
        let randomGetal = makeRandomNumber()
        document.querySelector(".getal1").innerHTML = randomGetal;
        return randomGetal;
    }
    
    getal1 = showRandomNumber1();
    
    function showRandomNumber2(){
        let randomGetal = makeRandomNumber()
        document.querySelector(".getal2").innerHTML = randomGetal;
        return randomGetal;
    }
    
    getal2 = showRandomNumber2();
}
