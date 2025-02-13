import './App.css'
import Frontpage from './pages/frontpage/Frontpage'
import AppProvider from './AppProvider';

function App() {
  return (
	<AppProvider>
		<Frontpage/>
	</AppProvider>
  )
}

export default App
