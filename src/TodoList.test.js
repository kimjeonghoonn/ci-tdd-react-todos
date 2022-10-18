import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe('<TodoList />', () => {
    const sampleTodos = [
        {
            id: 1,
            text: 'TDD 배우기', // 화면상에 보이는 내용
            done: false, // 밑줄 그어졌는가 안그어졌는가
        },
        {
            id: 2,
            text: 'react-testing-library', // 화면상에 보이는 내용
            done: true, // 밑줄 그어졌는가 안그어졌는가
        }
    ];
    it('has two todos', () => {
        const { getByText } = render(<TodoList todos={sampleTodos} />);
        getByText(sampleTodos[0].text);
        getByText(sampleTodos[1].text);
    });

    it('calls onToggle and onRemove', () => {
        const onToggle = jest.fn();
        const onRemove = jest.fn();
        const {getByText, getAllByText} = render(<TodoList todos={sampleTodos}
            onToggle={onToggle} onRemove={onRemove} />);
        fireEvent.click(getByText(sampleTodos[0].text));
        expect(onToggle).toBeCalledWith(sampleTodos[0].id);
        fireEvent.click(getAllByText('삭제')[0]);
        expect(onRemove).toBeCalledWith(sampleTodos[0].id);
    });
});