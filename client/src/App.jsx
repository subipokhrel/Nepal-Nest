// Import the CSS file for styling the App component
import './App.css';

// Import the Navbar component to be used in the App component
import Navbar from './components/navbar';

// Define the App component as a functional component
function App() {
  return (
    // Main container for the App component
    <div className="App">
      {/* Render the Navbar component */}
      <Navbar />

      {/* Main heading of the application */}
      <h1>Welcome to Nepal Nest</h1>
    </div>
  );
}

// Export the App component so it can be used in other files
export default App;
