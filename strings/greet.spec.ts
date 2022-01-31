import {greet} from './greet';

describe('greet S00201014 Matthew Murphy', () => {
    it('it should include the name in the message', () => {
        expect(greet('Frank')).toContain('Frank');
    });
});