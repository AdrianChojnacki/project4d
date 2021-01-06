// Get color function
const getColor = (e) => {
  if (e.clientX % 2 === 0) {
    if (e.clientY % 2 === 0) {
      return "red";
    } else {
      return "yellow";
    }
  } else {
    if (e.clientY % 2 === 0) {
      return "green";
    } else {
      return "blue";
    }
  }
};

// Set color function
const setColor = (e) => {
  console.log(e.clientX, e.clientY);

  const color = getColor(e);
  document.body.style.backgroundColor = color;
};

// Listener
document.body.addEventListener(`click`, setColor);
