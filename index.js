module.exports = {
	'Apple Watch' : function (browser) {
		browser
		.url('https://www.apple.com/shop/buy-watch/apple-watch-nike/44mm-cellular-aluminum-space-gray-anthracite-black-sport-band')
		.waitForElementVisible('body', 1000)
    .click('.retail-availability-search-trigger')
    .pause(1000)
    .clearValue('#ii_searchreset')
    .setValue('#ii_searchreset', '78731')
    .click('#as-retailavailabilitysearch-searchbutton')
    .pause(1000)
    .expect.element('[for="as-storeitem-R085"] .as-storeitem-indicatortext').text.to.contain("Unavailable for Pickup")
    browser.expect.element('[for="as-storeitem-R216"] .as-storeitem-indicatortext').text.to.contain("Unavailable for Pickup")
		browser.end();
	}
};
