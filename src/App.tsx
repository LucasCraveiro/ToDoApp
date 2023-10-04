import { useState } from "react";
import FormTodo from "./components/FormToDo";
import ListItem from "./components/ListItem";
import "./App.css";

export type Todo = {
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
      <FormTodo
        AddTodo={(e) => AddTodo(e)}
        updateState={(e) => updateState(e)}
        value={value}
        setValue={setValue}
        update={update}
        cancelUpdate={cancelUpdate}
      />
      <div className="list">
        {list?.map((item) => (
          <ListItem
            deleteItem={() => deleteItem(item.id)}
            item={item}
            updateItem={() => updateItem(item.id, item.text)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
