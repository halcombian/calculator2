let previousNum = document.getElementById("previous-num");
let currentNum = document.getElementById("current-num");

const buttons = document.getElementsByTagName("button");

for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", (e) => {
		switch (e.target.innerText) {
			case "AC":
				previousNum.innerText = "";
				currentNum.innerText = "";
				break;
			case "⇦":
				currentNum.innerText = currentNum.innerText.slice(0, -1);
				break;
			case ".":
				if (currentNum.innerText.includes(".")) {
					break;
				}
				currentNum.innerText += e.target.innerText;
				break;
			case "=":
				currentNum.innerText = math.evaluate(
					previousNum.innerText + currentNum.innerText
				);
				previousNum.innerText = "";
				break;
			case "/":
				currentNum.innerText = math.evaluate(
					previousNum.innerText + currentNum.innerText
				);
				previousNum.innerText = currentNum.innerText + " /";
				currentNum.innerText = "";
				break;
			case "*":
				currentNum.innerText = math.evaluate(
					previousNum.innerText + currentNum.innerText
				);
				previousNum.innerText = currentNum.innerText + " *";
				currentNum.innerText = "";
				break;
			case "-":
				currentNum.innerText = math.evaluate(
					previousNum.innerText + currentNum.innerText
				);
				previousNum.innerText = currentNum.innerText + " -";
				currentNum.innerText = "";
				break;
			case "+":
				currentNum.innerText = math.evaluate(
					previousNum.innerText + currentNum.innerText
				);
				previousNum.innerText = currentNum.innerText + " +";
				currentNum.innerText = "";
				break;
			default:
				if (currentNum.innerText.length >= 16) {
					break;
				}
				currentNum.innerText += e.target.innerText;
		}
	});
}

for (j = currentNum.innerText.length; j >= 16; j--) {
	currentNum.innerText.slice(0, -1);
}
