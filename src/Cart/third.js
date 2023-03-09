const webdriver = require('selenium-webdriver');
//let driver = new webdriver.Builder().forBrowser('firefox').build();
let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().window().maximize();
driver.manage().deleteAllCookies();
driver.get("http://localhost:3000/")
        .then(()=>{
            driver.findElement(webdriver.By.id("prodroute"))
                .then((element)=>{
                    setTimeout(()=>{
                
                        console.log("opened !!!");
                        element.click()
                        .then(()=>{
                            driver.findElement(webdriver.By.id("add"))
                            .then((element)=>{
                             element.click().then(()=>{
                                driver.findElement(webdriver.By.id("add"))
                                .then((element)=>{
                                 element.click().then(()=>{}).catch(()=>{})
                                }).catch(()=>{})
                             }).catch(()=>{})
                            }).catch(()=>{})




                        })
                        .catch((err)=>{
                            console.log("send keys error",err)
                        });
                    
                    },2000)
                    
                })
                .catch((error)=>{
                    console.log("Error: ",error)
                });
            setTimeout(()=>{
                
                console.log("opened google!!!");
                driver.close();
            },10000);
            
        }).catch((err)=>{
            console.log("Error: ",err);
        });
