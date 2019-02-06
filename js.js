function updateSum(event) {

	for (let i = 1; i <= 2; i++) {
    let sum1_numbers = document.getElementsByClassName("player" + i + " sum1");

    let sum1 = 0;
    for (let j = 0; j < sum1_numbers.length; j++) {
    	let number = sum1_numbers[j].value;
      if (!isNaN(number)) {
        sum1 += parseInt(number);
      }
    }
    document.getElementById("player" + i + "_sum1").innerText = sum1;
  }
}

let inputs = document.getElementsByClassName("sum1");

for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("change", updateSum);
}

updateSum();