import React, { useState } from "react";
import { AddCatForm } from "./AddCatForm.jsx";

const initialCats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://www.si.edu/sites/default/files/styles/slide_constrain/public/newsdesk/press_releases/three_cheetahs.jpg?itok=4uFeScw4",
  },

  {
    id: 2,
    name: "Leopard",
    latinName: "Panthera pardus",
    image:
      "https://images.squarespace-cdn.com/content/v1/66ec3b49803ab81bf84f89e4/1737488319255-I9Y2KQ7FG8NLIZ15TZS0/Reno-Leopard-2025.jpg",
  },
  {
    id: 3,
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg",
  },
  {
    id: 4,
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg",
  },
  {
    id: 5,
    name: "Tiger",
    latinName: "Panthera tigris",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSFYa1ZXytHh_SUBsHYbnNyG00qOA1mpjLA&s",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image:
      "https://i0.wp.com/snowleopard.org/wp-content/uploads/2023/10/SnowLeopardTrust_Mongolia-6.jpg?fit=1716%2C965&ssl=1",
  },
];

export function BigCatsList() {
  const [cats, setCats] = useState(initialCats);

  const sortCats = () => {
    let sortedCats = [...initialCats].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCats(sortedCats); //update state
  };

  const filter = () => {
    let filteredCats = initialCats.filter((cats) =>
      cats.latinName.includes("Panthera")
    );
    setCats(filteredCats);
  };

  const reset = () => {
    let resetCats = [...initialCats];
    setCats(resetCats);
  };

  const handleAddCat = (newCat) => {
    const newCats = [...cats, { ...newCat, id: cats.length + 1 }];
    setCats(newCats);
  };

  const deleteCat = (catToRemoveId) => () => {
    const index = cats.findIndex((cat) => cat.id === catToRemoveId);
    console.log({ index });
    console.log({ catToRemoveId });

    if (index !== -1) {
      const newCats = cats.slice();
      newCats.splice(index, 1);
      setCats(newCats);
    }
  };

  <AddCatForm onAddCat={handleAddCat}></AddCatForm>;

  return (
    <div>
      {cats.map((cat) => (
        <div key={cat.id}>
          <h2>{cat.name}</h2>
          <p>
            <i>{cat.latinName}</i>
          </p>
          <img
            src={cat.image}
            alt={cat.name}
            style={{ height: "auto", width: "150px" }}
          />
          <button onClick={deleteCat(cat.id)}>Remove Cat</button>
        </div>
      ))}

      <button onClick={sortCats}>Sort List </button>
      <button onClick={filter}>Filter Panthera </button>
      <button onClick={reset}>Reset</button>
      <AddCatForm onAddCat={handleAddCat} />
    </div>
  );
}
