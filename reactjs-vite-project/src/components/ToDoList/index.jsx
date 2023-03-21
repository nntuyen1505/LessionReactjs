import { useState } from "react";
import styled from "styled-components";

const TodoListStyle = styled.div`
  .input-group {
    display: flex;
    border: 1px solod #ccc;
    height: 40px;
    input {
      flex: 1;
      padding: 0 10px;
      outline: none;
    }
    button {
      padding: 0 10px;
      background: #ccc;
      &:disabled {
        opacity: 0.2;
        cursor: no-drop;
      }
    }
  }

  .list-board {
    display: flex;
    gap: 30px;
    .board {
      flex: 1;
      .title: {
        font-size: 30px;
        margin: 20px 0 20px 0;
        font-weight: bold;
      }
      .items {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`;

export const ToDoList = ({
  toDoList,
  onAdd,
  onCompleted,
  onDelete,
  onEdited,
}) => {
  const [value, setValue] = useState("");
  const listDoing = toDoList.filter((e) => !e.isCompleted);
  const listDone = toDoList.filter((e) => e.isCompleted);

  const _onAdd = () => {
    onAdd(value.trim());
    setValue("");
  };

  const onKeyUp = (ev) => {
    if (ev.key === "Enter") {
      _onAdd();
    }
  };

  return (
    <TodoListStyle>
      <div className="input-group">
        <input
          onKeyUp={onKeyUp}
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          placeholder="Công việc ...."
        />
        <button disabled={!value.trim()} onClick={_onAdd}>
          Thêm
        </button>
      </div>
      <div className="list-board">
        <div className="board">
          <div className="title">Công việc đang làm</div>
          <div className="items">
            {listDoing.map((e) => (
              <ToDoItem
                key={e.id}
                {...e}
                onCompleted={onCompleted}
                onDelete={onDelete}
                onEdited={onEdited}
                toDoList={toDoList}
              />
            ))}
          </div>
        </div>

        <div className="board">
          <div className="title">Công việc đã hoàn thành</div>
          <div className="items">
            {listDone.map((e) => (
              <ToDoItem key={e.id} {...e} onDelete={onDelete} />
            ))}
          </div>
        </div>
      </div>
    </TodoListStyle>
  );
};

const ToDoItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  input {
    width: 40%;
  }
  .name {
    flex: 1;
  }
  button {
    border: 1px solid #ccc;
    padding: 0 10px;
    background: #ccc;
  }
  .btn-action {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  &.isCompleted {
    background: #eee;
    .none {
      display: none;
    }
    .name {
      text-decoration: line-through;
    }
  }

  &.isEdited {
    display: none;
  }
`;

const ToDoItem = ({
  id,
  name,
  isCompleted,
  onCompleted,
  onDelete,
  onEdited,
  toDoList,
}) => {
  const [hidenInput, setHidenInput] = useState(false);

  const valueCurrent = name;
  const [valueEdit, setValueEdit] = useState(valueCurrent);
  const _onEdit = () => {
    setHidenInput((prev) => !prev);
  };

  const _handleChange = (e) => {
    setValueEdit(e.target.value);
  };

  const onUpdateValue = () => {
    const task = toDoList.some((e) => e.name === valueEdit);
    if (task) {
      alert("Tên nhiệm vụ đã tồn tại!");
      return;
    }
    onEdited(id, valueEdit);
    setHidenInput((prev) => !prev);
  };
  return (
    <ToDoItemStyle className={isCompleted ? "isCompleted" : ""}>
      {!hidenInput && <div className="name">{name}</div>}

      {hidenInput && (
        <div style={{ width: "80%" }}>
          <input value={valueEdit} onChange={(e) => _handleChange(e)}></input>
          <button onClick={onUpdateValue}>✓</button>
        </div>
      )}

      <div className="btn-action">
        <button className="none" onClick={() => onCompleted(id)}>
          ✅
        </button>
        <button onClick={() => onDelete(id)}>❌</button>
        <button className="none" onClick={() => _onEdit()}>
          📝
        </button>
      </div>
    </ToDoItemStyle>
  );
};
