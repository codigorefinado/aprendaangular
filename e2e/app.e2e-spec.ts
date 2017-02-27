import { AprendaangularPage } from './app.po';

describe('aprendaangular App', () => {
  let page: AprendaangularPage;

  beforeEach(() => {
    page = new AprendaangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
