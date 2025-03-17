import React from "react";

const Snowfall = () => {
  const snowflakes = Array.from({ length: 20 }, () => "✦"); // Exactly 20 snowflakes ❄️

  return (
    <div className="snowfall-container">
      {snowflakes.map((flake, index) => (
        <div key={index} className="snowflake">
          {flake}
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
