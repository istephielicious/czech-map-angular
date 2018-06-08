import { CzechMapModule } from './czech-map.module';

describe('CzechMapModule', () => {
  let czechMapModule: CzechMapModule;

  beforeEach(() => {
    czechMapModule = new CzechMapModule();
  });

  it('should create an instance', () => {
    expect(czechMapModule).toBeTruthy();
  });
});
