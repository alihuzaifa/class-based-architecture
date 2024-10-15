"use client";
import React from "react";
import { Question } from "./Question";

interface QuestionType {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizProps {
  questions: QuestionType[]; // Use the defined type here
}

interface QuizState {
  currentQuestionIndex: number;
  answers: string[];
  isOptionDisabled: boolean; // New state for disabling options
}

export class Quiz extends React.Component<QuizProps, QuizState> {
  constructor(props: QuizProps) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      answers: [],
      isOptionDisabled: false, // Initially, options are enabled
    };
  }

  handleAnswer = (answer: string) => {
    this.setState({
      answers: [...this.state.answers, answer],
      isOptionDisabled: true, // Disable options after selection
    });

    // Move to the next question after a short delay
    setTimeout(() => {
      this.setState((prevState) => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        isOptionDisabled: false, // Re-enable options for the next question
      }));
    }, 1000); // 1 second delay
  };

  render() {
    const { currentQuestionIndex, answers, isOptionDisabled } = this.state;
    const { questions } = this.props;

    return (
      <div className="max-w-lg mx-auto mt-10">
        {currentQuestionIndex < questions.length ? (
          <Question
            questionText={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            correctAnswer={questions[currentQuestionIndex].correctAnswer}
            onAnswer={this.handleAnswer}
            disabled={isOptionDisabled} // Pass disabled state
          />
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold">Quiz Completed!</h2>
            <p>Your Answers: {answers.join(", ")}</p>
          </div>
        )}
      </div>
    );
  }
}
