//when we give url of a product in bg puppteer it will extract the data from the url and update  it in the database
import puppeteer from 'puppeteer'
import  cheerio  from 'cheerio';
let browser;
let page;

const ini = async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
}
const urlNameExtractor = async (url) => {
   const res= await page.goto(url);
    // const data = await page.evaluate(() => document.querySelector('*').outerHTML);
    // const dom = parse(data);
    // let name = dom.querySelector('.product-title-word-break').innerHTML;
    // name = name.trim();
    // return name;

    const $=cheerio.load(res.data);
    const name=$(".B_NuCI").text();
    // console.log(name);
    return name;
}

const urlValueExtractor = async (url) => {
   const res= await page.goto(url);
    const $=cheerio.load(res.data);
    const priceText=$(".aMaAEs .dyC4hf .CEmiEU ._16Jk6d").text();
   const price= parseInt(priceText.replace(/[^0-9]/g, "").replace(/,/g, ""));
    // console.log(name);
    return price;
//     const data = await page.evaluate(() => document.querySelector('*').outerHTML);
//     const dom = parse(data);
//   const price = parseInt(
//     (
//       dom.querySelector(".a-price-whole") ||
//       dom.querySelector(".priceBlockDealPriceString")
//     ).innerHTML
//       .slice(1)
//       .split(".")[0]
//       .split(",")
//       .join("")
//   );
//     return price;
}

const close = async () => {
    await browser.close();
}

exports.ini = ini;
exports.urlNameExtractor = urlNameExtractor;
exports.urlValueExtractor = urlValueExtractor;
exports.close = close;