import Todo from "./components/Todo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-[#555555]">
        <h2 className="text-white text-center pt-20 text-2xl tracking-wider">
          Today's TODO Tasks
        </h2>
        <Todo />
        <Todos />
      </div>
    </>
  );
}

export default App;
