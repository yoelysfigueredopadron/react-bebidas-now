import './App.css';
import Nabvar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
	return (
		<div className="App">
			<Nabvar />
			<ItemListContainer name="BebidasNow" />
		</div>
	);
}

export default App;
