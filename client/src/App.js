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
import ProjectForm from "./pages/ProjectForm";
import Details from "./pages/Details";
import Checklist from "./pages/Checklist";
import Weather from "./pages/Weather";
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
        <Route path="/projectForm" element={<AuthenticationGuard component={ProjectForm} />} />
        <Route path="/:tripId/details" element={<AuthenticationGuard component={Details} />} />
        <Route path="/:tripId/checklist" element={<AuthenticationGuard component={Checklist} />} />
        <Route path="/:tripId/weather" element={<AuthenticationGuard component={Weather} />} />
        <Route path="*" element={<NotFound />} />
    </Routes>}
  </>
  );
};

export default App;