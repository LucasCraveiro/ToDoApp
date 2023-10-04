import { useState } from "react";

import "./App.css";

type Todo = {
  id: string;
  text: string;
};

function App() {
  const [list, setList] = useState<Todo[]>([]);
  const [value, setValue] = useState<string>("");
  const [update, setUpdate] = useState<{ id: string; text: string } | null>(
    null
  );

  const AddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setList([{ id: `${self.crypto.randomUUID()}`, text: value }, ...list]);
    setValue("");
  };

  const deleteItem = (itemID: string) => {
    setList(list.filter((item) => item.id !== itemID));
  };

  const updateItem = (itemID: string, itemText: string) => {
    setUpdate({ id: itemID, text: itemText });
    setValue(itemText);
  };

  const updateState = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setList((prevList) =>
      prevList.map((item) =>
        item.id === update?.id ? { ...item, text: value } : item
      )
    );

    setUpdate(null);
    setValue("");
  };

  const cancelUpdate = () => {
    setUpdate(null);
    setValue("");
  };

  return (
    <>
      <h1>ToDo List</h1>
      <form className="Addform" onSubmit={update ? updateState : AddTodo}>
        <input
          type="text"
          className="inputAdd"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add">{update ? "Update" : "Add"}</button>
        {update && (
          <button className="cancel" onClick={() => cancelUpdate()}>
            Cancel
          </button>
        )}
      </form>
      <div className="list">
        {list?.map((item) => (
          <div className="card" key={item.id}>
            <h3 className="text">{item.text}</h3>
            <div className="button_wrapper">
              <button className="delete" onClick={() => deleteItem(item.id)}>
                Delete
              </button>
              <button
                className="edit"
                onClick={() => updateItem(item.id, item.text)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
