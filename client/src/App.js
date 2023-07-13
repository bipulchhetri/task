import AllUsers from "./Componets/AllUsers";
import AddUser from "./Componets/AddUser";
import EditUser from "./Componets/EditUser";
import Navbar from "./Componets/Navbar";
import NotFound from "./Componets/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
