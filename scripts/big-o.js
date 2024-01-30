const boxes = ["a", "b", "c", "d", "e"];

for (let i = 0; i < boxes.length; i++) {
  for (let j = 0; j < boxes.length; j++) {
    console.log(boxes[i], boxes[j]);
  }
}

function test(n) {
  const hiArr = [];
  for (let j = 0; j < boxes.length; j++) {
    hiArr.push("hi");
  }
  return hiArr;
}
