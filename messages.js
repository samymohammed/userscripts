// @grant       unsafeWindow
if (typeof WB === "undefined") {
  var WB = {};
}

/* eslint-disable no-undef */
let __WB_messagesFunctions = {
  publish: (type, content, win = unsafeWindow) => {
    win.postMessage({content: content, type: type}, "*");
  },
  subscribe: (type, handler, win = unsafeWindow) => {
    win.addEventListener('message', e => {
      if (e.data?.type === type) {
        handler(e.data.content);
      }
    }, true);
  }
}

WB.messages = __WB_messagesFunctions;