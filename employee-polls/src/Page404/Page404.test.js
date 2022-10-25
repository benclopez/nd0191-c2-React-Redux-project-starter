import * as React from 'react';
import { render } from '@testing-library/react';
import Page404 from './Page404';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { MemoryRouter } from 'react-router';

describe('Page404', () => {
    it('matches the snapshot when rendered', () => {
        const store = createStore(() => [], {}, applyMiddleware());
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Page404 />
                </Provider>
            </MemoryRouter>);
        expect(component).toMatchSnapshot();
    });
});