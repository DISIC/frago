function hslToHex(hsl) {
  var h = hsl[0]
      s = hsl[1]
      l = hsl[02]
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;

  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
function split(value) {
  var result  = value
  if (value.includes('hsl')) {
    value = value.replaceAll('%','').slice(4,-1).split(', ').map(function(num) {
        if (num.includes('calc')) {
          return eval(num.slice(5,-1));
        }
        else {
          return eval(num);
        }
    })
    result = value
  }
  return result
}
const hslprimary = split(getComputedStyle(document.body).getPropertyValue('--color-graph-primary'))
const hslsecondary  = split(getComputedStyle(document.body).getPropertyValue('--color-graph-secondary'))
const hsltertiary  = split(getComputedStyle(document.body).getPropertyValue('--color-graph-tertiary'))
const hslquartenary  = split(getComputedStyle(document.body).getPropertyValue('--color-graph-quartenary'))
