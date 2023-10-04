import "../App.css";

type Props = {
  AddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  update: { id: string; text: string } | null;
  cancelUpdate: () => void;
  value: string;
  setValue: (value: string) => void;
  updateState: (e: React.FormEvent<HTMLFormElement>) => void;
};
function FormTodo({
  AddTodo,
  update,
  cancelUpdate,
  value,
  setValue,
  updateState,
}: Props) {
  return (
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
  );
}

export default FormTodo;
