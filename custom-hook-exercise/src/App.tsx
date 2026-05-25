import { useTime } from "./components/useTime";

const App = () => {
  // const day = useTime<string>("day");
  // const hour = useTime<string>("hour");
  const day = useTime("day");
  const hour = useTime("hour");
  return (
    <div>
      <h1>Custom Hooks</h1>
      <h3>Day: {day}</h3>
      <h3>Hour: {hour}</h3>
    </div>
  );
};

export default App;
