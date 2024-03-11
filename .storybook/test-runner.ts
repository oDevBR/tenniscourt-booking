const { injectAxe, checkA11y } = require('axe-playwright');

module.exports = {
  async preVisit(page, context) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    await checkA11y(page, '#storybook-root', {
      detailReport: true,
      detailReportOptions: {
        html: true,
      },
    });

    const accessibilityTree = await page.accessibility.snapshot();
    expect(accessibilityTree).toMatchSnapshot();
  },
};
