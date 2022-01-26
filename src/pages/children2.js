import { useState } from "react";
export default function Children2() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>Children1 ------num: {num}</h1>
      <div>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setNum(num - 1);
          }}
        >
          +1
        </button>
      </div>
    </div>
  );
}

Children2.route = { path: "/details/children2" };
