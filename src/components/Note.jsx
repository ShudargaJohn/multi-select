import { useState } from "react";

export const Note = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const addValue = () => {
    const note = {
      id: Math.floor(Math.random() * 100),
      text: inputValue,
    };
    setInputValue("");
    setData([...data, note]);
  };
  const deleteValue = (id) => {
    const filteredData = data.filter((note) => note.id !== id);
    setData(filteredData);
  };
  onkeydown = (event) => {
    if (event.key === "Enter") {
      addValue();
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter your note"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button onClick={() => addValue(inputValue)}>add note</button>

      {data.map((note) => {
        return (
          <div>
            <p>{note.id}</p>
            <p>{note.text}</p>
            <button onClick={() => deleteValue(note.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};
