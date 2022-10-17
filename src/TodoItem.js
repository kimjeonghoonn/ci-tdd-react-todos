import React from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
    const {id, text, done} = todo;
    return (
    <li>
        <span
            style={{
                textDecoration: done ? 'line-through' : 'none' // 삼항연산자
            }}
            onClick={() => onToggle(id)}>{text}</span>
        <button onClick={() => onRemove(id)}>삭제</button>
    </li>);
};
export default TodoItem;