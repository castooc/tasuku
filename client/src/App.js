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

    //CREATE ROUTES AND SERVER API TO UPDATE THE NAMES WHEN CHANGED//
    //Cards to be able to change name and update names in the DB also

    //When click create project, create blank columns and add a project in the tab
    //when click project, the cards change accordingly

    // extra : add user image , description, urgency when click on the cards
    
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