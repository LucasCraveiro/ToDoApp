import "../App.css";
import { Todo } from "../App";

type ListProps = {
  item: Todo;
  deleteItem: (id: string) => void;
  updateItem: (id: string, text: string) => void;
};

function ListItem({ item, deleteItem, updateItem }: ListProps) {
  return (
    <div className="card" key={item.id}>
      <h3 className="text">{item.text}</h3>
      <div className="button_wrapper">
        <button className="delete" onClick={() => deleteItem(item.id)}>
          Delete
        </button>
        <button className="edit" onClick={() => updateItem(item.id, item.text)}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default ListItem;
