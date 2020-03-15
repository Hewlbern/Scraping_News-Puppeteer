//ANOTHERONE

const puppeteer = require('puppeteer');

const GetItems = async TopMoney => {

  //headless false for testing
  const browser = await puppeteer.launch({headless:false, defaultViewport: null})

  const page = await browser.newPage()
//document.querySelectorAll('div > div > article[data-testid="ResidentialCard"]')

  await page.goto(`https://www.realestate.com.au/buy/with-2-bedrooms-between-0-${encodeURI(TopMoney)}-in-melbourne+city+-+greater+region,+vic%3b/list-1?maxBeds=3`)

await page.waitForSelector('div > div > article[data-testid="ResidentialCard"]')
.then(() =>
page.evaluate(() => {
const ItemArray = [];
const ItemNodeList = document.querySelectorAll(
  'div > div > article[data-testid="ResidentialCard"]'
);
ItemNodeList.forEach(item => {
  const itemTitle = item.getAttribute("aria-label");
  const itemPrice = item.querySelector('div[data-testid="ResidentialCard"] > div');
  console.log(itemPrice);
})
})
)


.catch(() => console.log("Selector Error!"));


};
GetItems("550000");
  /*await page.goto('https://www.realestate.com.au/buy/in-melbourne+city+-+greater+region,+vic%3b/list-1')

	const result = await page.evaluate(() => {
 	  let Price = document.querySelectorAll('span.property-price').innerText
    return {
	    Price
	  }
  })

  console.log(result)

  browser.close()
}
*/