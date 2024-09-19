// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components and context
import Header from "../Components/Header.js";
import AddContact from "../Components/AddContact.js";
import ContactList from "../Components/ContactList.js";
import ContactDetail from "../Components/ContactDetail.js";
import DeleteConfirmation from "../Components/DeleteConfirmation.js";
import EditContact from "../Components/EditContact.js";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext.js"; // Fixed the import path

function App() {
  useEffect(() => {
    // Side effects (if any)
  }, []);

  return (
    <div className="ui container" style={{ paddingTop: "60px" }}>
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/delete/:id" element={<DeleteConfirmation />} />{" "}
            <Route path="/edit/:id" element={<EditContact />} />
            <Route path="/contact/:id" element={<ContactDetail />} />{" "}
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
