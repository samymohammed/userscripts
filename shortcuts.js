if (typeof WB === "undefined") {
  var WB = {};
}

// shortcut key handlers
let __WB_handlers = {
  true: {
    true: {
      true: {},
      false: {}
    },
    false: {
      true: {},
      false: {}
    }
  },
  false:{
    true: {
      true: {},
      false: {}
    },
    false: {
      true: {},
      false: {}
    }
  }
}


// shortcut key handler functions
let __WB_shortcutFunctions = {
  add: (ctrl, alt, shift, key, handler, rank = 1) => {
    //if (__WB_handlers[ctrl] === null || __WB_handlers[ctrl] === undefined) {
    //  __WB_handlers[ctrl] = {};
    //}
    //if (__WB_handlers[ctrl][alt] === null || __WB_handlers[ctrl][alt] === undefined) {
    //  __WB_handlers[ctrl][alt] = {};
    //}
    //if (__WB_handlers[ctrl][alt][shift] === null || __WB_handlers[ctrl][alt][shift] === undefined) {
    //  __WB_handlers[ctrl][alt][shift] = {};
    //}
    if (__WB_handlers[ctrl][alt][shift][key] === null || __WB_handlers[ctrl][alt][shift][key] === undefined) {
      __WB_handlers[ctrl][alt][shift][key] = {};
    }
    // __WB_handlers[ctrl][alt][shift][key][999999] = () => {};
    __WB_handlers[ctrl][alt][shift][key][rank] = handler;
  }
}

(function() {
  document.addEventListener('keydown', function(event) {
    let key = "";
    if(event.key.startsWith("Arrow")) {
      key = event.key.substr(5).toLocaleLowerCase("en-US");
    } else if (event.key.length === 1) {
      key = event.key.toLocaleLowerCase("en-US");
    }

    //#### x to fix rbtray
    if(event.ctrlKey && event.altKey && key == "x") {
      key = "down";
    }

    return __WB_handlers?.[event.ctrlKey]?.[event.altKey]?.[event.shiftKey]?.[key]?.[Object.keys(__WB_handlers?.[event.ctrlKey]?.[event.altKey]?.[event.shiftKey]?.[key] || {})[0]](event);

  }, true);

})();

WB.shortcuts = __WB_shortcutFunctions;
