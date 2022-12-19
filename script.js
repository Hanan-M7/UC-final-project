const words =[
    "difficulty","triangle","priority",
    "practice","boycott","feature",
    "surprise","assembly","window",
    "flowers","appeal","university",
    "nature","result","strong",
    "straight","obvious","court",
    "minute","issue","level"
]

let correctWord;
const GameStart =() =>{
    let randomWord= words[Math.floor(Math.random()*words.length)];
    let mixedUpWord= randomWord.split("");
    for(let i=0; i<mixedUpWord.length -1; i++){
        let j= Math.floor(Math.random() * (i+1));
        let temp= mixedUpWord[i];
        mixedUpWord[i]= mixedUpWord[j];
        mixedUpWord[j]=temp;
    }
    let shuffledWord = document.getElementById("this")
    shuffledWord.innerText = mixedUpWord.join(" ")
    correctWord= randomWord;
    let inputField = document.querySelector("input").value ="";
    console.log(mixedUpWord, randomWord, shuffledWord);
}

GameStart();

const checkAnswer=() =>{
    let iWord= document.querySelector("input").value;
    if (!iWord) return (`Please enter a valid word`);
    if (iWord != correctWord) return alert(`Oops! That's not the right answer`);
    alert(`Yes! You got that right`);
    GameStart();
}

document.querySelector(".pBtn").addEventListener("click", GameStart);
document.querySelector(".aBtn").addEventListener("click", checkAnswer);