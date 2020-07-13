const puppeteer = require('puppeteer');
(async () => {
const browser = await puppeteer.launch({
headless: true,
args: ['--no-sandbox']
});
const page = await browser.newPage();
await page.goto('https://www.livechart.me/anime/9733');
await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]");
await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]");
await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]");
await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
let elHandle = await page.$x("/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]");
let deHandle = await page.$x("/html/body/div[3]/div/div[2]/div[2]/div[1]")
let ebHandle = await page.$x("/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]")

let esHandle = await page.$x("/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]")

let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
let asasa = await page.evaluate(el => el.textContent, elHandle[0]);

let bsbsb = await page.evaluate(ed => ed.textContent,ebHandle[0]);

let cscsc = await page.evaluate(es => es.textContent,esHandle[0]);

console.log(asasa,'days');
console.log(bsbsb, 'hours');
console.log(cscsc, 'minutes');
console.log(scdsf)
await browser.close()
})();
