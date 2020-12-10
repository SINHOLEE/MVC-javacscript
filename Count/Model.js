export default class CountModel {
	state = null;
	constructor(count = 0) {
		this.state = { count };
		console.log(this.state);
	}
	getCount() {
		console.log("getcount");
		console.log(this.state);
		return this.state.count;
	}
	increase() {
		const { count } = this.state;
		this.state.count = count + 1;
	}
	decrease() {
		const { count } = this.state;
		this.state.count = count - 1;
	}
}
