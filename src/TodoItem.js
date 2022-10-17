import React from "react";

const TodoItem = ({todo}) => {
    const {id, text, done} = todo;
    return (
    <li>
        <span
            style={{
                textDecoration: done ? 'line-through' : 'none' // 삼항연산자
            }}>{text}</span>
        <button>삭제</button>
    </li>);
};
export default TodoItem;