import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [isHidden, setIsHidden] = React.useState(true);

  function handler(event) {
    // Destructure event Object to get name & value
    const { name, value } = event.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  }

  function addTask(e) {
    const newTask = {
      title: title,
      content: content,
    };
    props.addItem(newTask);

    setTitle("");
    setContent("");

    /* IMPORTANT prevent default reload behaviour*/
    e.preventDefault();
  }

  function renderDescription() {
    setIsHidden(!isHidden);
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handler}
          onClick={renderDescription}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handler}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          hidden={isHidden ? true : false}
        />
        <Zoom in={true}>
          <Fab onClick={addTask}>
            <AddIcon />
          </Fab>
        </Zoom>
        {/*
        <button onClick={addTask}>
          <AddIcon />
        </button>
        */}
      </form>
    </div>
  );
}

export default CreateArea;
