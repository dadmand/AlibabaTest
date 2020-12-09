// Selectors
let inputPassengers='#search-panels > div.panels > div > div > form > div:nth-child(4) > div > input';
let radioTwoWay='#search-panels > div.panels > div > div > form > div.gap > div > span:nth-child(2) > label'
let originPicker='.input-pair div[data-test="originPicker"] > input'
let originPickerSelectTehran='.input-pair div[data-test="originPicker"] li:nth-child(2)'
let destinationPicker='.input-pair div[data-test="destinationPicker"] > input'
let destinationPickerMashhad='.input-pair div[data-test="destinationPicker"] li:nth-child(5)'
let destinationPickerNoshahr='.input-pair div[data-test="destinationPicker"] li:nth-child(58)'
let datePickerDay24='#search-panels > div.panels > div > div > form > div.col-xs-12.col-sm-12.col-md-3.col-lg-3 > div > div.alibaba-datepicker__wrapper.v-dropdown.open.fade > div > div.alibaba-datepicker__container.slide-left > div:nth-child(1) > div > div > div.calendar__container > div:nth-child(24)'
let datePickerDa27='#search-panels > div.panels > div > div > form > div.col-xs-12.col-sm-12.col-md-3.col-lg-3 > div > div.alibaba-datepicker__wrapper.v-dropdown.open.fade > div > div.alibaba-datepicker__container.slide-left > div:nth-child(1) > div > div > div.calendar__container > div:nth-child(27)'
let datePickerConfirm='#search-panels > div.panels > div > div > form > div.col-xs-12.col-sm-12.col-md-3.col-lg-3 > div > div.alibaba-datepicker__wrapper.v-dropdown.open.fade > div > footer > div:nth-child(2) > button'
let searchButton='#search-panels > div.panels > div > div > form > div:nth-child(5) > button'
let passengerPicker='.search-container input[data-test="passengerPicker"]'
let passengerPickerIncrease=':nth-child(2) > .pull-left > [data-test=passengerPickerValueIncrease]'
let resultsNextDay='#alibaba_sidebar .adjacent-days__next'
let resultsExist='.available-columns'
let aboutUs='.site-footer__item a[href="/about-us"]'
let trainTicker='#search-panels a[href="/train-ticket"]'
let trainOriginPicker='[data-test=originPicker] > .form-control'

// describe('Alibaba.ir IranIn', () => {
//   context('Tehran-Mashhad',()=>{
//     it('Search Tehran-Mashhad', () => {
//         cy.visit('https://www.alibaba.ir',{timeout:100000});
//         cy.get(radioTwoWay).click().should('be.visible');
//         cy.get(originPicker).click().should('be.visible');
//         cy.get(originPickerSelectTehran).click()
//         cy.get(destinationPicker).click().should('be.visible');
//         cy.get(destinationPickerMashhad).click()
//         cy.get(datePickerDay24).click().should('be.visible');
//         cy.get(datePickerDa27).click().should('be.visible');
//         cy.get(datePickerConfirm).click();
//         cy.get(passengerPicker).click();
//         cy.get(passengerPickerIncrease).dblclick();
//         cy.get(passengerPickerIncrease).dblclick();
//         cy.get(passengerPickerIncrease).dblclick();
//         cy.get(passengerPickerIncrease).click();
//         cy.get(searchButton).click();
//       });
//       it('Get Results Tehran-Mashhad [ have Results ]', {timeout: 100000}, () => {
//         cy.wait(20000); //wait for page load 
//         cy.get(resultsExist).should('to.exist');
//       });
//       it('Scroll to About Us link and clicked',()=>{
//         cy.get(aboutUs).scrollIntoView();
//         cy.wait(10000);
//         cy.get(aboutUs).click();
//       });
//   });
//   context('Tehran-Noshahr',()=>{
//     it('Search Tehran-Noshahr', () => {
//         cy.visit('https://www.alibaba.ir',{timeout:100000});
//         cy.get(radioTwoWay).click().should('be.visible');
//         cy.get(originPicker).click().should('be.visible');
//         cy.get(originPickerSelectTehran).click()
//         cy.get(destinationPicker).click().should('be.visible');
//         cy.get(destinationPickerNoshahr).click()
//         cy.get(datePickerDay24).click().should('be.visible');
//         cy.get(datePickerDa27).click().should('be.visible');
//         cy.get(datePickerConfirm).click();
//         cy.get(passengerPicker).click();
//         cy.get(passengerPickerIncrease).dblclick();
//         cy.get(passengerPickerIncrease).dblclick();
//         cy.get(passengerPickerIncrease).dblclick();
//         cy.get(passengerPickerIncrease).click();
//         cy.get(searchButton).click();
//       });
//       it('Get Results Tehran-Mashhad [ empty results with retry ]', {retries: 3}, () => {
//         cy.wait(20000); //wait for page load 
//         const attempt = Cypress._.get(cy.state('runnable'), '_currentRetry', 0);
//         if(attempt==0) {
//             cy.get(resultsExist).should('to.exist');
//         } else {
//           cy.get(resultsNextDay).click();
//           cy.get(resultsExist).should('to.exist');
//         } 
//       });
//   });
// });

describe('Alibaba.ir Iran Train', () => {
  context('Tehran-Mashhad',()=>{
    it('Search Tehran-Mashhad', () => {
        cy.visit('https://www.alibaba.ir',{timeout:100000});
        cy.get(trainTicker).click().should('be.visible');
        cy.get(radioTwoWay).click().should('be.visible');
        // cy.get(trainOriginPicker).click().should('be.visible');
        // cy.get(originPickerSelectTehran).click()
        // cy.get(destinationPicker).click().should('be.visible');
        // cy.get(destinationPickerMashhad).click()
        // cy.get(datePickerDay24).click().should('be.visible');
        // cy.get(datePickerDa27).click().should('be.visible');
        // cy.get(datePickerConfirm).click();
        // cy.get(passengerPicker).click();
        // cy.get(passengerPickerIncrease).dblclick();
        // cy.get(passengerPickerIncrease).dblclick();
        // cy.get(passengerPickerIncrease).dblclick();
        // cy.get(passengerPickerIncrease).click();
        // cy.get(searchButton).click();
      });
      // it('Get Results Tehran-Mashhad', {timeout: 100000}, () => {
      //   cy.wait(20000); //wait for page load 
      //   cy.get(resultsExist).should('to.exist');
      // });
  });
});