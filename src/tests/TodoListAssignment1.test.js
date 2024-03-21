import { test, describe } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoApp from '../components/TodoApp';

describe("#addTodo", () => {

    test('Add a new ToDo', () => {

        render(<TodoApp />);

        const descriptionInput = screen.getByLabelText('Description:');
        const dateInput = screen.getByLabelText('Date:');
        const addButton = screen.getByText('Add');

        fireEvent.change(descriptionInput, { target: { value: 'TEST' } });
        fireEvent.change(dateInput, { target: { value: '1970-01-01' } });
        fireEvent.click(addButton);

        // Date input and output are in different formats due to localization
        const todoDescription = screen.getByText('TEST');
        const todoDate = screen.getByText('01/01/1970');

        expect(todoDescription).toBeInTheDocument();
        expect(todoDate).toBeInTheDocument();
    });

});

describe("#removeTodo", () => {

    beforeEach(() => {
        render(<TodoApp />);

        const descriptionInput = screen.getByLabelText('Description:');
        const dateInput = screen.getByLabelText('Date:');
        const addButton = screen.getByText('Add');

        fireEvent.change(descriptionInput, { target: { value: 'TEST' } });
        fireEvent.change(dateInput, { target: { value: '1970-01-01' } });
        fireEvent.click(addButton);
    });

    test('Remove a ToDo', () => {
        const todoDescription = screen.getByText('TEST');
        const deleteButton = screen.getByText('Delete');

        fireEvent.click(deleteButton);

        expect(todoDescription).not.toBeInTheDocument();
    });

});