import { GeekToolsAngularPage } from './app.po';

describe('geek-tools-angular App', function() {
  let page: GeekToolsAngularPage;

  beforeEach(() => {
    page = new GeekToolsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
