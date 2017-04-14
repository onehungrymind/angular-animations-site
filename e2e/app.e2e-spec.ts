import { AngularAnimationsSitePage } from './app.po';

describe('angular-animations-site App', function() {
  let page: AngularAnimationsSitePage;

  beforeEach(() => {
    page = new AngularAnimationsSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
