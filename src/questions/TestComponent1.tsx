import React from "react";

const TestComponent1: React.FC = () => {
  const [count, setCount] = React.useState(1);

  const handleCount = () => {
    setCount(count + 1);
    // === TEST === What's the output?
    console.log(count);

    setCount(count + 1);
    // === TEST === What's the output?
    console.log(count);
  };

  return (
    <div>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export { TestComponent1 };
