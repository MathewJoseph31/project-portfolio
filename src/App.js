import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Bottom from "./components/Bottom";
import BioData from "./components/BioData";
import Publication from "./components/Publication";
import Project from "./components/Project";

import "./css/App.css";

function App() {
  const [categories] = useState([
    {
      name: "about Me",
      description:
        "I am senior software engineer based in Syracuse, NY, USA. I love problem solving using programming languages. technologies such as HTML, CSS, Javascript, React JS",
    },
    { name: "projects", description: "Projects description" },
    { name: "publication", description: "Publications" },
    { name: "contact", description: "Contact description" },
    {
      name: "resume",
      description: "My bio data",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <header className="AppHeader">
        <h1>Dr. Mathew Joseph, PhD</h1>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
      </header>
      <section>
        {currentCategory.name === "about Me" && <About />}
        {currentCategory.name === "projects" && <Project />}
        {currentCategory.name === "contact" && <ContactForm />}
        {currentCategory.name === "publication" && <Publication />}
        {currentCategory.name === "resume" && <BioData />}
      </section>
      <footer>
        <Bottom
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
      </footer>
    </div>
  );
}

export default App;
