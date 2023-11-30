
exports.getHex = (req, res) => {

  let text = "";
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  // Convert the decimal values to hexadecimal
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');

  // Concatenate the hex values to form the color code
  const hexColor = `#${hexR}${hexG}${hexB}`;
 randHex = hexColor.replace(/^#/, '');
   r = parseInt(randHex.slice(0, 2), 16);
   g = parseInt(randHex.slice(2, 4), 16);
   b = parseInt(randHex.slice(4, 6), 16);

  // Calculate the relative luminance using the formula for sRGB
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Use a threshold to determine if the text should be white or black
  if (luminance > 128) {
   text = "#111" // Use black text on light backgrounds
  } else {
   text = "#fff" // Use white text on dark backgrounds
  }

  const data = {
    "hex": hexColor,
    "text": text
  }

  res.send(data);
  console.log(data);
}

