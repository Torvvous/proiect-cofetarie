import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import ShoppingCart from "./pages/ShoppingCart";
import UserForm from "./pages/UserForm";
import Signup from "./pages/Signup";
import Gallery from "./pages/Gallery";
import Credits from "./pages/Credits";

function App() {
  return (
    <HashRouter>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/meniu"
            element={
              <>
                <Menu />
              </>
            }
          />
          <Route
            path="/despre-noi"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/cumparaturi"
            element={
              <>
                <ShoppingCart />
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <UserForm />
              </>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          ></Route>
          <Route
            path="/galerie"
            element={
              <>
                <Gallery />
              </>
            }
          ></Route>
          <Route
            path="/credite"
            element={
              <>
                <Credits />
              </>
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </HashRouter>
  );
}

export default App;
