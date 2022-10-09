import './App.css';
import Nabvar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';

function App() {
	return (
		<div className="App">
			<Nabvar />
			<Welcome name="BebidasNow" />
		</div>
	);
}

export default App;
