import * as React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { MemoryRouter } from 'react-router';

describe('NavBar', () => {
    it('matches the snapshot when rendered', () => {
        const store = createStore(() => [], {}, applyMiddleware());
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <NavBar />
                </Provider>
            </MemoryRouter>);
        expect(component).toMatchSnapshot();
    });
});