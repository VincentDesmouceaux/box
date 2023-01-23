const pyramid = (size) => {
  let str = "";

  for (let line = 1; line <= size; line++) {
    for (let i = 0; i < size - line; i++) {
      str = str + " ";
    }

    for (let i = 0; i < line * 2 - 1; i++) {
      str += "X";
    }
    if (line !== size) {
      str = str + "\n";
    }
  }

  return str;
};

console.log(pyramid(5));
