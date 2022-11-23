import React, { useState } from "react";
import Modal from "../Modal";
import Card from "../Card";

const cards = [
  {
    key: "first",
    image:
      "https://cdn-3.convertexperiments.com/uf/1002628/10025029/1605083565guarantee.png",
    title: "10 Years Warranty",
    content:
      "All our garbage doors, components and accessories - other than batteries, bulbs or fuses - include a one to ten year warranty.",
  },
  {
    key: "second",
    image:
      "https://cdn-3.convertexperiments.com/uf/1002628/10025029/1605083627sixty.png",
    title: "60 years of innovation.",
    content:
      "We have been innovating garbage doors since 1956, where we have grown to be Australia's original and most trusted garbage door brand.",
  },
  {
    key: "third",
    image:
      "https://cdn-3.convertexperiments.com/uf/1002628/10025029/1605083662australia.png",
    title: "Australia owned and designed.",
    content:
      "All our garbage doors and openers are designed here is Australia using premium, custom designed components.",
  },
];

const HomePage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="home-page">
      <div className="header">
        <h2>Australia's most secure & trusted garbage door brand.</h2>
        <p>
          We know that behind your garbage door are the things that matter to
          you most. The things that make your house a home. Most garbage doors
          just close but a B&D garbage door can be locked.
        </p>
      </div>
      <div className="middle-container">
        {cards.map(({ image, title, content }) => (
          <Card image={image} title={title} content={content} />
        ))}
      </div>
      <button onClick={() => setVisible(true)}>
        Our range of garbage doors
      </button>
      <Modal visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default HomePage;
