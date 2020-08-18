export function getType(v) {
  return Object.prototype.toString.call(v);
}

export function getTypeof(v) {
  return typeof v === 'undefined' ? 'undefined' : _typeof(v);
}

export function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

export function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

export const isFunction = (functionToCheck) => {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

export const isUndefined = (val)=> {
  return val === void 0;
};

export const isDefined = (val) => {
  return val !== undefined && val !== null;
};

function hasOwn(source, target) {
  return Object.prototype.hasOwnProperty.call(source, target);
}

export function set(target, path, value) {
  if (!path) return;
  var targetTemp = target;
  var pathArr = path.split('.');
  pathArr.forEach(function (item, index) {
    if (index === pathArr.length - 1) {
      targetTemp[item] = value;
    } else {
      if (!targetTemp[item]) targetTemp[item] = {};
      targetTemp = targetTemp[item];
    }
  });
}

// function get(target, path, defaultValue) {
//   if (!path) return target;
//   var pathArr = path.split('.');
//   var targetTemp = target;
//   pathArr.some(function (item, index) {
//     if (targetTemp[item] === undefined) {
//       targetTemp = defaultValue;
//       return true;
//     } else {
//       targetTemp = targetTemp[item];
//     }
//   });
//   return targetTemp;
// }



export function debounce(fn, delay) {
  var timer = null;
  return function () {
    var self = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(self, args);
    }, delay);
  };
}

export function isEqual(alice, bob) {
  if (alice === bob) return true;
  if (alice === null || bob === null || getTypeof(alice) !== 'object' || getTypeof(bob) !== 'object') {
    return alice === bob;
  }

  for (var key in alice) {
    if (!hasOwn(alice, key)) continue;
    var aliceValue = alice[key];
    var bobValue = bob[key];
    var aliceType = getTypeof(aliceValue);

    if (getTypeof(bobValue) === 'undefined') {
      return false;
    } else if (aliceType === 'object') {
      if (!isEqual(aliceValue, bobValue)) return false;
    } else if (aliceValue !== bobValue) {
      return false;
    }
  }
  for (var _key in bob) {
    if (!hasOwn(bob, _key)) continue;
    if (getTypeof(alice)[_key] === 'undefined') return false;
  }

  return true;
}

export function camelToKebab(s) {
  return s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function cloneDeep(v) {
  return JSON.parse(JSON.stringify(v));
}
