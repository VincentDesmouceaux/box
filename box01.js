const box = (width, height) => {
  let str = "";

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      if ((i === 1 && j === 1) || (i === height && j === width)) {
        str = str + "/";
      } else if ((i === 1 && j === width) || (i === height && j === 1)) {
        str = str + "\\";
      } else if (i !== 1 && i !== height && j !== 1 && j !== width) {
        str = str + " ";
      } else {
        str = str + "*";
      }
    }
    if (i !== height) {
      str = str + "\n";
    }
  }

  return str;
};

console.log(box(5, 3));
