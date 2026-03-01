const puppeteer = require('puppeteer');

describe('Landing page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('file://' + __dirname + '/../../index.html');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('shows rectangle with text', async () => {
    const text = await page.$eval('.name-box', el => el.textContent.trim());
    expect(text).toBe('chris myers');
  });
});
