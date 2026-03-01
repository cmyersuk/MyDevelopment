const puppeteer = require('puppeteer');

describe('File viewer', () => {
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

  test('has browse button', async () => {
    const button = await page.$('.browse-button');
    expect(button).not.toBeNull();
  });

  test('file input accepts .txt files only', async () => {
    const accept = await page.$eval('#txt-file-input', el => el.accept);
    expect(accept).toBe('.txt');
  });

  test('file panel is hidden initially', async () => {
    const display = await page.$eval('#file-panel', el => 
      window.getComputedStyle(el).display
    );
    expect(display).toBe('none');
  });
});
