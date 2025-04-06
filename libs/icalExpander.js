if (typeof WB === "undefined") {
  var WB = {};
}

if (typeof WB.libs === "undefined") {
  WB.libs = {};
}

let __WB_icalExpander = await import('https://cdn.jsdelivr.net/npm/@realhidden/ical-expander@3.2.0/+esm');
WB.libs.icalExpander = __WB_icalExpander.default;