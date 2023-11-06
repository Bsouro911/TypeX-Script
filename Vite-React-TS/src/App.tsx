// import Counter from "./components/Counter";
// import Heading from "./components/Heading";
// import Section from "./components/Section";
// import { useState, useEffect, useCallback, useMemo } from "react";
// import List from "./components/List";

// interface User {
//   id: number;
//   name: string;
// }
import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";

function App() {
  // const [count, setCount] = useState<number>(0);
  // const [users, setUsers] = useState<User[] | null>(["souro"]);
  // useEffect(() => {
  //   console.log("mounting");
  //   // console.log("Users", users);

  //   return () => {
  //     console.log("unmounting");
  //   };
  // }, [users]);

  // const add = useCallback((): void => setCount((prev) => prev + 1), []);

  return (
    <>
      {/* <Heading title={"souro"} />
      <Section title={"This is my title"}>This is my section</Section>
      <Counter setCount={setCount}>Count is: {count} </Counter>
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="bold">{item}</span>}
      /> */}
      {/* <div>
        <p>{count}</p>
        <button onClick={add}>+</button>
      </div> */}
      {/* <p>{users}</p> */}
      {/* <Counter>{(num: number) => <>Current Count: {num}</>}</Counter> */}
      <CounterProvider>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  );
}

export default App;
