import { Changedetectiondemo2Page } from './app.po';

describe('changedetectiondemo2 App', () => {
  let page: Changedetectiondemo2Page;

  beforeEach(() => {
    page = new Changedetectiondemo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
