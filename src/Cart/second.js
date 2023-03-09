//third.js is using promise and second.js uses async await 
//the app for testing is also pushed into the repo and is name kartfortesting
const { Builder, By, Key, until } = require("selenium-webdriver");

async function main() {
  let driver = new Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();
  await driver.get("http://localhost:3000/");
  
  setTimeout(() => {
    async function display() {
        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
              currentDate = Date.now();
            } while (currentDate - date < milliseconds);
          }
      const element = await driver.findElement(By.id("prodroute"));
      
      await element.click();
      const element2=await driver.findElement(By.id("add"));
      sleep(1000);
      await element2.click();
      sleep(1000);
      await element2.click();
      setTimeout(()=>{
          
          async function kartshow(){
            function sleep(milliseconds) {
                const date = Date.now();
                let currentDate = null;
                do {
                  currentDate = Date.now();
                } while (currentDate - date < milliseconds);
              }
            const element3= await driver.findElement(By.id("kartt"));
            await element3.click();
            const element4= await driver.findElement(By.id("add2"));
            await element4.click();
           
            await element4.click();
            await element4.click();
            
            await element4.click();
            const element5= await driver.findElement(By.id("remove"));
            await element5.click();
           
            const element6 = await driver.findElement(By.id("checkout"));
                await element6.click();
                sleep(2000);
            
            
        

          }
          kartshow()
          
                
      },2000);
      
     // await element.click();
     
      await driver.wait(until.titleIs("webdriver - Google Search"), 3000);
      await driver.quit();
    }
    display();
  }, 1500);
}


main();

