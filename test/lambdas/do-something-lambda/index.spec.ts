import { expect } from 'chai';
import { validateData } from '../../../src/app/lambdas/do-something-lambda/handler-validators';
import { getSomeDataFromExternalService } from '../../../src/app/lambdas/do-something-lambda/handler-services';
import { applyRule } from '../../../src/app/lambdas/do-something-lambda/handler-rules';

describe('do-something-lambda', () => {
  before('', () => {

  });
  beforeEach('', () => {
    
  });
  after('', () => {
    
  });
  afterEach('', () => {
    
  });
  context('validation', () => {
    it('should return true', async ()=> {
      const result = await validateData("exits");
      expect(result).is.true;
    });
  });
  context('service', () => {
    it('should return data with filter', async ()=> {
      const data = "directory";
      const expected = {
        data,
      }
      const result = await getSomeDataFromExternalService(data);
      expect(result).is.deep.eq(expected);
    });
  });
  context('rule', () => {
    it('should not throw an exception', async ()=> {
      const data = "directory";
      expect(await applyRule(data)).to.not.have.throw;
    });
  });
})