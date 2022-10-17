import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe('<TodoItem />', () => {
    const sampleTodo ={
        id: 1,
        text: 'TDD 배우기', // 화면상에 보이는 내용
        done: false, // 밑줄 그어졌는가 안그어졌는가
    };
    const setup = (props ={}) => {
        const utils = render(<TodoItem todo={sampleTodo} {...props} />);
        const { getByText } = utils;
        const todo = sampleTodo;
        const span = getByText(todo.text);
        const button = getByText('삭제');
        return {
            ...utils,
            span,
            button,
        };
    };
    it('has span and button', () => {
        const {span, button} = setup();
        expect(span).toBeTruthy();
        expect(button).toBeTruthy();
    });
});