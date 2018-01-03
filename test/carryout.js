var webdriver = require('selenium-webdriver'),
By = webdriver, By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

driver.get('https://www.dominos.com/');

'selects carryout option 
driver.findElement(By.class('btn btn--carryout js-carryout');

'give page time to load
driver.waitForDocumentLoaded();

'enter location

driver.findElement(By.name('City').Sendkeys('Arlington');

'dropdown to select VA
Select dropdown = new Select(driver.findElement(By.name('Region'))); dropdown.selectByVisibleText("VA");

'submit to find location nearest
driver.findElement(By.class('btn btn--large js-search-cta c-locationsearch-search-cta').click();

'give page time to load
driver.waitForDocumentLoaded();

'select Pizza tab
driver.findElement(By.class('navigation-AllPizzas').click();

'order MeatZZAA Pizza
driver.findElement(By.data-dpz-track-evt-name('Order | MeatZZaô').click();

'click No, Add to order now button
driver.findElement(By.class('btn btn--large js-isNew').click();

'click Checkout button
driver.findElement(By.class('c-order-buttonCheckout-text').click();

'give page time to load
driver.waitForDocumentLoaded();


'pop up for st. judes, might need if statement 

drive.findElement(By.href('#Close').click();

'give page time to load
driver.waitForDocumentLoaded();

'click Checkout button
driver.findElement(By.class('c-order-buttonCheckout-text').click();

'give page time to load
driver.waitForDocumentLoaded();

function check_total() {
var total = driver.GetTotal().then( function(check_total) {
if (check_total=== 'Total: $18.69')
	{
	console.log('success');
return true;
	}
else
	{
	console.log('fail) + check_total);
	}
});
return total;
}