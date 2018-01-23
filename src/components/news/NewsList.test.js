import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NewsList from './NewsList';

function setup() {
    let props = {
        news: []
    };
    let renderer = TestUtils.createRenderer();
    renderer.render(<NewsList {...props}/>);
    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}
describe('Testing NewsList Component', () => {
    it('Renders list of news',() => {
        const { output } = setup();
        expect(output.type).toBe('table');
    });

});