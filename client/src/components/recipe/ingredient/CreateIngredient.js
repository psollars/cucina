import React, { useState } from "react";

export default function() {
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState("tbsp");
  const [description, setDescription] = useState("");

  return (
    <>
      <label>
        Qty:
        <input
          value={quantity}
          type="number"
          onChange={e => setQuantity(e.target.value)}
        />
      </label>
      <label>
        Unit:
        <select value={unit} onChange={e => setUnit(e.target.value)}>
          <option value="tsp">tsp</option>
          <option value="tbsp">tbsp</option>
          <option value="cup">cup</option>
          <option value="ml">ml</option>
        </select>
      </label>
      <label>
        Description:
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>
    </>
  );
}
