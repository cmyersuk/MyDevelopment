const puppeteer = require('puppeteer');

describe('Side-by-side layout', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    // Set desktop viewport
    await page.setViewport({ width: 1280, height: 1024 });
    await page.goto('file://' + __dirname + '/../../index.html');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('main layout uses flexbox', async () => {
    const display = await page.$eval('.main-layout', el => 
      window.getComputedStyle(el).display
    );
    expect(display).toBe('flex');
  });

  test('left and right sections are present', async () => {
    const left = await page.$('.left-section');
    const right = await page.$('.right-section');
    expect(left).not.toBeNull();
    expect(right).not.toBeNull();
  });

  test('name box is in left section', async () => {
    const nameBox = await page.$('.left-section .name-box');
    expect(nameBox).not.toBeNull();
  });

  test('file panel is in right section', async () => {
    const filePanel = await page.$('.right-section #file-panel');
    expect(filePanel).not.toBeNull();
  });
});
