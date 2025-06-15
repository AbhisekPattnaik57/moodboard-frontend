import React, { useState } from "react";

const AddTask = ({ onTaskAdded }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!author || !text || !category) {
      alert("Please fill all fields");
      return;
    }

    const newQuote = { author, text, category };
    fetch("http://localhost:8080/api/quotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuote),
    })
      .then(() => {
        onTaskAdded(); // Refresh task list
        setAuthor("");
        setText("");
        setCategory("");
      })
      .catch((err) => console.error("Failed to add quote:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Quote</h2>

      <label>Author:</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="e.g. Steve Jobs"
      />

      <label>Text:</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="e.g. Stay hungry, stay foolish"
      />

      <label>Category:</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="e.g. Motivation"
      />

      <button type="submit">Add Quote</button>
    </form>
  );
};

export default AddTask;
