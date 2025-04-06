// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_registerMenuCommand
if (typeof WB === "undefined") {
  var WB = {};
}

/* eslint-disable no-undef */
let __WB_scriptConfig = {
  stringConfig: (varName, defaultValue = "") => {
    GM_registerMenuCommand(`Set ${varName}`, () => {
      let val = prompt(`Value for ${varName}?`, GM_getValue(varName, defaultValue));
      if (val != null) {
        GM_setValue(varName, val);
      }
    });
    return GM_getValue(varName, defaultValue);
  },
  boolConfig: (varName, defaultValue = false) => {
    let originalValue = GM_getValue(varName, defaultValue);
    GM_registerMenuCommand(`${originalValue ? 'Disable':'Enable'} ${varName}`, () => {
      GM_setValue(varName, !originalValue);
      __WB_scriptConfig.boolConfig(varName, defaultValue);
    }, {
      id: `${varName}_boolean_config`,
      title: `${varName} is currently ${originalValue ? 'Enabled':'Disabled'}`
    });
    return GM_getValue(varName, defaultValue);
  }
}

WB.scriptConfig = __WB_scriptConfig;