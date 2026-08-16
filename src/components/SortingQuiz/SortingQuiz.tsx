// state is saved to remember answers selected
import { useState } from "react";
import "./SortingQuiz.css";

// possible fams
type Fam = "taipei" | "tainan" | "taichung";

// each answer contains:
// text -> what the user sees
// fam -> which fam receives a point if this answer is selected

const questions = [
  {
    question:
      "You have an entire Saturday with nothing scheduled on your Google Calendar. What somehow ends up happening?",
    answers: [
      {
        text: "You text a few friends spontaneously and make plans to get brunch and study after.",
        fam: "taipei" as Fam,
      },
      {
        text: "You grab a matcha and finally drop into that used bookstore you’ve been meaning to visit for a while.",
        fam: "taichung" as Fam,
      },
      {
        text: "You stay in, recharge, work on a 1000 piece puzzle, and eventually get dinner with a close friend.",
        fam: "tainan" as Fam,
      },
      {
        text: "You decide to stay in but somehow get dragged into an intense pickleball game, go thrifting, and “get convinced” to go out to the bars that night.",
        fam: "taipei" as Fam,
      },
    ],
  },

  {
    question:
      "Your friends are trying to decide where to eat. What is your role in this conversation?",
    answers: [
      {
        text: "“I know a place!” You recently discovered a spot and want to share it with the group.",
        fam: "taichung" as Fam,
      },
      {
        text: "You’re down for anything everyone else wants.",
        fam: "tainan" as Fam,
      },
      {
        text: "You note everyone’s suggestions and figure out which option makes the most sense.",
        fam: "taipei" as Fam,
      },
      {
        text: "You remember a niche place someone recommended to you months ago and convince everyone to try it.",
        fam: "taichung" as Fam,
      },
    ],
  },

  {
    question:
      "You’re at a party where you only know one person. What are you doing?",
    answers: [
      {
        text: "Somehow get involved in a conversation with five people you just met.",
        fam: "taipei" as Fam,
      },
      {
        text: "Discussing existentialism with a friend.",
        fam: "tainan" as Fam,
      },
      {
        text: "Wandering around, observing what’s going on, and joining conversations when you feel like it.",
        fam: "taichung" as Fam,
      },
      {
        text: "You find the one unexpectedly interesting person there and have been talking to them the entire time.",
        fam: "tainan" as Fam,
      },
    ],
  },

  {
    question:
      "Pick the compliment that would secretly mean the most to you.",
    answers: [
      {
        text: "“You make people feel really comfortable around you.”",
        fam: "tainan" as Fam,
      },
      {
        text: "“You always have something interesting going on.”",
        fam: "taipei" as Fam,
      },
      {
        text: "“You have really good taste in music.”",
        fam: "taichung" as Fam,
      },
      {
        text: "“You’re someone I can always count on.”",
        fam: "taipei" as Fam,
      },
    ],
  },

  {
    question:
      "You’re traveling somewhere you’ve never been before. Which moment are you likely to remember afterward?",
    answers: [
      {
        text: "The random place you stumbled upon after abandoning the itinerary for a few hours.",
        fam: "taichung" as Fam,
      },
      {
        text: "Sitting somewhere beautiful with absolutely nowhere to be.",
        fam: "taichung" as Fam,
      },
      {
        text: "A conversation or a meal that made the place feel strangely nostalgic.",
        fam: "tainan" as Fam,
      },
      {
        text: "The day where you managed to fit an absurd number of things into your schedule.",
        fam: "taipei" as Fam,
      },
    ],
  },

  {
    question: "Your room is probably described as…",
    answers: [
      {
        text: "Chaotic and cluttered with random blind box items, figurines, and plushes. But, you know where everything is so it’s okay.",
        fam: "tainan" as Fam,
      },
      {
        text: "Full of sentimental knickknacks that have some story attached to them.",
        fam: "tainan" as Fam,
      },
      {
        text: "Constantly changing because you get bored and rearrange your room every week.",
        fam: "taipei" as Fam,
      },
      {
        text: "Comfortable and intentional, even if it isn’t perfectly clean.",
        fam: "taichung" as Fam,
      },
    ],
  },

  {
    question:
      "A friend calls you at 10PM and says, “Come outside.” What’s your first reaction?",
    answers: [
      {
        text: "“Give me ten minutes.” You can ask questions on the way.",
        fam: "taipei" as Fam,
      },
      {
        text: "“Why…?” You’re interested, but you need some context.",
        fam: "taichung" as Fam,
      },
      {
        text: "You groan, go anyway, and probably end up being glad you did.",
        fam: "taipei" as Fam,
      },
      {
        text: "You’d rather they come over, your banana bread is already baking and you were about to put on a movie.",
        fam: "tainan" as Fam,
      },
    ],
  },

  {
    question:
      "You’re working on something with a group and nobody can agree on what to do. What happens?",
    answers: [
      {
        text: "You start coming up with an actual plan, considering all the restraints and suggestions.",
        fam: "taipei" as Fam,
      },
      {
        text: "You listen to everyone and internally try to figure out an idea that makes everyone happy.",
        fam: "tainan" as Fam,
      },
      {
        text: "You throw out a completely different idea that somehow solves the problem.",
        fam: "taichung" as Fam,
      },
      {
        text: "You notice someone keeps getting talked over and make sure their idea gets heard.",
        fam: "taichung" as Fam,
      },
    ],
  },

  {
    question:
      "Years from now, you find a box filled with random things from your time at UVA. What are you happiest to find?",
    answers: [
      {
        text: "Photos and little things your friends gave you that you’d completely forgotten about.",
        fam: "tainan" as Fam,
      },
      {
        text: "Something from an event or trip that immediately reminds you how chaotic and fun that day was.",
        fam: "taipei" as Fam,
      },
      {
        text: "An old journal that captures exactly who you were at the time.",
        fam: "tainan" as Fam,
      },
      {
        text: "Something you bought just because you thought it looked cool.",
        fam: "taichung" as Fam,
      },
    ],
  },
];

