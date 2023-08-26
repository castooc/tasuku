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
import Calendar from "./pages/Calendar";
import Summary from "./pages/Summary";
import TripForm from "./pages/TripForm";
import Details from "./pages/Details";
import Todo from "./pages/Todo";
import Checklist from "./pages/Checklist";
import Weather from "./pages/Weather";
import Budget from "./pages/Budget";
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
        <Route path="/summary" element={<AuthenticationGuard component={Summary} />} />
        <Route path="/calendar" element={<AuthenticationGuard component={Calendar} />} />
        <Route path="/tripForm" element={<AuthenticationGuard component={TripForm} />} />
        <Route path="/:tripId/details" element={<AuthenticationGuard component={Details} />} />
        <Route path="/:tripId/todo" element={<AuthenticationGuard component={Todo} />} />
        <Route path="/:tripId/budget" element={<AuthenticationGuard component={Budget} />} />
        <Route path="/:tripId/checklist" element={<AuthenticationGuard component={Checklist} />} />
        <Route path="/:tripId/weather" element={<AuthenticationGuard component={Weather} />} />
        <Route path="/:tripId/budget" element={<AuthenticationGuard component={Budget} />} />
        <Route path="*" element={<NotFound />} />
    </Routes>}
  </>
  );
};

export default App;