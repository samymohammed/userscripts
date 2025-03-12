// @grant       unsafeWindow
/* global unsafeWindow */
if (typeof WB === "undefined") {
  var WB = {};
}

// common helpers
let helperFunctions = {
  sleep : ms => new Promise(resolve => setTimeout(resolve, ms)),
  varWait : varName => {
	return new Promise(resolve => {
	  let intervalId = setInterval(() => {
		if(typeof unsafeWindow[varName] != undefined) {
		  clearInterval(intervalId);
		  resolve();
		}
	  }, 10);
	});
  },
  domWait : async selector => {
    while (document.querySelector(selector) == null) {
      await helperFunctions.sleep(10);
    }
    return document.querySelector(selector);
  }
}

WB.helpers = helperFunctions;