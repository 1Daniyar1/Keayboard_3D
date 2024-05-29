import { Application } from "https://unpkg.com/@splinetool/runtime@1.3.8/build/runtime.js";

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);

spline
	.load('https://prod.spline.design/SNR5CYxmvb-XOV8q/scene.splinecode')
	.then(() => {

	});