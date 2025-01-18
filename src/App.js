import "./App.css";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Nav />
      <header className="App-header flex flex-col items-center justify-centerp-6 sm:p-10">
        <Main />
      </header>
    </div>
  );
}

export default App;

/**
 * 
<h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center">
  Welcome to the Responsive eBay Clone
</h1>
<p className="mt-4 text-sm sm:text-base text-gray-600 text-center max-w-2xl">
  This is a demonstration of a responsive header with Tailwind CSS.
  Resize the browser to see how the layout adapts.
</p>

*/
