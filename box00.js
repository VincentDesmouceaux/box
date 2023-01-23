const box = (width, height) => {
  let str = "";

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      if (i === 1 || i === height) {
        if (j === 1 || j === width) {
          str = str + "o";
        } else {
          str = str + "-";
        }
      } else {
        if (j === 1 || j === width) {
          str = str + "|";
        } else {
          str = str + " ";
        }
      }
    }
    str = str + "\n";
  }

  return str;
};

console.log(box(5, 3));
