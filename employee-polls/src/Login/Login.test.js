import * as React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { MemoryRouter } from 'react-router';

describe('NavBar', () => {
    it('matches the snapshot when rendered', () => {
        const store = createStore(() => [], {}, applyMiddleware());
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>);
        expect(component).toMatchSnapshot();
    });
});