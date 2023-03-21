import { useEffect, useId, useState } from "react";
import { ToDoList } from "./components/ToDoList";
import ToDoListLearn from "./pages/ToDoListLearn";
import Contact from "./pages/ContactPage";
import ContactPage from "./pages/ContactPage";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      {/* <ToDoListLearn /> */}
      {/* <ContactPage /> */}
      <Register />
    </div>
  );
}

export default App;
