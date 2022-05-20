player_1_name=localStorage.getItem("player1");
player_2_name=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
document.getElementById("player_1_name").innerHTML=player_1_name+" : ";
document.getElementById("player_2_name").innerHTML=player_2_name+" : ";

document.getElementById("player_1_score").innerHTML=player1_score;
document.getElementById("player_2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn : "+ player_1_name;
document.getElementById("player_answer").innerHTML="Answer Turn : "+ player_2_name;

function send() {
    number1=document.getElementById("input1").value;
    number2=document.getElementById("input2").value;
    answer=parseInt(number1)*parseInt(number2);
}