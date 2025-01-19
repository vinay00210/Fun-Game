let choices = document.querySelectorAll(".choice"); //stores choices value 

let message = document.querySelector("#message")

let userscore = 0;
let robotscore = 0;


//code to add event of click on user choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // console.log("choice was clicked")
        let userchoice = choice.getAttribute("id");
        // console.log(`you choose ${userchoice}`);
        game(userchoice);
    });
});


let game = (userchoice) => {
    let botchoice = robotchoice();//calling botchoice function and storing in it botchoice variable.

    //for checking the draw:
    if (userchoice == botchoice) {
        gamedraw(botchoice);
    } else if (userchoice == "rock") { //now different conditions checking:
        if (botchoice == "scissor") {
            userwin(userchoice, botchoice);
        } else {
            botwin(userchoice, botchoice);
        }
    } else if (userchoice == "paper") {
        if (botchoice == "scissor") {
            userwin(userchoice, botchoice);
        } else {
            botwin(userchoice, botchoice);
        }
    } else if (userchoice == "scissor") {
        if (botchoice == "paper") {
            userwin(userchoice, botchoice);
        } else {
            botwin(userchoice, botchoice);
        }
    }

}


//creating function to create choice of bot:
let robotchoice = () => {
    let botchoices = ["rock", "paper", "scissor"];
    let botchoice = botchoices[Math.floor(Math.random() * 3)];
    return botchoice;//this function will return choice made my bot
}



//creating function for execting if game draws:
let gamedraw = (botchoice) => {
    message.innerText = `Draws!🤕 BOT also choose ${botchoice} Try Again..`;
    message.style.backgroundColor = "#343434";
    message.style.color = "whitesmoke";
}


//creating function for execting if user wins:
let userwin = (userchoice, botchoice) => {
    console.log("you wins");
    message.innerText = `You Wins!😎 Yours ${userchoice} beats BOT's ${botchoice}`;
    message.style.backgroundColor = "#32CD32";
    message.style.color = "black";
    userscore++;
    document.querySelector("#userscore").innerText = userscore;
}


//creating function for execting if BOT wins:
let botwin = (userchoice, botchoice) => {
    console.log("bot wins");
    message.innerText = `BOT Wins!💀 BOT's ${botchoice} beats Yours ${userchoice}`;
    message.style.backgroundColor = "#D2042D";
    message.style.color = "black";
    robotscore++;
    document.querySelector("#robotscore").innerText = robotscore;
}