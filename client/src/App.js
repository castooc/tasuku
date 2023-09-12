// import basics
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

//import components
import GlobalStyle from "./styles/GlobalStyles";
import LoadingPage from "./components/LoadingPage"
import { AuthenticationGuard } from "./features/authentification/components/AuthentificationGuard";
import MainNav from "./components/MainNav"
import Home from "./pages/Home";
import About from "./pages/About"
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const App = () => {
  const { isLoading } = useAuth0();

  return (
    <>
      <GlobalStyle />
      <MainNav />
      {isLoading
      ? < LoadingPage /> 
      : 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<AuthenticationGuard component={Profile} />} />
        <Route path="/projects" element={<AuthenticationGuard component={Projects} />} />
        <Route path="*" element={<NotFound />} />
    </Routes>}
  </>
  );
};

export default App;