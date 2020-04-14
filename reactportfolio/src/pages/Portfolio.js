import React from "react";
import Header from "../components/Header/Header";

function Portfolio() {

  const projects = [
    {
      name: "Harry",
      image: "https://images.dog.ceo/breeds/vizsla/n02100583_10960.jpg"
    },
    {
      name: "Hermione",
      image: "https://images.dog.ceo/breeds/husky/n02110185_1511.jpg"
    }
  ];
  return (
    <div>
      <Header h1="My Portfolio" p="A portfolio of projects I've done so far" />
    </div>
  )
}

export default Portfolio;