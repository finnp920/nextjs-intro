import { useState } from "react";

export default (Home) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Hi {counter}</h1>
      <button onClick={() => setCounter((prev) => ++prev)}>+</button>
    </div>
  );
};
