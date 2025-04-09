function findDuplicates(arr) {
  const count = {};
  const result = [];

  for (let num of arr) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  for (let key in count) {
    if (count[key] > 1) {
      result.push(Number(key));
    }
  }

  return result;
}

function showDuplicates() {
  const input = document.getElementById("numberInput").value;
  
  if (!input.trim()) {
    document.getElementById("output").textContent = "Please enter some numbers.";
    return;
  }

  const arr = input.split(",").map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));

  const duplicates = findDuplicates(arr);

  document.getElementById("output").textContent = duplicates.length > 0
    ? duplicates.join(", ")
    : "No duplicates found.";
}
