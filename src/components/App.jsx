import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// eslint-disable-next-line
import notes from "../notes.js";

function App() {
  const [items, setItems] = React.useState([]);

  function addItem(object) {
    setItems((preValue) => {
      return [...preValue, object];
    });
  }

  function removeItem(id) {
    setItems((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {items.map((noteItem, index) => (
        <Note
          key={index}
          index={index}
          title={noteItem.title}
          content={noteItem.content}
          remove={removeItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
