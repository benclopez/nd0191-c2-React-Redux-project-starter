import * as React from 'react';
import { render } from '@testing-library/react';
import Page404 from './Page404';

describe('Page404', () => {
    it('matches the snapshot when rendered', () => {
        var component = render(
            <Page404 />
        );
        expect(component).toMatchSnapshot();
    });
});