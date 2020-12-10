export default class CountControllor {
	model = null;
	view = null;
	constructor(model, view) {
		this.model = model;
		this.view = view;

		this.view.render(this.model.getCount());
		this.view.bindOnClickIncrease(this.onClickIncrease.bind(this));
		this.view.bindOnClickDecrease(this.onClickDecrease.bind(this));
	}

	onClickIncrease() {
		console.log("1");
		this.model.increase();
		this.view.render(this.model.getCount());
	}

	onClickDecrease() {
		console.log("2");
		this.model.decrease();
		this.view.render(this.model.getCount());
	}
}
