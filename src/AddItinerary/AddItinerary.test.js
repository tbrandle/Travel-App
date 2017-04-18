import webdriver from 'selenium-webdriver'

describe.only('LogIn actions', () => {

  let driver

  beforeEach(() => {
    this.timeout(10000);
    driver = new webdriver.Builder()
                          .forBrowser('chrome')
                          .build();
    driver.get('http://localhost:8080');
  });

  afterEach(() => {
    driver.quit()
  })


  it('On componentDidMount, currentUser.uid should be stored in state', ()=>{

  })

  it('', ()=>{
    // add marker might be tough... might have to use selenium
  })

  it('', ()=>{
    // need to test with selenium
  })

  it('', ()=>{

  })

  it('', ()=>{

  })
})
