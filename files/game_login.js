function adduser(){
    player1_name = document.getElementById("player1-name").value;
    player2_name = document.getElementById("player2-name").value;

    localStorage.setItem("Player1Name",player1_name);
    localStorage.setItem("Player2Name",player2_name);

    window.location="game_page.html";
}

player1_name = localStorage.getItem("Player1Name");
player2_name = localStorage.getItem("Player2Name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in lower case =" + word);

    letter1 = word.charAt(1);
    console.log(letter1);

    lengthd = Math.floor(word.length/2);
    letter2 = word.charAt(lengthd);
    console.log(letter2);

    lengthm = word.length - 1;
    letter3 = word.charAt(lengthm);
    console.log(letter3);

    remove1 = word.replace(letter1,"_");
    remove2 = remove1.replace(letter2,"_");
    remove3 = remove2.replace(letter3,"_");
    console.log(remove3);

    question = "<h4 id='display'> Q." + remove3 + "</h4>";
    inputbox = "<br>Answer : <input type='text' id='input_check'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + inputbox + check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check(){
    get_word1 = document.getElementById("input_check").value;
    answer = get_word1.toLowerCase();
    console.log("Word in lower case =" + answer);
    if (answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    else {
        if(answer_turn == "player1"){
            player1_score = player1_score - 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score - 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}