import CountControllor from "./Controllor.js";
import CountModel from "./Model.js";
import CountView from "./View.js";

class App {
	constructor() {
		new CountControllor(new CountModel(), new CountView());
	}
}

export default new App();
