import React from "react";
import zxcvbn from "zxcvbn";

// from this video: https://www.youtube.com/watch?v=tIInwIlf13A -- got to 11:40 mark, not able to npm install bower or zxcvbn packages???!!

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const passwordScore = (testResult.score * 100) / 4;
  console.log(password, passwordScore); // score is 0-4

  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return "828282";
      case 1:
        return "#EA1111";
      case 2:
        return "#FF8000";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };

  const createPasswordLabel = () => {
    switch (testResult.score) {
      case 0:
        return "";
      case 1:
        return "Weak - easy to crack";
      case 2:
        return "Fair - you can do better";
      case 3:
        return "Good - just a bit better";
      case 4:
        return "Strong - nice job!";
      default:
        return "";
    }
  };

  const changePasswordColor = () => ({
    width: `${passwordScore}%`,
    background: progressColor(),
    height: "10px",
  });

  return (
    <>
      <div
        className="progress"
        style={{
          height: "10px",
          width: "150px",
          marginTop: "3px",
          marginLeft: "10px",
        }}
      >
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
      <p
        style={{
          color: progressColor(),
          display: "flex",
          marginLeft: "10em",
          fontSize: "12px",
        }}
      >
        {createPasswordLabel()}
      </p>
    </>
  );
};

export default PasswordStrengthMeter;
