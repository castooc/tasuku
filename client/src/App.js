// import basics
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

//import components
import GlobalStyle from "./styles/GlobalStyles";
import LoadingPage from "./components/LoadingPage"
import MainNav from "./components/MainNav"
import Home from "./pages/Home";
import Login from "./pages/Login";
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
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/tripForm" element={<TripForm />} />
        <Route path="/:tripId/details" element={<Details />} />
        <Route path="/:tripId/todo" element={<Todo />} />
        <Route path="/:tripId/budget" element={<Budget />} />
        <Route path="/:tripId/checklist" element={<Checklist />} />
        <Route path="/:tripId/weather" element={<Weather />} />
        <Route path="/:tripId/budget" element={<Budget />} />
        <Route path="*" element={<NotFound />} />
    </Routes>}
     
    </>
  );
};

export default App;