const puppeteer = require('puppeteer');
(async () => {
const browser = await puppeteer.launch({
headless: true,
args: ['--no-sandbox']
});
const page = await browser.newPage();
await page.goto('https://www.livechart.me/anime/9733');
await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]");
let elHandle = await page.$x("/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]");
let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
console.log(asasa,'days');
await browser.close()
})();
