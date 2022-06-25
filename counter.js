function counter(string) {
  const array = string.split(', ');
  const counts = {};

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'Red' || array[i] === 'Green' || array[i] === 'Amber') {
      counts[array[i]] = 1 + (counts[array[i]] || 0);
    } else {
      counts.Uncounted = 1 + (counts.Uncounted || 0);
    }
  }

  let result = '';

  if (array.includes('Green')) {
    result += `Green: ${counts.Green}\n`;
  }

  if (array.includes('Amber')) {
    result += `Amber: ${counts.Amber}\n`;
  }

  if (array.includes('Red')) {
    result += `Red: ${counts.Red}\n`;
  }

  if (counts.Uncounted) {
    result += `Uncounted: ${counts.Uncounted}`;
  }

  return result.trim();
}

module.exports = counter;
