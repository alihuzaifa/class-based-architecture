import React from "react";

interface QuestionProps {
  questionText: string;
  options: string[];
  correctAnswer: string; // New prop for correct answer
  onAnswer: (answer: string) => void;
  disabled: boolean; // Prop to disable options
}

export class Question extends React.Component<QuestionProps> {
  handleOptionClick = (option: string) => {
    const { correctAnswer, onAnswer } = this.props;
    onAnswer(option);

    // Show alert for correct or wrong answer
    if (option === correctAnswer) {
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
  };

  render() {
    const { questionText, options, disabled } = this.props;

    return (
      <div className="p-4 border rounded shadow-md">
        <h2 className="text-lg font-semibold">{questionText}</h2>
        <ul className="mt-2">
          {options.map((option, index) => (
            <li key={index} className="my-1">
              <button
                className={`p-2 w-full text-left rounded ${
                  disabled
                    ? "bg-gray-300"
                    : "bg-blue-500 text-white hover:bg-blue-700"
                }`}
                onClick={() => !disabled && this.handleOptionClick(option)}
                disabled={disabled}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
