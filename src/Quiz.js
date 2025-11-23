import React, { useState } from "react";

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);


  const scoresTemplate = {
    Nanosciences: 0,
    Fast: 0,
    Think_Green: 0,
    Chip_Design: 0,
    Infinity_Energy: 0,
    INSIDE_AI: 0,
    WALL_E: 0,
    Ultron: 0
  };
const courseNames = {
  Nanosciences: "Understanding Nanosciences",
  Fast: "Fast and Fourier-rous: Master the speed of sound",
  Think_Green: "Think Green, Build Smart: The Sustainable Industry Challenge",
  Chip_Design: "Hands-on Chip Design: Digital and Analog Fundamentals",
  Infinity_Energy: "Infinity Energy: The Quest for Sustainable Mobility",
  INSIDE_AI: "INSIDE AI: Where Data Becomes Smart",
  WALL_E: "Teaching WALL-E about where he comes from: AI",
  Ultron: "Age of Ultron: AI and Robotics for a Sustainable Future"
};
  const questions = [
    {
      text: "1. What area of technology or science are you most interested in?",
      options: [
        { text: "Nanoscience and biotechnology", value: ["Nanosciences"] },
        { text: "Embedded systems", value: ["Fast"] },
        { text: "Industrial innovation", value: ["Think_Green"] },
        { text: "Microelectronics", value: ["Chip_Design"] },
        { text: "Smart transportation", value: ["Infinity_Energy"] },
        { text: "Artificial Intelligence and Data processing", value: ["INSIDE_AI"] },
        { text: "Basics of Artificial Intelligence", value: ["WALL_E"] },
        { text: "Autonomous technologies", value: ["Ultron"] }
      ]
    },
    {
      text: "2. What learning method do you prefer?",
      options: [
        { text: "Scientific experiments and lab work", value: ["Nanosciences"] },
        { text: "Creative experimentation and building unique projects", value: ["Fast"] },
        { text: "Interactive lectures and real world discussions", value: ["Think_Green"] },
        { text: "Hands-on engineering and hardware design", value: ["Chip_Design"] },
        { text: "Case studies and teamwork on real world sustainability projects", value: ["Infinity_Energy"] },
        { text: "Practical workshops and coding sessions", value: ["INSIDE_AI"] },
        { text: "Collaborative coding and exploring the world of AI", value: ["WALL_E"] },
        { text: "Multidisciplinary and forward thinking learning", value: ["Ultron"] }
      ]
    },
    {
      text: "3. Choose the position you would like to have in a team.",
      options: [
        { text: "The scientist who never gives up.", value: ["Nanosciences"] },
        { text: "The artist-engineer who mixes tech with creativity.", value: ["Fast"] },
        { text: "The strategist who connects the big ideas.", value: ["Think_Green"] },
        { text: "The engineer who makes things function.", value: ["Chip_Design"] },
        { text: "The planner who keeps everyone on track.", value: ["Infinity_Energy"] },
        { text: "The analyst who makes sense of data.", value: ["INSIDE_AI"] },
        { text: "The creative who tries new approaches.", value: ["WALL_E"] },
        { text: "The visionary who dreams big for a sustainable future.", value: ["Ultron"] }
      ]
    },
    {
      text: "4. What is your dream destination?",
      options: [
        { text: "A beautiful and quiet university town near Paris", value: ["Nanosciences"] },
        { text: "An elegant and full of life city, known for its music, food and creativity", value: ["Fast"] },
        { text: "A vibrant coastal city where ancient history meets a modern lifestyle", value: ["Think_Green"] },
        { text: "A hidden gem of the Baltics, full of culture", value: ["Chip_Design"] },
        { text: "A city that blends innovation with the classic Italian charm", value: ["Infinity_Energy"] },
        { text: "A place surrounded by palm trees and with a permanent Atlantic breeze", value: ["INSIDE_AI"] },
        { text: "In the great Alps of France", value: ["WALL_E"] },
        { text: "A historical and full of energy city, known for its ancient ruins", value: ["Ultron"] }
      ]
    },
    {
      text: "5. What motivates you when joining a course?",
      options: [
        { text: "Exploring cutting-edge scientific discoveries.", value: ["Nanosciences"] },
        { text: "Expressing creativity through technology.", value: ["Fast"] },
        { text: "Learning how to make industries sustainable and future-ready.", value: ["Think_Green"] },
        { text: "Building something physical and functional.", value: ["Chip_Design"] },
        { text: "Contributing to a cleaner, more connected future.", value: ["Infinity_Energy"] },
        { text: "Understanding how AI and data shape our world.", value: ["INSIDE_AI"] },
        { text: "Using AI to make the world a better place.", value: ["WALL_E"] },
        { text: "Combining technology, ethics, and sustainability.", value: ["Ultron"] }
      ]
    },
    {
      text: "6. What type of challenge excites you the most?",
      options: [
        { text: "Solving microscopic mysteries that impact the future of science.", value: ["Nanosciences"] },
        { text: "Designing creative tech solutions from scratch.", value: ["Fast"] },
        { text: "Rethinking old systems to build a greener tomorrow.", value: ["Think_Green"] },
        { text: "Engineering high-performance hardware that pushes limits.", value: ["Chip_Design"] },
        { text: "Making industries cleaner, smarter, and more efficient.", value: ["Infinity_Energy"] },
        { text: "Training AI models to understand complex data.", value: ["INSIDE_AI"] },
        { text: "Teaching machines to learn and adapt like humans.", value: ["WALL_E"] },
        { text: "Imagining the next generation of autonomous systems.", value: ["Ultron"] }
      ]
    },
    {
      text: "7. Which project would you be happiest to work on?",
      options: [
        { text: "Developing a new nanomaterial with unique properties.", value: ["Nanosciences"] },
        { text: "Building an innovative prototype using sensors and microcontrollers.", value: ["Fast"] },
        { text: "Designing an eco-friendly system for sustainable living.", value: ["Think_Green"] },
        { text: "Creating a chip architecture that improves computing performance.", value: ["Chip_Design"] },
        { text: "Planning solutions for renewable energy and smart cities.", value: ["Infinity_Energy"] },
        { text: "Building an AI that makes predictions from real data.", value: ["INSIDE_AI"] },
        { text: "Training a model to mimic human reasoning.", value: ["WALL_E"] },
        { text: "Designing a self-driving or self-operating system.", value: ["Ultron"] }
      ]
    }
  ];

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const calculateResult = () => {
    let scores = { ...scoresTemplate };
    Object.values(answers).forEach((courseArray) => {
      courseArray.forEach((c) => {
        scores[c]++;
      });
    });
    const best = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );
    setResult(best);
  };

  if (result) {
    return (
      <div className="quiz-container result">
        <h1>Quiz Result</h1>
        <p>Your recommended course is:</p>
        <p className="result-course">{courseNames[result]}</p>
        <div className="result-buttons">
        <button
          className="button"
          onClick={() => {setResult(null); setAnswers({}); setCurrentQuestion(0);}}
        >
          Restart Quiz
        </button>

        <button
          className="button go-to-course"
          onClick={() => window.location.href = `/courses/${slugify(courseNames[result])}`}
        >
          Go to Course
        </button>
      </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const selectedValue = answers[currentQuestion] || [];

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Find the course that best suits you!</h1>
      <div className="question-box">
        <h3 className="question-text">{question.text}</h3>
        <div className="options-container">
          {question.options.map((opt, idx) => {
            const isSelected = selectedValue[0] === opt.value[0];
            return (
                <button
                    key={idx}
                    className={`option ${isSelected ? "selected" : ""}`}
                    onClick={() => handleAnswer(opt.value)}
                >
                    {opt.text}
                </button>
            );
})}
        </div>
      </div>

      <div className="navigation">
        <button className="button" onClick={prevQuestion} disabled={currentQuestion === 0}>Previous</button>
        <button className="button" onClick={nextQuestion} disabled={!answers[currentQuestion]}>
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>

      <p className="progress-text">Question {currentQuestion + 1} of {questions.length}</p>
    </div>
  );
}
