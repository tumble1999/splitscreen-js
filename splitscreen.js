/**
 * @file Splitscreen js
 * @author Cameorn Trow
 */

/**
 * @class SplitScreen
 * @param {HTMLElement} container 
 */
class SplitScreen {
	constructor(container) {
		this.container = container;
		this.direction = "row";
		Object.assign(container.style, {
			"display": "flex",
			"flex-direction": "row",
			"flex-wrap": "wrap",
			"align-content": "stretch",
			"align-items": "stretch"
		});
	}

	/**
	 * @returns {Array.<HTMLCanvasElement>}
	 */
	getCanvases() {
		return Array.from(this.container.getElementsByTagName("canvas"));
	}

	/**
	 * Creates and retuens a canvas that you can use
	 * @returns {HTMLCanvasElement}
	 */
	createScreen() {
		var canvas = document.createElement("canvas");
		this.container.appendChild(canvas);
		this.update();
		this.update();
		return canvas;
	}

	update() {
		var canvases = this.getCanvases();
		canvases.forEach(canvas => {
			var w = Math.sqrt(canvases.length);
			canvas.style["max-width"] = canvas.width = document.body.offsetWidth/Math.ceil(w);
			canvas.height = document.body.offsetHeight * Math.floor(w) / canvases.length;
			canvas.style.flex = "1 1 " + 100 / Math.ceil(w) + "%";
		})
	}

	/**
	 * Set the height of the container
	 * @param {Number|String} height 
	 */
	setHeight(height) {
		this.container.style.height = height;
		this.update();
	}

	/**
	 * Sets the width of the container
	 * @param {Number} width 
	 */
	setWidth(width) {
		this.container.style.width = width;
		this.update();
	}

	/**
	 * Sets the direction of the canvases when its 2 player
	 * @param {"horizontal"|"vertical"} dir="vertical"
	 */
	setDirection(dir) {
		switch (dir | "vertical") {
			case "horizontal":
				this.container["flex-direction"] = this.direction = "column";
				break;
			case "vertical":
				this.container["flex-direction"] = this.direction = "row";
				break;
		}
		update();
	}
}
