import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PollCreator from './PollCreator';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { MemoryRouter } from 'react-router';

describe('PollCreator', () => {
    it('matches the snapshot when rendered', () => {
        const store = createStore(() => [], {}, applyMiddleware());
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <PollCreator />
                </Provider>
            </MemoryRouter>);
        expect(component).toMatchSnapshot();
    });

    it('will disable the submit button if an option input is not entered', () => {
        const store = createStore(() => [], {}, applyMiddleware());
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <PollCreator />
                </Provider>
            </MemoryRouter>);

        var textFieldOne = component.getByTestId('option-one-input');
        fireEvent.change(textFieldOne, { target: { value: 'First Option' } });
        var textFieldTwo = component.getByTestId('option-two-input');
        fireEvent.change(textFieldTwo, { target: { value: '' } });
        var submitButton = component.getByTestId('submit-button');
        expect(submitButton).toBeDisabled();
    });

    it('will enable the submit button if both options are entered', () => {
        const store = createStore(() => [], {}, applyMiddleware());
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <PollCreator />
                </Provider>
            </MemoryRouter>);

        var textFieldOne = component.getByTestId('option-one-input');
        fireEvent.change(textFieldOne, { target: { value: 'First Option' } });
        var textFieldTwo = component.getByTestId('option-two-input');
        fireEvent.change(textFieldTwo, { target: { value: 'Second Option' } });
        var submitButton = component.getByTestId('submit-button');
        expect(submitButton).toBeEnabled();
    });
});