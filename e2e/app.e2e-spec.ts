import { MerchantOnboardingPage } from './app.po';

describe('merchant-onboarding App', function() {
  let page: MerchantOnboardingPage;

  beforeEach(() => {
    page = new MerchantOnboardingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
