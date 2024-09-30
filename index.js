const question_data= [
    {
        question: "Toricelli's barometer used mercury. Pascal duplicated it using French wine of density 984 kg m³. Determine the height of the wine column for normal atmospheric pressure.",
        options: ["10.5 m", 
                  "12 m", 
                  "9.5 m", 
                  "15 m" ],
        correct: 0,
    },
    {
        question: "A U-tube contains water and methylated spirit separated by mercury. The mercury columns in the two arms are in level with 10.0 cm of water in one arm and 12.5 cm of spirit in the other. What is the specific gravity of spirit?",
        options: ["0.6", 
                  "0.7", 
                  "0.8", 
                  "0.9" ],
        correct: 2,
    },
    {
        question: "In a test experiment on a model aeroplane in a wind tunnel, the flow speeds on the upper and lower surfaces of the wing are 70 m sand 63 m s¹ respectively. What is the lift on the wing if its area is 2.5 m²? Take the density of air to be 1.3 kg m³. 3",
        options: ["1450 N", 
                  "1510 N", 
                  "1600 N", 
                  "1650 N" ],
        correct: 1,
    },
    {
        question: "What is the pressure inside the drop of mercury of radius temperature? Surface tension of mercury at that temperature (20°C) is 4.65 * 10 ^ - 1 * N * m ^ - 1 The atmospheric pressure is 1.01 * 10 ^ 5 Pa. Also give the excess pressure inside the drop.",
        options: ["310 Pa", 
                  "290 Pa", 
                  "400 Pa", 
                  "350 Pa" ],
        correct: 0,
    },
    {
        question: "What is the pressure inside the drop of mercury of radius temperature? Surface tension of mercury at that temperature (20°C) is 4.65 * 10 ^ - 1 * N * m ^ - 1 The atmospheric pressure is 1.01 * 10 ^ 5 Pa. Also give the excess pressure inside the drop. ",
        options: ["0.4", 
                  "1", 
                  "0.25", 
                  "0.3" ],
        correct: 3,
    },
    {
        question: "A tank with a square base of area 1m ^ 2 is divided by a vertical partition in the middle. The bottom of the partition has a small-hinged door of area 20 cm². The tank is filled with water in one compartment, and an acid (of relative density 1.7) in the other, both to a height of 4.0 m. compute the force necessary to keep the door close.",
        options: ["57 N", 
                  "60 N", 
                  "53N", 
                  "55 N" ],
        correct: 0,
    },
    {
        question: "A plane is in level flight at constant speed and each of its two wings has an area of 25 m². If the speed of the air is 180 km/h over the lower wing and 234 km/h over the upper wing surface, determine the plane's mass. (Take air density to be 1 kg m³).",
        options: ["4200 kg", 
                  "4400 kg", 
                  "4600 kg", 
                  "4800 kg" ],
        correct: 1,
    }
];

const score_template= document.querySelector("#numerical");

const answerElement= document.querySelectorAll(".answer");
const [questionElement, ans1, ans2, ans3, ans4]=  
    document.querySelectorAll("#question, .ans1, .ans2, .ans3, .ans4");

const submit_button= document.querySelector("#Submit");

let currentQuiz= 0;
let score= 0;

const loadQuiz= () => {
    const {question, options}= question_data[currentQuiz];
    console.log(options);

    questionElement.innerText= question;
    
    ans1.innerText= options[0];
    ans2.innerText= options[1];
    ans3.innerText= options[2];
    ans4.innerText= options[3];
};

loadQuiz();

const getSelectedOption = () =>{
    let ans;
    answerElement.forEach((currentOption, index) =>{
        if(currentOption.ariaChecked){
            ans= index;
            console.log(index);
        }
    });
    return ans;
};

const deselectedAnswers = () =>{
     const arr= answerElement.forEach((currentElement) => currentElement.ariaChecked = false);
     return arr;
};

submit_button.addEventListener("click", () => {
    const selectedOptionIndex= getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === question_data[currentQuiz].correct){
        score++;
    }

    currentQuiz++;

    if(currentQuiz < question_data.length){
        deselectedAnswers();
        loadQuiz();
    }
    else{
        numerical.innerHTML= `
        <div class= "result">
        <h2>Your Score: ${score}/${questionElement.length} </h2>
        <p> Congratulations on completing the quiz.</p>
        <button class="reload_button" onclick="location.reload()"> Play again </button>
        </div>
        `;
    }
});

