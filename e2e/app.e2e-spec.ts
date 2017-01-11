import { MeanangulartodosPage } from './app.po';

describe('meanangulartodos App', function() {
  let page: MeanangulartodosPage;

  beforeEach(() => {
    page = new MeanangulartodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
