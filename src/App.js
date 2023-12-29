import './App.css';
import { Forecast } from './components/Forecast';
import Location from './components/Location';
import { Theme } from './components/Theme';
import { Weather } from './components/Weather';

function App() {
  return (
    <div className="min-h-screen font-poppins dark:bg-slate-900 pb-20">
      <Theme />
      <div className='text-center text-3xl sm:text-4xl font-bold py-5 text-indigo-600 dark:text-white'>Weather Search</div>
      <Location />
      <Weather />
      <Forecast />
    </div>
  );
}

export default App;
