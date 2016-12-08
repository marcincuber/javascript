function gameFunc(choice1, choice2){
       if (choice1 === choice2){
           return "draw";
       } else if (choice1 === "rock"){
            if (choice2 === "paper"){
            return "Paper Wins";
            } else {
            return "Rock Wins";
            }
       } else if (choice1 === "paper"){
            if(choice2 === "rock"){
             return "Paper Wins";
            } else {
             return "Scissors Wins";
            }
       } else if (choice1 === "scissors"){
            if(choice2 === "paper"){
             return "Scissors Win";
            } else {
             return "Rock Wins";
            }
       } else {
            return "Your Entry Was Invalid";
       }
};
