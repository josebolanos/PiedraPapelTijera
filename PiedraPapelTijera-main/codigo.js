


function getComputerChoice() {
    let ramdomNumber = Math.floor(Math.random() * 3);
   
    if(ramdomNumber === 0) {
        return 'Piedra'
    } else if (ramdomNumber === 1){
        return 'Papel'
    } else {
        return 'Tijera'; 
    }
} 

function partida(playerSelection, computerSelection) {
   
    computerSelection =  getComputerChoice().toLowerCase ;
    playerSelection= getComputerChoice().toLowerCase;
  
   
    if( playerSelection ===  'Tijera' && computerSelection === 'Papel' || 
    playerSelection === 'Piedra' && computerSelection === 'Tijera' || 
    playerSelection === 'Papel' && computerSelection === 'Piedra' ) {
         return  "You Lose Compunter! ";
    } else {
        return'You Lose Player'    
    }
   
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for( let i = 0; i < 5; i++) {
        let playerSelection = prompt('Elige: Piedra, Papel o Tijera');
        let computerSelection = getComputerChoice();
        let resultado = partida(playerSelection,computerSelection);
        if(resultado.includes("You Lose Compunter! ")) {
            playerScore++ ;
        } else {
            computerScore++;
        }

         console.log("Puntuación actual:");
        console.log("Jugador: " + playerScore);
        console.log("Computadora: " + computerScore);
    } 
   
   
        if( playerScore > computerScore) {
            return'Player you Win'
        } else if(playerScore < computerScore){
            return'Player you Lose'
        } else {
            return 'Empate'
        }

   
}

 
     
     let resultado = game()
     console.log(resultado);

    
       

     
    

     


     
     
   

 








  
