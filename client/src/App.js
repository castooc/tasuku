// import basics
import { Routes, Route } from "react-router-dom";

//import components
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header"
import Home from "./components/Home";
import Login from "./components/Login";
import Calendar from "./components/Calendar";
import Summary from "./components/Summary";
import TripForm from "./components/TripForm";
import Details from "./components/Details";
import Todo from "./components/Todo";
import Checklist from "./components/Checklist";
import Weather from "./components/Weather";
import Budget from "./components/Budget";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
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
      </Routes>
    </>
  );
};

export default App;