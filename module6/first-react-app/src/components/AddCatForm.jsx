import { useState } from "react";

export function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ name, latinName, image });
  };

  return (
    <div className="AddCatForm">
      <form onSubmit={handleSubmit}>
        <label>
          Cat Name:
          <input
            name="catName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Cat Species:
          <input
            name="latinName"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </label>
        <label>
          Cat Image URL:
          <input
            name="catImage"
            value={image}
            onChange={(e) => {
              const { value } = e.target;
              if (value.includes("https")) {
                setImage(value);
              } else {
                alert("The input must contain a valid URL.");
              }
            }}
          />
        </label>
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}
