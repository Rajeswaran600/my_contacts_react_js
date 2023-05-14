import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import AddContactScreen from "./screens/AddContactScreen/AddContactScreen";
import ContactList from "./screens/ContactList/ContactList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/AddContact" element={<AddContactScreen />} />
        <Route path="/ContactList" element={<ContactList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