const SortingQuiz = () => {
  // keeps track of which question the user is currently on
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // stores the answer index selected for each question
  // null means the question has not been answered yet
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );

  // stores the final fam result
  // null means the quiz has not been completed yet
  const [result, setResult] = useState<Fam | null>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestionIndex] = answerIndex;

    setAnswers(updatedAnswers);
  };

  const calculateResult = () => {
    // start every fam at 0 points
    const scores: Record<Fam, number> = {
      taipei: 0,
      tainan: 0,
      taichung: 0,
    };

    // go through every question and add a point
    // to the fam associated with the selected answer
    answers.forEach((selectedAnswerIndex, questionIndex) => {
      if (selectedAnswerIndex !== null) {
        const selectedFam =
          questions[questionIndex].answers[selectedAnswerIndex].fam;

        scores[selectedFam] += 1;
      }
    });

    // determine the highest score
    const highestScore = Math.max(
      scores.taipei,
      scores.tainan,
      scores.taichung
    );

    // find every fam that has the highest score
    const tiedFams = (Object.keys(scores) as Fam[]).filter(
      (fam) => scores[fam] === highestScore
    );

    // if there is only one winner, return it
    if (tiedFams.length === 1) {
      return tiedFams[0];
    }

    // tie-breaker:
    // look backward through the user's answers
    // and return the most recently selected fam that is tied
    for (
      let questionIndex = answers.length - 1;
      questionIndex >= 0;
      questionIndex--
    ) {
      const selectedAnswerIndex = answers[questionIndex];

      if (selectedAnswerIndex !== null) {
        const selectedFam =
          questions[questionIndex].answers[selectedAnswerIndex].fam;

        if (tiedFams.includes(selectedFam)) {
          return selectedFam;
        }
      }
    }

    return tiedFams[0];
  };

  const handleNext = () => {
    const selectedAnswer = answers[currentQuestionIndex];

    if (selectedAnswer == null) {
      alert("Please select an answer before proceeding.");
      return;
    }

    // move to next question if there are questions remaining
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // final question -> calculate result
      const winningFam = calculateResult();

      setResult(winningFam);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers(Array(questions.length).fill(null));
    setResult(null);
  };

  // -------------------------
  // RESULT SCREENS
  // -------------------------

  if (result === "taipei") {
    return (
      <div className="sorting-page result-page taipei-result">
        <div className="result-card">
          <p className="result-eyebrow">YOUR TSA FAM IS...</p>

          <div className="result-icon">🌃</div>

          <h1 className="result-title">Taipei</h1>

          <p className="result-tagline">
            Energetic • Social • Always Moving
          </p>

          <div className="result-description">
            <p>
              You thrive on movement, energy, and possibility. You’re naturally
              drawn to new experiences, spontaneous plans, and environments where
              something is always happening.
            </p>

            <p>
              You’re likely the person who keeps things moving, whether that means
              making the plan, bringing people together, or somehow ending up with
              an unexpectedly packed schedule.
            </p>

            <p>
              Potential Hogwarts House: Gryffindor or Slytherin (you’re a mix of both, but you’re definitely not a Hufflepuff).
            </p>
              
            <p> 
              Potential MBTI Type: ENTJ, ENFJ, ESTJ, ESTP, and ESFP (you're an extroverted, energetic, and spontaneous personality type).
            </p> 

            <p>
              Strengths: Takes initiative, adaptable, spontaneous, confident, gets things done, and willing to try new experiences.
            </p>

            <p>
              Weaknesses: Can be impulsive, may overcommit, impatient when things move slowly, sometimes takes on too much responsibility, and prone to FOMO.
            </p>

            <p>
              Potential Hobbies: Concerts, pickleball, traveling, photography, thrifting, exploring nightlife, and joining way too many UVA CIOs.
            </p>

          </div>

          <button className="restart-button" onClick={handleRestart}>
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  if (result === "tainan") {
    return (
      <div className="sorting-page result-page tainan-result">
        <div className="result-card">
          <p className="result-eyebrow">YOUR TSA FAM IS...</p>

          <div className="result-icon">🏮</div>

          <h1 className="result-title">Tainan</h1>

          <p className="result-tagline">
            Warm • Sentimental • Grounded
          </p>

          <div className="result-description">
            <p>
              You value comfort, connection, and the little things that make
              experiences meaningful. You’re sentimental, thoughtful, and probably
              remember the people and feelings surrounding a moment more than the
              itinerary itself.
            </p>

            <p>
              You tend to create spaces where people feel comfortable being
              themselves, and you appreciate relationships, traditions, and
              memories that deepen over time.
            </p>

            <p>
              Potential Hogwarts House: Hufflepuff or Gryffindor (you’re loyal, kind, and brave, but you also have a strong sense of justice).
            </p>
              
            <p> 
              Potential MBTI Type: ISFJ, ESFJ, INFJ, INFP, or ISTJ (you're a caring, empathetic, and thoughtful personality type).
            </p> 

            <p>
              Strengths: Loyal, thoughtful, dependable, good listener, remembers the little things, and values deep connections.
            </p>

            <p>
              Weaknesses: Can be overly sentimental, may have difficulty lettings things go, avoids conflict, puts other people's needs first, and can resist change when comfortable.
            </p>

            <p>
              Potential Hobbies: Baking, cooking, reading, journaling, scrapbooking, crotcheting/knitting, puzzles, movie nights, making playlists, and gardening.
            </p>

          </div>

          <button className="restart-button" onClick={handleRestart}>
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  if (result === "taichung") {
    return (
      <div className="sorting-page result-page taichung-result">
        <div className="result-card">
          <p className="result-eyebrow">YOUR TSA FAM IS...</p>

          <div className="result-icon">🌿</div>

          <h1 className="result-title">Taichung</h1>

          <p className="result-tagline">
            Curious • Independent • Unexpected
          </p>

          <div className="result-description">
            <p>
              You’re curious, independent, and a little unpredictable. You like
              discovering things for yourself, whether that’s a niche restaurant,
              a new hobby, a random bookstore, or an idea nobody else considered.
            </p>

            <p>
              You balance being laid-back with having a strong sense of what you
              like. You don’t necessarily need to be at the center of everything,
              but you usually manage to find the most interesting part of it.
            </p>

            <p>
              Potential Hogwarts House: Ravenclaw or Slytherin (you’re curious, independent, and a little unpredictable, but you also have a strong sense of what you like).
            </p>
              
            <p> 
              Potential MBTI Type: ENTP, ENFP, INTP, ISTP, ISFP, or INTJ (you're unpredictable socially but value independence, individuality, and experimentation).
            </p> 

            <p>
              Strengths: Curious, independent, creative, open-minded, resourceful, strong sense of individuality, good at seeing things differently, and comfortable exploring unusual ideas.
            </p>

            <p>
              Weaknesses: Can get bored easily, prone to hyperfixiating and then moving on, can seem detached, may overthink, can be stubborn about personal preferences, and starts projects without always finishing them.
            </p>

            <p>
              Potential Hobbies: Thrifting, used bookstores, drawing/design, gaming, ceramics, fashion, collecting, creative writing, and going down internet rabbit holes.
            </p>
          </div>

          <button className="restart-button" onClick={handleRestart}>
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  // -------------------------
  // QUIZ SCREEN
  // -------------------------

  const progress =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="sorting-page">
      <div className="quiz-card">
        <div className="quiz-header">
          <p className="quiz-eyebrow">TSA at UVA</p>
          <h1 className="quiz-title">Find Your Fam</h1>
          <p className="quiz-subtitle">
            Answer a few questions and find out which TSA fam fits you best.
          </p>
        </div>

        <div className="progress-section">
          <div className="progress-info">
            <span>
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>

            <span>{Math.round(progress)}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="question-section">
          <h2 className="question-text">
            {currentQuestion.question}
          </h2>

          <div className="answers-container">
            {currentQuestion.answers.map((answer, answerIndex) => {
              const isSelected =
                answers[currentQuestionIndex] === answerIndex;

              return (
                <label
                  key={answerIndex}
                  className={`answer-card ${
                    isSelected ? "selected" : ""
                  }`}
                >
                  <input
                    className="answer-radio"
                    type="radio"
                    name="answer"
                    checked={isSelected}
                    onChange={() =>
                      handleAnswerSelect(answerIndex)
                    }
                  />

                  <span className="answer-letter">
                    {String.fromCharCode(65 + answerIndex)}
                  </span>

                  <span className="answer-text">
                    {answer.text}
                  </span>

                  <span className="selection-circle">
                    {isSelected && "✓"}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="quiz-navigation">
          <button
            className="nav-button back-button"
            onClick={handleBack}
            disabled={currentQuestionIndex === 0}
          >
            ← Back
          </button>

          <button
            className="nav-button next-button"
            onClick={handleNext}
            disabled={
              answers[currentQuestionIndex] === null
            }
          >
            {currentQuestionIndex ===
            questions.length - 1
              ? "See My Fam"
              : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortingQuiz;