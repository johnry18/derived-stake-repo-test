import { BACKGROUND_LANDSCAPE_DIMENSIONS, BACKGROUND_PORTRAIT_DIMENSIONS } from "./constants";
import { stateLayoutDerived } from "./stateLayout";

// Define a function to calculate size and layout based on canvas size and ratio
// This is used to fit the game background appropriately within the available canvas space
const sizeLayout = () => {
	const canvasRatio = stateLayoutDerived.canvasRatio();
	const canvasSize = stateLayoutDerived.canvasSizes();
	const selectedDimensions = canvasRatio < 1 ? BACKGROUND_PORTRAIT_DIMENSIONS : BACKGROUND_LANDSCAPE_DIMENSIONS;
	const ratio = selectedDimensions.width / selectedDimensions.height;

	if (canvasRatio < ratio) {
		const width = canvasSize.width;
		const height = canvasSize.width / ratio;
		return {
			x: canvasSize.width / 2,
			y: canvasSize.height / 2,
			width,
			height,
			scale: width / selectedDimensions.width,
			isPortrait: canvasRatio < 1
		};
	}

	const width = canvasSize.height * ratio;
	const height = canvasSize.height;
	return {
		x: canvasSize.width / 2,
		y: canvasSize.height / 2,
		height,
		width,
		scale: height / selectedDimensions.height,
		isPortrait: canvasRatio < 1
	};
};

export const stateGameSizeLayout = {
	sizeLayout
};