// @grant       unsafeWindow
if (typeof WB === "undefined") {
  var WB = {};
}

if (typeof WB.libs === "undefined") {
  var WB.libs = {};
}

import __WB_icalExpander from 'https://cdn.jsdelivr.net/npm/ical-expander@3.1.0/+esm'
WB.libs.icalExpander = __WB_icalExpander;
