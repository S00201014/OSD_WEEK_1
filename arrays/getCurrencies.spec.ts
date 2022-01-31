import {getCurrencies} from './getCurrencies';

describe('Currency Array S00201014 Matthew Murphy', () => {
    it('it should include USD in the array', () => {
      expect(getCurrencies()).toContain('USD');
    });
    it('it should include GBP in the array', () => {
      expect(getCurrencies()).toContain('GBP');
    });
    it('it should include EUR in the array', () => {
      expect(getCurrencies()).toContain('EUR');
    });
  });