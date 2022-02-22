import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const add = () => setCount((i) => i + 1);
    const subtract = () => setCount((i) => i - 1);

    return (
        <div className="container">
            <h1>React counter</h1>
            <div className="counter">
                <button onClick={subtract}>-</button>
                <pre>{count}</pre>
                <button onClick={add}>+</button>
            </div>
        </div>
    );
}
