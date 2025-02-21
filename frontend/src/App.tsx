import './App.css'
import Frontpage from './pages/frontpages/Frontpage'
import AllBlogs from './pages/frontpages/AllBlogs'
import ShowBlog from './pages/frontpages/ShowBlog'
import Login from './pages/account/Login'
import AppProvider from './AppProvider';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
	<AppProvider>
		<Header/>
		<div className="body">
			<BrowserRouter>
				<Routes>
					<Route path="" element= {<Frontpage />} />
					<Route path="/blog" element= {<AllBlogs />} />
					<Route path="/blog/:blog" element= {<ShowBlog />} />
					<Route path="/login" element= {<Login />} />
				</Routes>
			</BrowserRouter>
			</div>
		<Footer/>
	</AppProvider>
  )
}

export default App
