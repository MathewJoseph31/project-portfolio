import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/ContactForm";

function App() {
  const [categories] = useState([
    {
      name: "about Me",
      description:
        "I am senior software engineer based in Syracuse, NY, USA. I love problem solving using programming languages. technologies such as HTML, CSS, Javascript, React JS",
    },
    { name: "portfolio", description: "Portfolio description" },
    { name: "contact", description: "Contact description" },
    {
      name: "resume",
      description: "My bio data",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <header>
        <h1>Mathew Joseph</h1>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
      </header>
      <section>
        {currentCategory.name === "about Me" && <About />}
        {currentCategory.name === "contact" && <ContactForm />}
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
