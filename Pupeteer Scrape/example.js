const puppeteer = require("puppeteer");

const GetItems = async () => {
  // Selector for scraping
  //"div.details";
  //'div>div> div[data-toggle="tooltip"]';
  //'ul.product-listing';
  //name 'a.name';
  //headless false for testing

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  //product-listing product-grid category-sale
  //`x/c/sale?sort=xyxy-desc&itemsPerPage=120#`
  // const page = `xxx`
  await page.goto( `xxx`
    
  );

  const itemList = await page
    .waitForSelector('div[class="prod-square-tile-content"')
    .then(() =>
      page.evaluate(() => {
        const ItemArray = [];
// 'div[class = "row product-item-content"'
        const ItemNodeList = document.querySelectorAll('div[class="prod-square-tile-content"');
        console.log(ItemNodeList);

        ItemNodeList.forEach(item => {
          // takes product name from selector.
          const itemName = item.querySelector('div.row.product-item-content >div.details.col-md-6.col-xs-6 >a.name').getAttribute("title");
          // console.log(itemName);
          const itemvar1 = item.querySelector(
            "div.promotion >div > div > div"
          ).innerText.replace(/\D/g, '');

          const itemURL = `x${item
            .querySelector("div.row.product-item-content >div.details.col-md-6.col-xs-6 >a.name")
            .getAttribute("href")}`;
          // console.log(itemURL);

          const imageURL = `x${item
            .querySelector("div.row.product-item-content >div.thumb-container.col-md-6.col-xs-6 >a>img")
            .getAttribute("src")}`;
          // console.log(productURL);

          const itemUnitPrice = item.querySelector("div.row.product-item-content >div.details.col-md-6.col-xs-6 > div>div.price")
            .innerText;
          // console.log(itemUnitPrice);

          const itemCasePrice = item.querySelector(
            "div.row.product-item-content >div.details.col-md-6.col-xs-6 > div >div.case-container>div>label>span.number"
          ).innerText;
          // console.log(itemCasePrice);

          const itemCaseAmount = item.querySelector(
            'div.row.product-item-content >div.details.col-md-6.col-xs-6 > div > div.case-container>div>label>span[id="casePriceText"'
          ).innerText.replace(/\D/g, '');
          // console.log(itemCaseAmount);

          const itemvar2 = item.querySelector(
            "div.row.product-item-content >div.details.col-md-6.col-xs-6 > div > div.wasprice-widget> div>label>span.number"
          ).innerText.replace(/\D/g, '');
          // console.log(x);
          // // pushes the variables above into the array set above.

          const stock = 27 ;
          
          ItemArray.push({
            Name : itemName,
            ProductURL : itemURL,
            imageURL,
            itemvar1,
            itemUnitPrice,
            itemCasePrice,
            itemCaseAmount,
            itemvar2,
            stock
            
          });
          
          
        })
         return ItemArray;
      })
    )
    .catch(() => console.log("Selector Error!"));
     return itemList;
};



const initScraper = async() =>{

  const items = await GetItems();
  console.log(items);

}

initScraper();
