import './App.css'
import Frontpage from './pages/frontpage/Frontpage'
import Login from './pages/account/Login'
import AppProvider from './AppProvider';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
	<AppProvider>
		<Header/>
		<BrowserRouter>
			<Routes>
				<Route path="" element= {<Frontpage />} />
				<Route path="/login" element= {<Login />} />
			</Routes>
		</BrowserRouter>
		<Footer/>
	</AppProvider>
  )
}

export default App
