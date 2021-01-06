const colorPick = (e) => {
  const x = e.clientX;
  const y = e.clientY;

  console.log(x, y);

  if (x % 2 === 0) {
    if (y % 2 === 0) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "yellow";
    }
  } else {
    if (y % 2 === 0) {
      document.body.style.backgroundColor = "green";
    } else {
      document.body.style.backgroundColor = "blue";
    }
  }
};

document.body.addEventListener(`click`, colorPick);
