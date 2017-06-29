import { MysiteAngularPage } from './app.po';

describe('mysite-angular App', () => {
  let page: MysiteAngularPage;

  beforeEach(() => {
    page = new MysiteAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
