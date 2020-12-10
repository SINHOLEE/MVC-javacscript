export default class CountView {
	constructor() {
		this.$result = document.querySelector(".result");
		this.$increaseButton = document.querySelector(".increase-button");
		this.$decreaseButton = document.querySelector(".decrease-button");
	}
	render(count) {
		this.$result.innerHTML = count || "아직 아무것도 없습니다.";
	}

	bindOnClickIncrease(onClickHandler) {
		this.$increaseButton.addEventListener("click", onClickHandler);
	}
	bindOnClickDecrease(onClickHandler) {
		this.$decreaseButton.addEventListener("click", onClickHandler);
	}
}
