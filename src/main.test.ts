import {helloWorldFixture} from '../test/fixtures/helloWorldFixture.js';

it('works!', () => {
    const state = helloWorldFixture()
    expect(state).toBe('Hello, world!');
});
