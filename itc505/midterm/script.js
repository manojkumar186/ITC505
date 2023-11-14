const story = {
    start: {
        text: "Welcome to the personality test. Are you more outgoing or introverted?",
        choices: [
            {
                choice: "Outgoing",
                consequence: "outgoing"
            },
            {
                choice: "Introverted",
                consequence: "introverted"
            }
        ],
        image: "start.jpg"
    },
    outgoing: {
        text: "Great! Now, how do you handle stress?",
        choices: [
            {
                choice: "Face it head-on",
                consequence: "headOn"
            },
            {
                choice: "Take a break and relax",
                consequence: "relax"
            }
        ],
        image: "stress.jpg"
    },
    introverted: {
        text: "Nice choice! What's your favorite way to spend a quiet evening?",
        choices: [
            {
                choice: "Reading a book",
                consequence: "reading"
            },
            {
                choice: "Watching a movie",
                consequence: "movie"
            }
        ],
        image: "evening.png"
    },
    headOn: {
        text: "You're a proactive problem solver. Now, how do you handle setbacks?",
        choices: [
            {
                choice: "Learn from them",
                consequence: "learn"
            },
            {
                choice: "Feel discouraged",
                consequence: "discouraged"
            }
        ],
        image: "setbacks.png"
    },
    relax: {
        text: "You prefer taking a breather. Now, what's your approach to teamwork?",
        choices: [
            {
                choice: "Enjoy collaborating",
                consequence: "collaborate",
            },
            {
                choice: "Prefer working alone",
                consequence: "alone",
            }
        ],
        image: "teamwork.jpg"
    },
    reading: {
        text: "Escape into the world of books. How do you handle surprises?",
        choices: [
            {
                choice: "Embrace them",
                consequence: "embraceSurprises",
            },
            {
                choice: "Feel uneasy",
                consequence: "uneasy",
            }
        ],
        image: "surprises.jpg"
    },
    movie: {
        text: "Relax with a movie. How do you adapt to change?",
        choices: [
            {
                choice: "Adapt easily",
                consequence: "adapt",
            },
            {
                choice: "Find it challenging",
                consequence: "challenging",
            }
        ],
        image: "adapt.png"
    },
    learn: {
        text: "Congratulations! You're a resilient and growth-oriented individual.",
        image: "ending1.png"
    },
    discouraged: {
        text: "Chin up! You're sensitive and cautious but don't let setbacks define you.",
        image: "ending2.jpg"
    },
    collaborate: {
        text: "You thrive in teamwork and social environments. Keep that spirit!",
        image: "ending3.jpg"
    },
    alone: {
        text: "You value independence and self-reliance. Embrace it!",
        image: "ending4.png"
    },
    embraceSurprises: {
        text: "You're open-minded and embrace life's unpredictability.",
        image: "ending5.jpg"
    },
    uneasy: {
        text: "You prefer predictability and stability. That's okay!",
        image: "ending6.png"
    },
    adapt: {
        text: "Your adaptability is your strength. Keep embracing change!",
        image: "ending7.png"
    },
    challenging: {
        text: "Adapting to change might not be your forte, but you're working on it!",
        image: "ending8.jpg"
    }
};

function startGame() {
    document.getElementById("game-setup").style.display = "none";
    document.querySelector('.story').style.display = 'block';

    const restartButton = document.querySelector(".restart");
    
    showStory("start");
}

function showStory(stage) {
    const currentStage = story[stage];
    const storyText = document.getElementById("story-text");
    const storyImage = document.getElementById("story-image");
    const choices = document.querySelector(".choices");

    storyText.textContent = currentStage.text;
    storyImage.src = currentStage.image;

    choices.innerHTML = "";

    if (currentStage.choices) {
        currentStage.choices.forEach((choice) => {
            const button = document.createElement("button");
            button.textContent = choice.choice;
            button.addEventListener("click", () => showStory(choice.consequence));
            choices.appendChild(button);
        });
    } else {
        endGame(currentStage);
    }
}

function endGame(result) {
    const storyText = document.getElementById("story-text");
    const choices = document.querySelector(".choices");
    const restartButton = document.querySelector(".restart");
    const storyImage = document.getElementById("story-image");

    storyText.textContent = result.text;
    choices.innerHTML = "";
    storyImage.src = result.image;

    const button = document.createElement("button");
    button.textContent = "Restart the Game";
    restartButton.appendChild(button);
    button.addEventListener("click", () => {
        startGame();
        restartButton.removeChild(button);
    });
}

startGame();