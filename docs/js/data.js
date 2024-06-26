
let snippets = {
	"alpha": {
		"link": "https://p5js.org/reference/#/p5/alpha",
		"code": "noStroke();\nlet c = color(0, 126, 255, 102);\nfill(c);\nrect(15, 15, 35, 70);\nlet value = alpha(c); // Sets 'value' to 102\nfill(value);\nrect(50, 15, 35, 70);",
		"id": "alpha",
		"name": "alpha"
	},
	"blue": {
		"link": "https://p5js.org/reference/#/p5/blue",
		"code": "let c = color(175, 100, 220);\nfill(c);\nrect(15, 20, 35, 60); // Draw left rectangle\nlet blueValue = blue(c);\nfill(0, 0, blueValue);\nrect(50, 20, 35, 60); // Draw right rectangle",
		"id": "blue",
		"name": "blue"
	},
	"brightness": {
		"link": "https://p5js.org/reference/#/p5/brightness",
		"code": "noStroke();\ncolorMode(HSB);\nlet c = color(0, 50, 100);\nfill(c);\nrect(15, 20, 35, 60);\nlet value = brightness(c);\nfill(value);\nrect(50, 20, 35, 60);",
		"id": "brightness",
		"name": "brightness"
	},
	"color__0": {
		"link": "https://p5js.org/reference/#/p5/color",
		"code": "let c = color(255, 204, 0);\nfill(c);\nnoStroke();\nrect(30, 20, 55, 55);",
		"id": "color__0",
		"name": "color I"
	},
	"color__1": {
		"link": "https://p5js.org/reference/#/p5/color",
		"code": "let c = color(255, 204, 0);\nfill(c);\nnoStroke();\nellipse(25, 25, 80, 80); // Draw left circle\n// Using only one value generates a grayscale value.\nc = color(65);\nfill(c);\nellipse(75, 75, 80, 80);",
		"id": "color__1",
		"name": "color II"
	},
	"color__2": {
		"link": "https://p5js.org/reference/#/p5/color",
		"code": "noStroke();\nlet c = color(50, 55, 100);\nfill(c);\nrect(0, 10, 45, 80); // Draw left rect\ncolorMode(HSB);\nc = color(50*3.6, 55, 100);\nfill(c);\nrect(55, 10, 45, 80);",
		"id": "color__2",
		"name": "color III"
	},
	"green": {
		"link": "https://p5js.org/reference/#/p5/green",
		"code": "let c = color(20, 75, 200); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(15, 20, 35, 60); // Draw left rectangle\n\nlet greenValue = green(c); // Get green in 'c'\nprint(greenValue); // Print \"75.0\"\nfill(0, greenValue, 0); // Use 'greenValue' in new fill\nrect(50, 20, 35, 60); // Draw right rectangle",
		"id": "green",
		"name": "green"
	},
	"hue": {
		"link": "https://p5js.org/reference/#/p5/hue",
		"code": "noStroke();\ncolorMode(HSB);\nlet c = color(0, 50, 100);\nfill(c);\nrect(15, 20, 35, 60);\nlet value = hue(c); // Sets 'value' to \"0\"\nfill(value);\nrect(50, 20, 35, 60);",
		"id": "hue",
		"name": "hue"
	},
	"lerpColor": {
		"link": "https://p5js.org/reference/#/p5/lerpColor",
		"code": "colorMode(RGB);\nstroke(255);\nbackground(51);\nlet from = color(218, 165, 32);\nlet to = color(72, 61, 139);\ncolorMode(RGB); // Try changing to HSB.\nlet interA = lerpColor(from, to, 0.33);\nlet interB = lerpColor(from, to, 0.66);\nfill(from);\nrect(10, 20, 20, 60);\nfill(interA);\nrect(30, 20, 20, 60);\nfill(interB);\nrect(50, 20, 20, 60);\nfill(to);\nrect(70, 20, 20, 60);",
		"id": "lerpColor",
		"name": "lerpColor"
	},
	"red": {
		"link": "https://p5js.org/reference/#/p5/red",
		"code": "let c = color(255, 204, 0); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(15, 20, 35, 60); // Draw left rectangle\n\nlet redValue = red(c); // Get red in 'c'\nprint(redValue); // Print \"255.0\"\nfill(redValue, 0, 0); // Use 'redValue' in new fill\nrect(50, 20, 35, 60); // Draw right rectangle",
		"id": "red",
		"name": "red"
	},
	"saturation": {
		"link": "https://p5js.org/reference/#/p5/saturation",
		"code": "noStroke();\ncolorMode(HSB);\nlet c = color(0, 50, 100);\nfill(c);\nrect(15, 20, 35, 60);\nlet value = saturation(c); // Sets 'value' to 50\nfill(value);\nrect(50, 20, 35, 60);",
		"id": "saturation",
		"name": "saturation"
	},
	"Color_setRed": {
		"link": "https://p5js.org/reference/#/p5.Color/setRed",
		"code": "let backgroundColor;\n\nfunction setup() {\n  backgroundColor = color(100, 50, 150);\n}\n\nfunction draw() {\n  backgroundColor.setRed(128 + 128 * sin(millis() / 1000));\n  background(backgroundColor);\n}",
		"id": "Color_setRed",
		"name": "Color/setRed"
	},
	"Color_setGreen": {
		"link": "https://p5js.org/reference/#/p5.Color/setGreen",
		"code": "let backgroundColor = color(100, 50, 150);\nfunction draw() {\n  backgroundColor.setGreen(128 + 128 * sin(millis() / 1000));\n  background(backgroundColor);\n}",
		"id": "Color_setGreen",
		"name": "Color/setGreen"
	},
	"Color_setBlue": {
		"link": "https://p5js.org/reference/#/p5.Color/setBlue",
		"code": "let backgroundColor = color(100, 50, 150);\nfunction draw() {\n  backgroundColor.setBlue(128 + 128 * sin(millis() / 1000));\n  background(backgroundColor);\n}",
		"id": "Color_setBlue",
		"name": "Color/setBlue"
	},
	"Color_setAlpha": {
		"link": "https://p5js.org/reference/#/p5.Color/setAlpha",
		"code": "function draw() {\n  clear();\n  background(200);\n  squareColor = color(100, 50, 100);\n  squareColor.setAlpha(128 + 128 * sin(millis() / 1000));\n  fill(squareColor);\n  rect(13, 13, width - 26, height - 26);\n}",
		"id": "Color_setAlpha",
		"name": "Color/setAlpha"
	},
	"background": {
		"link": "https://p5js.org/reference/#/p5/background",
		"code": "background(51);",
		"id": "background",
		"name": "background"
	},
	"clear": {
		"link": "https://p5js.org/reference/#/p5/clear",
		"code": "// Clear the screen on mouse press.\nfunction draw() {\n  ellipse(mouseX, mouseY, 20, 20);\n}\nfunction mousePressed() {\n  clear();\n  background(128);\n}",
		"id": "clear",
		"name": "clear"
	},
	"colorMode__0": {
		"link": "https://p5js.org/reference/#/p5/colorMode",
		"code": "noStroke();\ncolorMode(RGB);\nfor (let i = 0; i < 100; i++) {\n  for (let j = 0; j < 100; j++) {\n    stroke(i*2.5, j*2.5, 0);\n    point(i, j);\n  }\n}",
		"id": "colorMode__0",
		"name": "colorMode I"
	},
	"colorMode__1": {
		"link": "https://p5js.org/reference/#/p5/colorMode",
		"code": "noStroke();\ncolorMode(HSB);\nfor (let i = 0; i < 100; i++) {\n  for (let j = 0; j < 100; j++) {\n    stroke(i*3.6, j, 100);\n    point(i, j);\n  }\n}",
		"id": "colorMode__1",
		"name": "colorMode II"
	},
	"fill": {
		"link": "https://p5js.org/reference/#/p5/fill",
		"code": "// R, G & B integer values\nfill(255, 204, 0);\nrect(20, 20, 60, 60);",
		"id": "fill",
		"name": "fill"
	},
	"noFill": {
		"link": "https://p5js.org/reference/#/p5/noFill",
		"code": "rect(15, 10, 55, 55);\nnoFill();\nrect(20, 20, 60, 60);",
		"id": "noFill",
		"name": "noFill"
	},
	"noStroke": {
		"link": "https://p5js.org/reference/#/p5/noStroke",
		"code": "noStroke();\nrect(20, 20, 60, 60);",
		"id": "noStroke",
		"name": "noStroke"
	},
	"stroke__0": {
		"link": "https://p5js.org/reference/#/p5/stroke",
		"code": "// Grayscale integer value\nstrokeWeight(4);\nstroke(51);\nrect(20, 20, 60, 60);",
		"id": "stroke__0",
		"name": "stroke I"
	},
	"stroke__1": {
		"link": "https://p5js.org/reference/#/p5/stroke",
		"code": "// R, G & B integer values\nstroke(255, 204, 0);\nstrokeWeight(4);\nrect(20, 20, 60, 60);",
		"id": "stroke__1",
		"name": "stroke II"
	},
	"arc__0": {
		"link": "https://p5js.org/reference/#/p5/arc",
		"code": "arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);",
		"id": "arc__0",
		"name": "arc I"
	},
	"arc__1": {
		"link": "https://p5js.org/reference/#/p5/arc",
		"code": "arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);",
		"id": "arc__1",
		"name": "arc II"
	},
	"arc__2": {
		"link": "https://p5js.org/reference/#/p5/arc",
		"code": "arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);",
		"id": "arc__2",
		"name": "arc III"
	},
	"ellipse": {
		"link": "https://p5js.org/reference/#/p5/ellipse",
		"code": "ellipse(56, 46, 55, 55);",
		"id": "ellipse",
		"name": "ellipse"
	},
	"circle": {
		"link": "https://p5js.org/reference/#/p5/circle",
		"code": "// Draw a circle at location (30, 30) with a diameter of 20.\ncircle(30, 30, 20);",
		"id": "circle",
		"name": "circle"
	},
	"line__0": {
		"link": "https://p5js.org/reference/#/p5/line",
		"code": "line(30, 20, 85, 75);",
		"id": "line__0",
		"name": "line I"
	},
	"line__1": {
		"link": "https://p5js.org/reference/#/p5/line",
		"code": "line(30, 20, 85, 20);\nstroke(126);\nline(85, 20, 85, 75);\nstroke(255);\nline(85, 75, 30, 75);",
		"id": "line__1",
		"name": "line II"
	},
	"point__0": {
		"link": "https://p5js.org/reference/#/p5/point",
		"code": "point(30, 20);\npoint(85, 20);\npoint(85, 75);\npoint(30, 75);",
		"id": "point__0",
		"name": "point I"
	},
	"point__1": {
		"link": "https://p5js.org/reference/#/p5/point",
		"code": "point(30, 20);\npoint(85, 20);\nstroke('purple'); // Change the color\nstrokeWeight(10); // Make the points 10 pixels in size\npoint(85, 75);\npoint(30, 75);",
		"id": "point__1",
		"name": "point II"
	},
	"point__2": {
		"link": "https://p5js.org/reference/#/p5/point",
		"code": "let a = createVector(10, 10);\npoint(a);\nlet b = createVector(10, 20);\npoint(b);\npoint(createVector(20, 10));\npoint(createVector(20, 20));",
		"id": "point__2",
		"name": "point III"
	},
	"quad": {
		"link": "https://p5js.org/reference/#/p5/quad",
		"code": "quad(38, 31, 86, 20, 69, 63, 30, 76);",
		"id": "quad",
		"name": "quad"
	},
	"rect__0": {
		"link": "https://p5js.org/reference/#/p5/rect",
		"code": "// Draw a rectangle at location (30, 20) with a width and height of 55.\nrect(30, 20, 55, 55);",
		"id": "rect__0",
		"name": "rect I"
	},
	"rect__1": {
		"link": "https://p5js.org/reference/#/p5/rect",
		"code": "// Draw a rectangle with rounded corners, each having a radius of 20.\nrect(30, 20, 55, 55, 20);",
		"id": "rect__1",
		"name": "rect II"
	},
	"rect__2": {
		"link": "https://p5js.org/reference/#/p5/rect",
		"code": "// Draw a rectangle with rounded corners having the following radii:\n// top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.\nrect(30, 20, 55, 55, 20, 15, 10, 5);",
		"id": "rect__2",
		"name": "rect III"
	},
	"square__0": {
		"link": "https://p5js.org/reference/#/p5/square",
		"code": "// Draw a square at location (30, 20) with a side size of 55.\nsquare(30, 20, 55);",
		"id": "square__0",
		"name": "square I"
	},
	"square__1": {
		"link": "https://p5js.org/reference/#/p5/square",
		"code": "// Draw a square with rounded corners, each having a radius of 20.\nsquare(30, 20, 55, 20);",
		"id": "square__1",
		"name": "square II"
	},
	"square__2": {
		"link": "https://p5js.org/reference/#/p5/square",
		"code": "// Draw a square with rounded corners having the following radii:\n// top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.\nsquare(30, 20, 55, 20, 15, 10, 5);",
		"id": "square__2",
		"name": "square III"
	},
	"triangle": {
		"link": "https://p5js.org/reference/#/p5/triangle",
		"code": "triangle(30, 75, 58, 20, 86, 75);",
		"id": "triangle",
		"name": "triangle"
	},
	"ellipseMode__0": {
		"link": "https://p5js.org/reference/#/p5/ellipseMode",
		"code": "// Example showing RADIUS and CENTER ellipsemode with 2 overlaying ellipses\nellipseMode(RADIUS);\nfill(255);\nellipse(50, 50, 30, 30); // Outer white ellipse\nellipseMode(CENTER);\nfill(100);\nellipse(50, 50, 30, 30); // Inner gray ellipse",
		"id": "ellipseMode__0",
		"name": "ellipseMode I"
	},
	"ellipseMode__1": {
		"link": "https://p5js.org/reference/#/p5/ellipseMode",
		"code": "// Example showing CORNER and CORNERS ellipseMode with 2 overlaying ellipses\nellipseMode(CORNER);\nfill(255);\nellipse(25, 25, 50, 50); // Outer white ellipse\nellipseMode(CORNERS);\nfill(100);\nellipse(25, 25, 50, 50); // Inner gray ellipse",
		"id": "ellipseMode__1",
		"name": "ellipseMode II"
	},
	"rectMode__0": {
		"link": "https://p5js.org/reference/#/p5/rectMode",
		"code": "rectMode(CORNER);\nfill(255);\nrect(25, 25, 50, 50); // Draw white rectangle using CORNER mode\n\nrectMode(CORNERS);\nfill(100);\nrect(25, 25, 50, 50); // Draw gray rectanle using CORNERS mode",
		"id": "rectMode__0",
		"name": "rectMode I"
	},
	"rectMode__1": {
		"link": "https://p5js.org/reference/#/p5/rectMode",
		"code": "rectMode(RADIUS);\nfill(255);\nrect(50, 50, 30, 30); // Draw white rectangle using RADIUS mode\n\nrectMode(CENTER);\nfill(100);\nrect(50, 50, 30, 30); // Draw gray rectangle using CENTER mode",
		"id": "rectMode__1",
		"name": "rectMode II"
	},
	"strokeCap": {
		"link": "https://p5js.org/reference/#/p5/strokeCap",
		"code": "// Example of different strokeCaps\nstrokeWeight(12.0);\nstrokeCap(ROUND);\nline(20, 30, 80, 30);\nstrokeCap(SQUARE);\nline(20, 50, 80, 50);\nstrokeCap(PROJECT);\nline(20, 70, 80, 70);",
		"id": "strokeCap",
		"name": "strokeCap"
	},
	"strokeJoin__0": {
		"link": "https://p5js.org/reference/#/p5/strokeJoin",
		"code": "// Example of MITER type of joints\nnoFill();\nstrokeWeight(10.0);\nstrokeJoin(MITER);\nbeginShape();\nvertex(35, 20);\nvertex(65, 50);\nvertex(35, 80);\nendShape();",
		"id": "strokeJoin__0",
		"name": "strokeJoin I"
	},
	"strokeJoin__1": {
		"link": "https://p5js.org/reference/#/p5/strokeJoin",
		"code": "// Example of BEVEL type of joints\nnoFill();\nstrokeWeight(10.0);\nstrokeJoin(BEVEL);\nbeginShape();\nvertex(35, 20);\nvertex(65, 50);\nvertex(35, 80);\nendShape();",
		"id": "strokeJoin__1",
		"name": "strokeJoin II"
	},
	"strokeJoin__2": {
		"link": "https://p5js.org/reference/#/p5/strokeJoin",
		"code": "// Example of ROUND type of joints\nnoFill();\nstrokeWeight(10.0);\nstrokeJoin(ROUND);\nbeginShape();\nvertex(35, 20);\nvertex(65, 50);\nvertex(35, 80);\nendShape();",
		"id": "strokeJoin__2",
		"name": "strokeJoin III"
	},
	"strokeWeight": {
		"link": "https://p5js.org/reference/#/p5/strokeWeight",
		"code": "// Example of different stroke weights\nstrokeWeight(1); // Default\nline(20, 20, 80, 20);\nstrokeWeight(4); // Thicker\nline(20, 40, 80, 40);\nstrokeWeight(10); // Beastly\nline(20, 70, 80, 70);",
		"id": "strokeWeight",
		"name": "strokeWeight"
	},
	"bezier": {
		"link": "https://p5js.org/reference/#/p5/bezier",
		"code": "noFill();\nstroke(255, 102, 0);\nline(85, 20, 10, 10);\nline(90, 90, 15, 80);\nstroke(0, 0, 0);\nbezier(85, 20, 10, 10, 90, 90, 15, 80);",
		"id": "bezier",
		"name": "bezier"
	},
	"bezierPoint": {
		"link": "https://p5js.org/reference/#/p5/bezierPoint",
		"code": "noFill();\nlet x1 = 85,\n x2 = 10,\n x3 = 90,\n x4 = 15;\nlet y1 = 20,\n y2 = 10,\n y3 = 90,\n y4 = 80;\nbezier(x1, y1, x2, y2, x3, y3, x4, y4);\nfill(255);\nlet steps = 10;\nfor (let i = 0; i <= steps; i++) {\n  let t = i / steps;\n  let x = bezierPoint(x1, x2, x3, x4, t);\n  let y = bezierPoint(y1, y2, y3, y4, t);\n  circle(x, y, 5);\n}",
		"id": "bezierPoint",
		"name": "bezierPoint"
	},
	"bezierTangent__0": {
		"link": "https://p5js.org/reference/#/p5/bezierTangent",
		"code": "noFill();\nbezier(85, 20, 10, 10, 90, 90, 15, 80);\nlet steps = 6;\nfill(255);\nfor (let i = 0; i <= steps; i++) {\n  let t = i / steps;\n  // Get the location of the point\n  let x = bezierPoint(85, 10, 90, 15, t);\n  let y = bezierPoint(20, 10, 90, 80, t);\n  // Get the tangent points\n  let tx = bezierTangent(85, 10, 90, 15, t);\n  let ty = bezierTangent(20, 10, 90, 80, t);\n  // Calculate an angle from the tangent points\n  let a = atan2(ty, tx);\n  a += PI;\n  stroke(255, 102, 0);\n  line(x, y, cos(a) * 30 + x, sin(a) * 30 + y);\n  // The following line of code makes a line\n  // inverse of the above line\n  //line(x, y, cos(a)*-30 + x, sin(a)*-30 + y);\n  stroke(0);\n  ellipse(x, y, 5, 5);\n}",
		"id": "bezierTangent__0",
		"name": "bezierTangent I"
	},
	"bezierTangent__1": {
		"link": "https://p5js.org/reference/#/p5/bezierTangent",
		"code": "noFill();\nbezier(85, 20, 10, 10, 90, 90, 15, 80);\nstroke(255, 102, 0);\nlet steps = 16;\nfor (let i = 0; i <= steps; i++) {\n  let t = i / steps;\n  let x = bezierPoint(85, 10, 90, 15, t);\n  let y = bezierPoint(20, 10, 90, 80, t);\n  let tx = bezierTangent(85, 10, 90, 15, t);\n  let ty = bezierTangent(20, 10, 90, 80, t);\n  let a = atan2(ty, tx);\n  a -= HALF_PI;\n  line(x, y, cos(a) * 8 + x, sin(a) * 8 + y);\n}",
		"id": "bezierTangent__1",
		"name": "bezierTangent II"
	},
	"curve__0": {
		"link": "https://p5js.org/reference/#/p5/curve",
		"code": "noFill();\nstroke(255, 102, 0);\ncurve(5, 26, 5, 26, 73, 24, 73, 61);\nstroke(0);\ncurve(5, 26, 73, 24, 73, 61, 15, 65);\nstroke(255, 102, 0);\ncurve(73, 24, 73, 61, 15, 65, 15, 65);",
		"id": "curve__0",
		"name": "curve I"
	},
	"curve__1": {
		"link": "https://p5js.org/reference/#/p5/curve",
		"code": "// Define the curve points as JavaScript objects\nlet p1 = { x: 5, y: 26 };\nlet p2 = { x: 73, y: 24 };\nlet p3 = { x: 73, y: 61 };\nlet p4 = { x: 15, y: 65 };\nnoFill();\nstroke(255, 102, 0);\ncurve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);\nstroke(0);\ncurve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);\nstroke(255, 102, 0);\ncurve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);",
		"id": "curve__1",
		"name": "curve II"
	},
	"curve__2": {
		"link": "https://p5js.org/reference/#/p5/curve",
		"code": "noFill();\nstroke(255, 102, 0);\ncurve(5, 26, 0, 5, 26, 0, 73, 24, 0, 73, 61, 0);\nstroke(0);\ncurve(5, 26, 0, 73, 24, 0, 73, 61, 0, 15, 65, 0);\nstroke(255, 102, 0);\ncurve(73, 24, 0, 73, 61, 0, 15, 65, 0, 15, 65, 0);",
		"id": "curve__2",
		"name": "curve III"
	},
	"curveTightness": {
		"link": "https://p5js.org/reference/#/p5/curveTightness",
		"code": "// Move the mouse left and right to see the curve change\nfunction setup() {\n  createCanvas(100, 100);\n  noFill();\n}\n\nfunction draw() {\n  background(204);\n  let t = map(mouseX, 0, width, -5, 5);\n  curveTightness(t);\n  beginShape();\n  curveVertex(10, 26);\n  curveVertex(10, 26);\n  curveVertex(83, 24);\n  curveVertex(83, 61);\n  curveVertex(25, 65);\n  curveVertex(25, 65);\n  endShape();\n}",
		"id": "curveTightness",
		"name": "curveTightness"
	},
	"curvePoint": {
		"link": "https://p5js.org/reference/#/p5/curvePoint",
		"code": "noFill();\ncurve(5, 26, 5, 26, 73, 24, 73, 61);\ncurve(5, 26, 73, 24, 73, 61, 15, 65);\nfill(255);\nellipseMode(CENTER);\nlet steps = 6;\nfor (let i = 0; i <= steps; i++) {\n  let t = i / steps;\n  let x = curvePoint(5, 5, 73, 73, t);\n  let y = curvePoint(26, 26, 24, 61, t);\n  ellipse(x, y, 5, 5);\n  x = curvePoint(5, 73, 73, 15, t);\n  y = curvePoint(26, 24, 61, 65, t);\n  ellipse(x, y, 5, 5);\n}",
		"id": "curvePoint",
		"name": "curvePoint"
	},
	"curveTangent": {
		"link": "https://p5js.org/reference/#/p5/curveTangent",
		"code": "noFill();\ncurve(5, 26, 73, 24, 73, 61, 15, 65);\nlet steps = 6;\nfor (let i = 0; i <= steps; i++) {\n  let t = i / steps;\n  let x = curvePoint(5, 73, 73, 15, t);\n  let y = curvePoint(26, 24, 61, 65, t);\n  //ellipse(x, y, 5, 5);\n  let tx = curveTangent(5, 73, 73, 15, t);\n  let ty = curveTangent(26, 24, 61, 65, t);\n  let a = atan2(ty, tx);\n  a -= PI / 2.0;\n  line(x, y, cos(a) * 8 + x, sin(a) * 8 + y);\n}",
		"id": "curveTangent",
		"name": "curveTangent"
	},
	"beginContour": {
		"link": "https://p5js.org/reference/#/p5/beginContour",
		"code": "translate(50, 50);\nstroke(255, 0, 0);\nbeginShape();\n// Exterior part of shape, clockwise winding\nvertex(-40, -40);\nvertex(40, -40);\nvertex(40, 40);\nvertex(-40, 40);\n// Interior part of shape, counter-clockwise winding\nbeginContour();\nvertex(-20, -20);\nvertex(-20, 20);\nvertex(20, 20);\nvertex(20, -20);\nendContour();\nendShape(CLOSE);",
		"id": "beginContour",
		"name": "beginContour"
	},
	"beginShape": {
		"link": "https://p5js.org/reference/#/p5/beginShape",
		"code": "beginShape();\nvertex(20, 20);\nvertex(40, 20);\nvertex(40, 40);\nvertex(60, 40);\nvertex(60, 60);\nvertex(20, 60);\nendShape(CLOSE);",
		"id": "beginShape",
		"name": "beginShape"
	},
	"bezierVertex__0": {
		"link": "https://p5js.org/reference/#/p5/bezierVertex",
		"code": "noFill();\nbeginShape();\nvertex(30, 20);\nbezierVertex(80, 0, 80, 75, 30, 75);\nendShape();",
		"id": "bezierVertex__0",
		"name": "bezierVertex I"
	},
	"bezierVertex__1": {
		"link": "https://p5js.org/reference/#/p5/bezierVertex",
		"code": "beginShape();\nvertex(30, 20);\nbezierVertex(80, 0, 80, 75, 30, 75);\nbezierVertex(50, 80, 60, 25, 30, 20);\nendShape();",
		"id": "bezierVertex__1",
		"name": "bezierVertex II"
	},
	"curveVertex": {
		"link": "https://p5js.org/reference/#/p5/curveVertex",
		"code": "strokeWeight(5);\npoint(84, 91);\npoint(68, 19);\npoint(21, 17);\npoint(32, 91);\nstrokeWeight(1);\n\nnoFill();\nbeginShape();\ncurveVertex(84, 91);\ncurveVertex(84, 91);\ncurveVertex(68, 19);\ncurveVertex(21, 17);\ncurveVertex(32, 91);\ncurveVertex(32, 91);\nendShape();",
		"id": "curveVertex",
		"name": "curveVertex"
	},
	"endShape": {
		"link": "https://p5js.org/reference/#/p5/endShape",
		"code": "noFill();\n\nbeginShape();\nvertex(20, 20);\nvertex(45, 20);\nvertex(45, 80);\nendShape(CLOSE);\n\nbeginShape();\nvertex(50, 20);\nvertex(75, 20);\nvertex(75, 80);\nendShape();",
		"id": "endShape",
		"name": "endShape"
	},
	"quadraticVertex__0": {
		"link": "https://p5js.org/reference/#/p5/quadraticVertex",
		"code": "strokeWeight(5);\npoint(20, 20);\npoint(80, 20);\npoint(50, 50);\n\nnoFill();\nstrokeWeight(1);\nbeginShape();\nvertex(20, 20);\nquadraticVertex(80, 20, 50, 50);\nendShape();",
		"id": "quadraticVertex__0",
		"name": "quadraticVertex I"
	},
	"quadraticVertex__1": {
		"link": "https://p5js.org/reference/#/p5/quadraticVertex",
		"code": "strokeWeight(5);\npoint(20, 20);\npoint(80, 20);\npoint(50, 50);\n\npoint(20, 80);\npoint(80, 80);\npoint(80, 60);\n\nnoFill();\nstrokeWeight(1);\nbeginShape();\nvertex(20, 20);\nquadraticVertex(80, 20, 50, 50);\nquadraticVertex(20, 80, 80, 80);\nvertex(80, 60);\nendShape();",
		"id": "quadraticVertex__1",
		"name": "quadraticVertex II"
	},
	"vertex": {
		"link": "https://p5js.org/reference/#/p5/vertex",
		"code": "createCanvas(100, 100);\nbackground(240, 240, 240);\nfill(237, 34, 93);\nnoStroke();\ntranslate(50,50);\nbeginShape();\nvertex(-10, 10);\nvertex(0, 35);\nvertex(10, 10);\nvertex(35, 0);\nvertex(10, -8);\nvertex(0, -35);\nvertex(-10, -8);\nvertex(-35, 0);\nendShape();",
		"id": "vertex",
		"name": "vertex"
	},
	"cursor": {
		"link": "https://p5js.org/reference/#/p5/cursor",
		"code": "// Move the mouse across the quadrants\n// to see the cursor change\nfunction draw() {\n  line(width / 2, 0, width / 2, height);\n  line(0, height / 2, width, height / 2);\n  if (mouseX < 50 && mouseY < 50) {\n    cursor(CROSS);\n  } else if (mouseX > 50 && mouseY < 50) {\n    cursor('progress');\n  } else if (mouseX > 50 && mouseY > 50) {\n    cursor('https://avatars0.githubusercontent.com/u/1617169?s=16');\n  } else {\n    cursor('grab');\n  }\n}",
		"id": "cursor",
		"name": "cursor"
	},
	"noCursor": {
		"link": "https://p5js.org/reference/#/p5/noCursor",
		"code": "function setup() {\n  noCursor();\n}\n\nfunction draw() {\n  background(200);\n  ellipse(mouseX, mouseY, 10, 10);\n}",
		"id": "noCursor",
		"name": "noCursor"
	},
	"preload": {
		"link": "https://p5js.org/reference/#/p5/preload",
		"code": "let img;\nlet c;\nfunction preload() {\n  // preload() runs once\n  img = loadImage('assets/laDefense.jpg');\n}\n\nfunction setup() {\n  // setup() waits until preload() is done\n  img.loadPixels();\n  // get color of middle pixel\n  c = img.get(img.width / 2, img.height / 2);\n}\n\nfunction draw() {\n  background(c);\n  image(img, 25, 25, 50, 50);\n}",
		"id": "preload",
		"name": "preload"
	},
	"setup": {
		"link": "https://p5js.org/reference/#/p5/setup",
		"code": "let a = 0;\n\nfunction setup() {\n  background(0);\n  noStroke();\n  fill(102);\n}\n\nfunction draw() {\n  rect(a++ % width, 10, 2, 80);\n}",
		"id": "setup",
		"name": "setup"
	},
	"draw": {
		"link": "https://p5js.org/reference/#/p5/draw",
		"code": "let yPos = 0;\nfunction setup() {\n  // setup() runs once\n  frameRate(30);\n}\nfunction draw() {\n  // draw() loops forever, until stopped\n  background(204);\n  yPos = yPos - 1;\n  if (yPos < 0) {\n    yPos = height;\n  }\n  line(0, yPos, width, yPos);\n}",
		"id": "draw",
		"name": "draw"
	},
	"noLoop__0": {
		"link": "https://p5js.org/reference/#/p5/noLoop",
		"code": "function setup() {\n  createCanvas(100, 100);\n  background(200);\n  noLoop();\n}\n\nfunction draw() {\n  line(10, 10, 90, 90);\n}",
		"id": "noLoop__0",
		"name": "noLoop I"
	},
	"noLoop__1": {
		"link": "https://p5js.org/reference/#/p5/noLoop",
		"code": "let x = 0;\nfunction setup() {\n  createCanvas(100, 100);\n}\n\nfunction draw() {\n  background(204);\n  x = x + 0.1;\n  if (x > width) {\n    x = 0;\n  }\n  line(x, 0, x, height);\n}\n\nfunction mousePressed() {\n  noLoop();\n}\n\nfunction mouseReleased() {\n  loop();\n}",
		"id": "noLoop__1",
		"name": "noLoop II"
	},
	"loop": {
		"link": "https://p5js.org/reference/#/p5/loop",
		"code": "let x = 0;\nfunction setup() {\n  createCanvas(100, 100);\n  noLoop();\n}\n\nfunction draw() {\n  background(204);\n  x = x + 0.1;\n  if (x > width) {\n    x = 0;\n  }\n  line(x, 0, x, height);\n}\n\nfunction mousePressed() {\n  loop();\n}\n\nfunction mouseReleased() {\n  noLoop();\n}",
		"id": "loop",
		"name": "loop"
	},
	"push__0": {
		"link": "https://p5js.org/reference/#/p5/push",
		"code": "ellipse(0, 50, 33, 33); // Left circle\n\npush(); // Start a new drawing state\nstrokeWeight(10);\nfill(204, 153, 0);\ntranslate(50, 0);\nellipse(0, 50, 33, 33); // Middle circle\npop(); // Restore original state\n\nellipse(100, 50, 33, 33); // Right circle",
		"id": "push__0",
		"name": "push I"
	},
	"push__1": {
		"link": "https://p5js.org/reference/#/p5/push",
		"code": "ellipse(0, 50, 33, 33); // Left circle\n\npush(); // Start a new drawing state\nstrokeWeight(10);\nfill(204, 153, 0);\nellipse(33, 50, 33, 33); // Left-middle circle\n\npush(); // Start another new drawing state\nstroke(0, 102, 153);\nellipse(66, 50, 33, 33); // Right-middle circle\npop(); // Restore previous state\n\npop(); // Restore original state\n\nellipse(100, 50, 33, 33); // Right circle",
		"id": "push__1",
		"name": "push II"
	},
	"redraw": {
		"link": "https://p5js.org/reference/#/p5/redraw",
		"code": "let x = 0;\n\nfunction setup() {\n  createCanvas(100, 100);\n  noLoop();\n}\n\nfunction draw() {\n  background(204);\n  line(x, 0, x, height);\n}\n\nfunction mousePressed() {\n  x += 1;\n  redraw();\n}",
		"id": "redraw",
		"name": "redraw"
	},
	"createCanvas": {
		"link": "https://p5js.org/reference/#/p5/createCanvas",
		"code": "function setup() {\n  createCanvas(100, 50);\n  background(153);\n  line(0, 0, width, height);\n}",
		"id": "createCanvas",
		"name": "createCanvas"
	},
	"createGraphics": {
		"link": "https://p5js.org/reference/#/p5/createGraphics",
		"code": "let pg;\nfunction setup() {\n  createCanvas(100, 100);\n  pg = createGraphics(100, 100);\n}\n\nfunction draw() {\n  background(200);\n  pg.background(100);\n  pg.noStroke();\n  pg.ellipse(pg.width / 2, pg.height / 2, 50, 50);\n  image(pg, 50, 50);\n  image(pg, 0, 0, 50, 50);\n}",
		"id": "createGraphics",
		"name": "createGraphics"
	},
	"blendMode__0": {
		"link": "https://p5js.org/reference/#/p5/blendMode",
		"code": "blendMode(LIGHTEST);\nstrokeWeight(30);\nstroke(80, 150, 255);\nline(25, 25, 75, 75);\nstroke(255, 50, 50);\nline(75, 25, 25, 75);",
		"id": "blendMode__0",
		"name": "blendMode I"
	},
	"blendMode__1": {
		"link": "https://p5js.org/reference/#/p5/blendMode",
		"code": "blendMode(MULTIPLY);\nstrokeWeight(30);\nstroke(80, 150, 255);\nline(25, 25, 75, 75);\nstroke(255, 50, 50);\nline(75, 25, 25, 75);",
		"id": "blendMode__1",
		"name": "blendMode II"
	},
	"drawingContext": {
		"link": "https://p5js.org/reference/#/p5/drawingContext",
		"code": "function setup() {\n  drawingContext.shadowOffsetX = 5;\n  drawingContext.shadowOffsetY = -5;\n  drawingContext.shadowBlur = 10;\n  drawingContext.shadowColor = 'black';\n  background(200);\n  ellipse(width / 2, height / 2, 50, 50);\n}",
		"id": "drawingContext",
		"name": "drawingContext"
	},
	"applyMatrix__0": {
		"link": "https://p5js.org/reference/#/p5/applyMatrix",
		"code": "function setup() {\n  frameRate(10);\n  rectMode(CENTER);\n}\n\nfunction draw() {\n  let step = frameCount % 20;\n  background(200);\n  // Equivalent to translate(x, y);\n  applyMatrix(1, 0, 0, 1, 40 + step, 50);\n  rect(0, 0, 50, 50);\n}",
		"id": "applyMatrix__0",
		"name": "applyMatrix I"
	},
	"applyMatrix__1": {
		"link": "https://p5js.org/reference/#/p5/applyMatrix",
		"code": "function setup() {\n  frameRate(10);\n  rectMode(CENTER);\n}\n\nfunction draw() {\n  let step = frameCount % 20;\n  background(200);\n  translate(50, 50);\n  // Equivalent to scale(x, y);\n  applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);\n  rect(0, 0, 50, 50);\n}",
		"id": "applyMatrix__1",
		"name": "applyMatrix II"
	},
	"applyMatrix__2": {
		"link": "https://p5js.org/reference/#/p5/applyMatrix",
		"code": "function setup() {\n  frameRate(10);\n  rectMode(CENTER);\n}\n\nfunction draw() {\n  let step = frameCount % 20;\n  let angle = map(step, 0, 20, 0, TWO_PI);\n  let cos_a = cos(angle);\n  let sin_a = sin(angle);\n  background(200);\n  translate(50, 50);\n  // Equivalent to rotate(angle);\n  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);\n  rect(0, 0, 50, 50);\n}",
		"id": "applyMatrix__2",
		"name": "applyMatrix III"
	},
	"applyMatrix__3": {
		"link": "https://p5js.org/reference/#/p5/applyMatrix",
		"code": "function setup() {\n  frameRate(10);\n  rectMode(CENTER);\n}\n\nfunction draw() {\n  let step = frameCount % 20;\n  let angle = map(step, 0, 20, -PI / 4, PI / 4);\n  background(200);\n  translate(50, 50);\n  // equivalent to shearX(angle);\n  let shear_factor = 1 / tan(PI / 2 - angle);\n  applyMatrix(1, 0, shear_factor, 1, 0, 0);\n  rect(0, 0, 50, 50);\n}",
		"id": "applyMatrix__3",
		"name": "applyMatrix IV"
	},
	"resetMatrix": {
		"link": "https://p5js.org/reference/#/p5/resetMatrix",
		"code": "translate(50, 50);\napplyMatrix(0.5, 0.5, -0.5, 0.5, 0, 0);\nrect(0, 0, 20, 20);\n// Note that the translate is also reset.\nresetMatrix();\nrect(0, 0, 20, 20);",
		"id": "resetMatrix",
		"name": "resetMatrix"
	},
	"rotate": {
		"link": "https://p5js.org/reference/#/p5/rotate",
		"code": "translate(width / 2, height / 2);\nrotate(PI / 3.0);\nrect(-26, -26, 52, 52);",
		"id": "rotate",
		"name": "rotate"
	},
	"scale": {
		"link": "https://p5js.org/reference/#/p5/scale",
		"code": "rect(30, 20, 50, 50);\nscale(0.5);\nrect(30, 20, 50, 50);",
		"id": "scale",
		"name": "scale"
	},
	"shearX": {
		"link": "https://p5js.org/reference/#/p5/shearX",
		"code": "translate(width / 4, height / 4);\nshearX(PI / 4.0);\nrect(0, 0, 30, 30);",
		"id": "shearX",
		"name": "shearX"
	},
	"shearY": {
		"link": "https://p5js.org/reference/#/p5/shearY",
		"code": "translate(width / 4, height / 4);\nshearY(PI / 4.0);\nrect(0, 0, 30, 30);",
		"id": "shearY",
		"name": "shearY"
	},
	"translate__0": {
		"link": "https://p5js.org/reference/#/p5/translate",
		"code": "translate(30, 20);\nrect(0, 0, 55, 55);",
		"id": "translate__0",
		"name": "translate I"
	},
	"translate__1": {
		"link": "https://p5js.org/reference/#/p5/translate",
		"code": "rect(0, 0, 55, 55); // Draw rect at original 0,0\ntranslate(30, 20);\nrect(0, 0, 55, 55); // Draw rect at new 0,0\ntranslate(14, 14);\nrect(0, 0, 55, 55); // Draw rect at new 0,0",
		"id": "translate__1",
		"name": "translate II"
	},
	"translate__2": {
		"link": "https://p5js.org/reference/#/p5/translate",
		"code": "function draw() {\n  background(200);\n  rectMode(CENTER);\n  translate(width / 2, height / 2);\n  translate(p5.Vector.fromAngle(millis() / 1000, 40));\n  rect(0, 0, 20, 20);\n}",
		"id": "translate__2",
		"name": "translate III"
	},
	"keyIsPressed": {
		"link": "https://p5js.org/reference/#/p5/keyIsPressed",
		"code": "function draw() {\n  if (keyIsPressed === true) {\n    fill(0);\n  } else {\n    fill(255);\n  }\n  rect(25, 25, 50, 50);\n}",
		"id": "keyIsPressed",
		"name": "keyIsPressed"
	},
	"key": {
		"link": "https://p5js.org/reference/#/p5/key",
		"code": "// Click any key to display it!\n// (Not Guaranteed to be Case Sensitive)\nfunction setup() {\n  fill(245, 123, 158);\n  textSize(50);\n}\n\nfunction draw() {\n  background(200);\n  text(key, 33, 65); // Display last key pressed.\n}",
		"id": "key",
		"name": "key"
	},
	"keyCode__0": {
		"link": "https://p5js.org/reference/#/p5/keyCode",
		"code": "let fillVal = 126;\nfunction draw() {\n  fill(fillVal);\n  rect(25, 25, 50, 50);\n}\n\nfunction keyPressed() {\n  if (keyCode === UP_ARROW) {\n    fillVal = 255;\n  } else if (keyCode === DOWN_ARROW) {\n    fillVal = 0;\n  }\n  return false; // prevent default\n}",
		"id": "keyCode__0",
		"name": "keyCode I"
	},
	"keyCode__1": {
		"link": "https://p5js.org/reference/#/p5/keyCode",
		"code": "function draw() {}\nfunction keyPressed() {\n  background('yellow');\n  noStroke();\n  fill(0);\n  text(`${key} ${keyCode}`, 10, 40);\n  print(key, ' ', keyCode);\n  return false; // prevent default\n}",
		"id": "keyCode__1",
		"name": "keyCode II"
	},
	"keyPressed__0": {
		"link": "https://p5js.org/reference/#/p5/keyPressed",
		"code": "let value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction keyPressed() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}",
		"id": "keyPressed__0",
		"name": "keyPressed I"
	},
	"keyPressed__1": {
		"link": "https://p5js.org/reference/#/p5/keyPressed",
		"code": "let value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction keyPressed() {\n  if (keyCode === LEFT_ARROW) {\n    value = 255;\n  } else if (keyCode === RIGHT_ARROW) {\n    value = 0;\n  }\n}",
		"id": "keyPressed__1",
		"name": "keyPressed II"
	},
	"keyReleased": {
		"link": "https://p5js.org/reference/#/p5/keyReleased",
		"code": "let value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction keyReleased() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n  return false; // prevent any default behavior\n}",
		"id": "keyReleased",
		"name": "keyReleased"
	},
	"keyIsDown__0": {
		"link": "https://p5js.org/reference/#/p5/keyIsDown",
		"code": "let x = 50;\nlet y = 50;\n\nfunction setup() {\n  createCanvas(100, 100);\n  fill(255, 0, 0);\n}\n\nfunction draw() {\n  if (keyIsDown(LEFT_ARROW)) {\n    x -= 5;\n  }\n\n  if (keyIsDown(RIGHT_ARROW)) {\n    x += 5;\n  }\n\n  if (keyIsDown(UP_ARROW)) {\n    y -= 5;\n  }\n\n  if (keyIsDown(DOWN_ARROW)) {\n    y += 5;\n  }\n\n  clear();\n  ellipse(x, y, 50, 50);\n}",
		"id": "keyIsDown__0",
		"name": "keyIsDown I"
	},
	"keyIsDown__1": {
		"link": "https://p5js.org/reference/#/p5/keyIsDown",
		"code": "let diameter = 50;\n\nfunction setup() {\n  createCanvas(100, 100);\n}\n\nfunction draw() {\n  // 107 and 187 are keyCodes for \"+\"\n  if (keyIsDown(107) || keyIsDown(187)) {\n    diameter += 1;\n  }\n\n  // 109 and 189 are keyCodes for \"-\"\n  if (keyIsDown(109) || keyIsDown(189)) {\n    diameter -= 1;\n  }\n\n  clear();\n  fill(255, 0, 0);\n  ellipse(50, 50, diameter, diameter);\n}",
		"id": "keyIsDown__1",
		"name": "keyIsDown II"
	},
	"mouseX": {
		"link": "https://p5js.org/reference/#/p5/mouseX",
		"code": "// Move the mouse across the canvas\nfunction draw() {\n  background(244, 248, 252);\n  line(mouseX, 0, mouseX, 100);\n}",
		"id": "mouseX",
		"name": "mouseX"
	},
	"mouseY": {
		"link": "https://p5js.org/reference/#/p5/mouseY",
		"code": "// Move the mouse across the canvas\nfunction draw() {\n  background(244, 248, 252);\n  line(0, mouseY, 100, mouseY);\n}",
		"id": "mouseY",
		"name": "mouseY"
	},
	"pmouseX": {
		"link": "https://p5js.org/reference/#/p5/pmouseX",
		"code": "// Move the mouse across the canvas to leave a trail\nfunction setup() {\n\n}\n\nfunction draw() {\n  background(244, 248, 252);\n  line(mouseX, mouseY, pmouseX, pmouseY);\n  print(window.pmouseX + ' -> ' + window.mouseX);\n}",
		"id": "pmouseX",
		"name": "pmouseX"
	},
	"pmouseY": {
		"link": "https://p5js.org/reference/#/p5/pmouseY",
		"code": "function draw() {\n  background(237, 34, 93);\n  fill(0);\n  //draw a square only if the mouse is not moving\n  if (mouseY === pmouseY && mouseX === pmouseX) {\n    rect(20, 20, 60, 60);\n  }\n\n  print(pmouseY + ' -> ' + mouseY);\n}",
		"id": "pmouseY",
		"name": "pmouseY"
	},
	"mouseButton": {
		"link": "https://p5js.org/reference/#/p5/mouseButton",
		"code": "function draw() {\n  background(237, 34, 93);\n  fill(0);\n\n  if (mouseIsPressed) {\n    if (mouseButton === LEFT) {\n      ellipse(50, 50, 50, 50);\n    }\n    if (mouseButton === RIGHT) {\n      rect(25, 25, 50, 50);\n    }\n    if (mouseButton === CENTER) {\n      triangle(23, 75, 50, 20, 78, 75);\n    }\n  }\n\n  print(mouseButton);\n}",
		"id": "mouseButton",
		"name": "mouseButton"
	},
	"mouseIsPressed": {
		"link": "https://p5js.org/reference/#/p5/mouseIsPressed",
		"code": "function draw() {\n  background(237, 34, 93);\n  fill(0);\n\n  if (mouseIsPressed) {\n    ellipse(50, 50, 50, 50);\n  } else {\n    rect(25, 25, 50, 50);\n  }\n\n  print(mouseIsPressed);\n}",
		"id": "mouseIsPressed",
		"name": "mouseIsPressed"
	},
	"mouseMoved": {
		"link": "https://p5js.org/reference/#/p5/mouseMoved",
		"code": "// Move the mouse across the page\n// to change its value\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction mouseMoved() {\n  value = value + 5;\n  if (value > 255) {\n    value = 0;\n  }\n}",
		"id": "mouseMoved",
		"name": "mouseMoved"
	},
	"mouseDragged": {
		"link": "https://p5js.org/reference/#/p5/mouseDragged",
		"code": "// Drag the mouse across the page\n// to change its value\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction mouseDragged() {\n  value = value + 5;\n  if (value > 255) {\n    value = 0;\n  }\n}",
		"id": "mouseDragged",
		"name": "mouseDragged"
	},
	"mousePressed": {
		"link": "https://p5js.org/reference/#/p5/mousePressed",
		"code": "// Click within the image to change\n// the value of the rectangle\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction mousePressed() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}",
		"id": "mousePressed",
		"name": "mousePressed"
	},
	"mouseReleased": {
		"link": "https://p5js.org/reference/#/p5/mouseReleased",
		"code": "// Click within the image to change\n// the value of the rectangle\n// after the mouse has been clicked\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction mouseReleased() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}",
		"id": "mouseReleased",
		"name": "mouseReleased"
	},
	"mouseClicked": {
		"link": "https://p5js.org/reference/#/p5/mouseClicked",
		"code": "// Click within the image to change\n// the value of the rectangle\n// after the mouse has been clicked\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\n\nfunction mouseClicked() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}",
		"id": "mouseClicked",
		"name": "mouseClicked"
	},
	"touches": {
		"link": "https://p5js.org/reference/#/p5/touches",
		"code": "// On a touchscreen device, touch\n// the canvas using one or more fingers\n// at the same time\nfunction draw() {\n  clear();\n  let display = touches.length + ' touches';\n  text(display, 5, 10);\n}",
		"id": "touches",
		"name": "touches"
	},
	"touchStarted": {
		"link": "https://p5js.org/reference/#/p5/touchStarted",
		"code": "// Touch within the image to change\n// the value of the rectangle\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction touchStarted() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}",
		"id": "touchStarted",
		"name": "touchStarted"
	},
	"touchMoved": {
		"link": "https://p5js.org/reference/#/p5/touchMoved",
		"code": "// Move your finger across the page\n// to change its value\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction touchMoved() {\n  value = value + 5;\n  if (value > 255) {\n    value = 0;\n  }\n}",
		"id": "touchMoved",
		"name": "touchMoved"
	},
	"touchEnded": {
		"link": "https://p5js.org/reference/#/p5/touchEnded",
		"code": "// Release touch within the image to\n// change the value of the rectangle\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction touchEnded() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}",
		"id": "touchEnded",
		"name": "touchEnded"
	},
	"createImage__0": {
		"link": "https://p5js.org/reference/#/p5/createImage",
		"code": "let img = createImage(66, 66);\nimg.loadPixels();\nfor (let i = 0; i < img.width; i++) {\n  for (let j = 0; j < img.height; j++) {\n    img.set(i, j, color(0, 90, 102));\n  }\n}\nimg.updatePixels();\nimage(img, 17, 17);",
		"id": "createImage__0",
		"name": "createImage I"
	},
	"createImage__1": {
		"link": "https://p5js.org/reference/#/p5/createImage",
		"code": "let img = createImage(66, 66);\nimg.loadPixels();\nfor (let i = 0; i < img.width; i++) {\n  for (let j = 0; j < img.height; j++) {\n    img.set(i, j, color(0, 90, 102, (i % img.width) * 2));\n  }\n}\nimg.updatePixels();\nimage(img, 17, 17);\nimage(img, 34, 34);",
		"id": "createImage__1",
		"name": "createImage II"
	},
	"createImage__2": {
		"link": "https://p5js.org/reference/#/p5/createImage",
		"code": "let pink = color(255, 102, 204);\nlet img = createImage(66, 66);\nimg.loadPixels();\nlet d = pixelDensity();\nlet halfImage = 4 * (img.width * d) * (img.height / 2 * d);\nfor (let i = 0; i < halfImage; i += 4) {\n  img.pixels[i] = red(pink);\n  img.pixels[i + 1] = green(pink);\n  img.pixels[i + 2] = blue(pink);\n  img.pixels[i + 3] = alpha(pink);\n}\nimg.updatePixels();\nimage(img, 17, 17);",
		"id": "createImage__2",
		"name": "createImage III"
	},
	"Image": {
		"link": "https://p5js.org/reference/#/p5.Image",
		"code": "function setup() {\n  let img = createImage(100, 100); // same as new p5.Image(100, 100);\n  img.loadPixels();\n  createCanvas(100, 100);\n  background(0);\n\n  // helper for writing color to array\n  function writeColor(image, x, y, red, green, blue, alpha) {\n    let index = (x + y * width) * 4;\n    image.pixels[index] = red;\n    image.pixels[index + 1] = green;\n    image.pixels[index + 2] = blue;\n    image.pixels[index + 3] = alpha;\n  }\n\n  let x, y;\n  // fill with random colors\n  for (y = 0; y < img.height; y++) {\n    for (x = 0; x < img.width; x++) {\n      let red = random(255);\n      let green = random(255);\n      let blue = random(255);\n      let alpha = 255;\n      writeColor(img, x, y, red, green, blue, alpha);\n    }\n  }\n\n  // draw a red line\n  y = 0;\n  for (x = 0; x < img.width; x++) {\n    writeColor(img, x, y, 255, 0, 0, 255);\n  }\n\n  // draw a green line\n  y = img.height - 1;\n  for (x = 0; x < img.width; x++) {\n    writeColor(img, x, y, 0, 255, 0, 255);\n  }\n\n  img.updatePixels();\n  image(img, 0, 0);\n}",
		"id": "Image",
		"name": "Image"
	},
	"Image_loadPixels": {
		"link": "https://p5js.org/reference/#/p5.Image/loadPixels",
		"code": "let myImage;\nlet halfImage;\n\nfunction preload() {\n  myImage = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  myImage.loadPixels();\n  halfImage = 4 * myImage.width * myImage.height / 2;\n  for (let i = 0; i < halfImage; i++) {\n    myImage.pixels[i + halfImage] = myImage.pixels[i];\n  }\n  myImage.updatePixels();\n}\n\nfunction draw() {\n  image(myImage, 0, 0, width, height);\n}",
		"id": "Image_loadPixels",
		"name": "Image/loadPixels"
	},
	"Image_get": {
		"link": "https://p5js.org/reference/#/p5.Image/get",
		"code": "let myImage;\nlet c;\n\nfunction preload() {\n  myImage = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  background(myImage);\n  noStroke();\n  c = myImage.get(60, 90);\n  fill(c);\n  rect(25, 25, 50, 50);\n}\n\n//get() returns color here",
		"id": "Image_get",
		"name": "Image/get"
	},
	"Image_resize": {
		"link": "https://p5js.org/reference/#/p5.Image/resize",
		"code": "let img;\n\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction draw() {\n  image(img, 0, 0);\n}\n\nfunction mousePressed() {\n  img.resize(50, 100);\n}",
		"id": "Image_resize",
		"name": "Image/resize"
	},
	"Image_mask": {
		"link": "https://p5js.org/reference/#/p5.Image/mask",
		"code": "let photo, maskImage;\nfunction preload() {\n  photo = loadImage('assets/rockies.jpg');\n  maskImage = loadImage('assets/mask2.png');\n}\n\nfunction setup() {\n  createCanvas(100, 100);\n  photo.mask(maskImage);\n  image(photo, 0, 0);\n}",
		"id": "Image_mask",
		"name": "Image/mask"
	},
	"Image_filter": {
		"link": "https://p5js.org/reference/#/p5.Image/filter",
		"code": "let photo1;\nlet photo2;\n\nfunction preload() {\n  photo1 = loadImage('assets/rockies.jpg');\n  photo2 = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  photo2.filter(GRAY);\n  image(photo1, 0, 0);\n  image(photo2, width / 2, 0);\n}",
		"id": "Image_filter",
		"name": "Image/filter"
	},
	"Image_save": {
		"link": "https://p5js.org/reference/#/p5.Image/save",
		"code": "let photo;\n\nfunction preload() {\n  photo = loadImage('assets/rockies.jpg');\n}\n\nfunction draw() {\n  image(photo, 0, 0);\n}\n\nfunction keyTyped() {\n  if (key === 's') {\n    photo.save('photo', 'png');\n  }\n}",
		"id": "Image_save",
		"name": "Image/save"
	},
	"pixels": {
		"link": "https://p5js.org/reference/#/p5/pixels",
		"code": "let pink = color(255, 102, 204);\nloadPixels();\nlet d = pixelDensity();\nlet halfImage = 4 * (width * d) * (height / 2 * d);\nfor (let i = 0; i < halfImage; i += 4) {\n  pixels[i] = red(pink);\n  pixels[i + 1] = green(pink);\n  pixels[i + 2] = blue(pink);\n  pixels[i + 3] = alpha(pink);\n}\nupdatePixels();",
		"id": "pixels",
		"name": "pixels"
	},
	"filter__0": {
		"link": "https://p5js.org/reference/#/p5/filter",
		"code": "let img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(THRESHOLD);\n}",
		"id": "filter__0",
		"name": "filter I"
	},
	"filter__1": {
		"link": "https://p5js.org/reference/#/p5/filter",
		"code": "let img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(GRAY);\n}",
		"id": "filter__1",
		"name": "filter II"
	},
	"filter__2": {
		"link": "https://p5js.org/reference/#/p5/filter",
		"code": "let img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(OPAQUE);\n}",
		"id": "filter__2",
		"name": "filter III"
	},
	"filter__3": {
		"link": "https://p5js.org/reference/#/p5/filter",
		"code": "let img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(INVERT);\n}",
		"id": "filter__3",
		"name": "filter IV"
	},
	"filter__4": {
		"link": "https://p5js.org/reference/#/p5/filter",
		"code": "let img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(POSTERIZE, 3);\n}",
		"id": "filter__4",
		"name": "filter V"
	},
	"filter__5": {
		"link": "https://p5js.org/reference/#/p5/filter",
		"code": "let img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(DILATE);\n}",
		"id": "filter__5",
		"name": "filter VI"
	},
	"filter__6": {
		"link": "https://p5js.org/reference/#/p5/filter",
		"code": "let img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(BLUR, 3);\n}",
		"id": "filter__6",
		"name": "filter VII"
	},
	"filter__7": {
		"link": "https://p5js.org/reference/#/p5/filter",
		"code": "let img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(ERODE);\n}",
		"id": "filter__7",
		"name": "filter VIII"
	},
	"filter__8": {
		"link": "https://p5js.org/reference/#/p5/filter",
		"code": "let img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  let c = get();\n  image(c, width / 2, 0);\n}",
		"id": "filter__8",
		"name": "filter IX"
	},
	"get__0": {
		"link": "https://p5js.org/reference/#/p5/get",
		"code": "let img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  let c = get();\n  image(c, width / 2, 0);\n}",
		"id": "get__0",
		"name": "get I"
	},
	"get__1": {
		"link": "https://p5js.org/reference/#/p5/get",
		"code": "let img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  let c = get(50, 90);\n  fill(c);\n  noStroke();\n  rect(25, 25, 50, 50);\n}",
		"id": "get__1",
		"name": "get II"
	},
	"loadPixels": {
		"link": "https://p5js.org/reference/#/p5/loadPixels",
		"code": "let img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  image(img, 0, 0, width, height);\n  let d = pixelDensity();\n  let halfImage = 4 * (width * d) * (height * d / 2);\n  loadPixels();\n  for (let i = 0; i < halfImage; i++) {\n    pixels[i + halfImage] = pixels[i];\n  }\n  updatePixels();\n}",
		"id": "loadPixels",
		"name": "loadPixels"
	},
	"set__0": {
		"link": "https://p5js.org/reference/#/p5/set",
		"code": "loadPixels();\nlet black = color(0);\nset(30, 20, black);\nset(85, 20, black);\nset(85, 75, black);\nset(30, 75, black);\nupdatePixels();",
		"id": "set__0",
		"name": "set I"
	},
	"set__1": {
		"link": "https://p5js.org/reference/#/p5/set",
		"code": "loadPixels();\nfor (let i = 30; i < width - 15; i++) {\n  for (let j = 20; j < height - 25; j++) {\n    let c = color(204 - j, 153 - i, 0);\n    set(i, j, c);\n  }\n}\nupdatePixels();",
		"id": "set__1",
		"name": "set II"
	},
	"set__2": {
		"link": "https://p5js.org/reference/#/p5/set",
		"code": "let img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\ntint(255,0,0,100);\n  set(0, 0, img);\n  updatePixels();\n  line(0, 0, width, height);\n  line(0, height, width, 0);\n}",
		"id": "set__2",
		"name": "set III"
	},
	"createVector": {
		"link": "https://p5js.org/reference/#/p5/createVector",
		"code": "let v1;\nfunction setup() {\n  createCanvas(100, 100);\n  stroke(255, 0, 255);\n  v1 = createVector(width / 2, height / 2);\n}\n\nfunction draw() {\n  background(255);\n  line(v1.x, v1.y, mouseX, mouseY);\n}",
		"id": "createVector",
		"name": "createVector"
	},
	"Vector": {
		"link": "https://p5js.org/reference/#/p5.Vector",
		"code": "let v1 = createVector(40, 50);\nlet v2 = createVector(40, 50);\n\nellipse(v1.x, v1.y, 50, 50);\nellipse(v2.x, v2.y, 50, 50);\nv1.add(v2);\nellipse(v1.x, v1.y, 50, 50);",
		"id": "Vector",
		"name": "Vector"
	},
	"Vector_toString": {
		"link": "https://p5js.org/reference/#/p5.Vector/toString",
		"code": "function draw() {\n  background(240);\n\n  let v0 = createVector(0, 0);\n  let v1 = createVector(mouseX, mouseY);\n  drawArrow(v0, v1, color(0));\n\n  noStroke();\n  fill(0);\n  text(v1.toString(), 10, 25, 90, 75);\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_toString",
		"name": "Vector/toString"
	},
	"Vector_set": {
		"link": "https://p5js.org/reference/#/p5.Vector/set",
		"code": "let v0, v1;\nfunction setup() {\n  createCanvas(100, 100);\n\n  v0 = createVector(0, 0);\n  v1 = createVector(50, 50);\n}\n\nfunction draw() {\n  background(240);\n\n  drawArrow(v0, v1, 'black');\n  v1.set(v1.x + random(-1, 1), v1.y + random(-1, 1));\n\n  noStroke();\n  fill(0);\n  text('x: ' + round(v1.x) + ' y: ' + round(v1.y), 20, 90);\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_set",
		"name": "Vector/set"
	},
	"Vector_add": {
		"link": "https://p5js.org/reference/#/p5.Vector/add",
		"code": "// red vector + blue vector = purple vector\nfunction draw() {\n  background(240);\n\n  let v0 = createVector(0, 0);\n  let v1 = createVector(mouseX, mouseY);\n  drawArrow(v0, v1, 'red');\n\n  let v2 = createVector(-30, 20);\n  drawArrow(v1, v2, 'blue');\n\n  let v3 = p5.Vector.add(v1, v2);\n  drawArrow(v0, v3, 'purple');\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_add",
		"name": "Vector/add"
	},
	"Vector_sub": {
		"link": "https://p5js.org/reference/#/p5.Vector/sub",
		"code": "// red vector - blue vector = purple vector\nfunction draw() {\n  background(240);\n\n  let v0 = createVector(0, 0);\n  let v1 = createVector(70, 50);\n  drawArrow(v0, v1, 'red');\n\n  let v2 = createVector(mouseX, mouseY);\n  drawArrow(v0, v2, 'blue');\n\n  let v3 = p5.Vector.sub(v1, v2);\n  drawArrow(v2, v3, 'purple');\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_sub",
		"name": "Vector/sub"
	},
	"Vector_mult": {
		"link": "https://p5js.org/reference/#/p5.Vector/mult",
		"code": "function draw() {\n  background(240);\n\n  let v0 = createVector(50, 50);\n  let v1 = createVector(25, -25);\n  drawArrow(v0, v1, 'red');\n\n  let num = map(mouseX, 0, width, -2, 2, true);\n  let v2 = p5.Vector.mult(v1, num);\n  drawArrow(v0, v2, 'blue');\n\n  noStroke();\n  fill(0);\n  text('multiplied by ' + num.toFixed(2), 5, 90);\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_mult",
		"name": "Vector/mult"
	},
	"Vector_div": {
		"link": "https://p5js.org/reference/#/p5.Vector/div",
		"code": "function draw() {\n  background(240);\n\n  let v0 = createVector(0, 100);\n  let v1 = createVector(50, -50);\n  drawArrow(v0, v1, 'red');\n\n  let num = map(mouseX, 0, width, 10, 0.5, true);\n  let v2 = p5.Vector.div(v1, num);\n  drawArrow(v0, v2, 'blue');\n\n  noStroke();\n  fill(0);\n  text('divided by ' + num.toFixed(2), 10, 90);\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_div",
		"name": "Vector/div"
	},
	"Vector_mag": {
		"link": "https://p5js.org/reference/#/p5.Vector/mag",
		"code": "function draw() {\n  background(240);\n\n  let v0 = createVector(0, 0);\n  let v1 = createVector(mouseX, mouseY);\n  drawArrow(v0, v1, 'black');\n\n  noStroke();\n  fill(0);\n  text('vector length: \\n' + v1.mag().toFixed(2), 10, 70);\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_mag",
		"name": "Vector/mag"
	},
	"Vector_magSq": {
		"link": "https://p5js.org/reference/#/p5.Vector/magSq",
		"code": "function draw() {\n  background(240);\n\n  let v0 = createVector(0, 0);\n  let v1 = createVector(mouseX, mouseY);\n  drawArrow(v0, v1, 'black');\n\n  noStroke();\n  fill(0);\n  text('vector length squared: \\n' + v1.magSq().toFixed(2), 10, 45);\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_magSq",
		"name": "Vector/magSq"
	},
	"Vector_dist": {
		"link": "https://p5js.org/reference/#/p5.Vector/dist",
		"code": "function draw() {\n  background(240);\n\n  let v0 = createVector(0, 0);\n\n  let v1 = createVector(70, 50);\n  drawArrow(v0, v1, 'red');\n\n  let v2 = createVector(mouseX, mouseY);\n  drawArrow(v0, v2, 'blue');\n\n  noStroke();\n  fill(0);\n  text('distance between vectors: \\n' + v2.dist(v1).toFixed(2), 5, 50);\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_dist",
		"name": "Vector/dist"
	},
	"Vector_normalize": {
		"link": "https://p5js.org/reference/#/p5.Vector/normalize",
		"code": "function draw() {\n  background(240);\n\n  let v0 = createVector(50, 50);\n  let v1 = createVector(mouseX - 50, mouseY - 50);\n\n  drawArrow(v0, v1, 'red');\n  v1.normalize();\n  drawArrow(v0, v1.mult(35), 'blue');\n\n  noFill();\n  ellipse(50, 50, 35 * 2);\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_normalize",
		"name": "Vector/normalize"
	},
	"Vector_limit": {
		"link": "https://p5js.org/reference/#/p5.Vector/limit",
		"code": "function draw() {\n  background(240);\n\n  let v0 = createVector(50, 50);\n  let v1 = createVector(mouseX - 50, mouseY - 50);\n\n  drawArrow(v0, v1, 'red');\n  drawArrow(v0, v1.limit(35), 'blue');\n\n  noFill();\n  ellipse(50, 50, 35 * 2);\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_limit",
		"name": "Vector/limit"
	},
	"Vector_setMag": {
		"link": "https://p5js.org/reference/#/p5.Vector/setMag",
		"code": "function draw() {\n  background(240);\n\n  let v0 = createVector(0, 0);\n  let v1 = createVector(50, 50);\n\n  drawArrow(v0, v1, 'red');\n\n  let length = map(mouseX, 0, width, 0, 141, true);\n  v1.setMag(length);\n  drawArrow(v0, v1, 'blue');\n\n  noStroke();\n  fill(0);\n  text('magnitude set to: \\n' + length.toFixed(2), 10, 70);\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_setMag",
		"name": "Vector/setMag"
	},
	"Vector_heading": {
		"link": "https://p5js.org/reference/#/p5.Vector/heading",
		"code": "function draw() {\n  background(240);\n\n  let v0 = createVector(50, 50);\n  let v1 = createVector(mouseX - 50, mouseY - 50);\n\n  drawArrow(v0, v1, 'black');\n\n  let myHeading = v1.heading();\n  noStroke();\n  fill(0);\n  text(\n    'vector heading: \\n' +\n      myHeading.toFixed(2) +\n      ' radians or \\n' +\n      degrees(myHeading).toFixed(2) +\n      ' degrees',\n    10,\n    50,\n  );\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_heading",
		"name": "Vector/heading"
	},
	"Vector_rotate": {
		"link": "https://p5js.org/reference/#/p5.Vector/rotate",
		"code": "let angle = 0;\nfunction draw() {\n  background(240);\n\n  let v0 = createVector(50, 50);\n  let v1 = createVector(50, 0);\n\n  drawArrow(v0, v1.rotate(angle), 'black');\n  angle += 0.01;\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_rotate",
		"name": "Vector/rotate"
	},
	"Vector_angleBetween": {
		"link": "https://p5js.org/reference/#/p5.Vector/angleBetween",
		"code": "function draw() {\n  background(240);\n  let v0 = createVector(50, 50);\n\n  let v1 = createVector(50, 0);\n  drawArrow(v0, v1, 'red');\n\n  let v2 = createVector(mouseX - 50, mouseY - 50);\n  drawArrow(v0, v2, 'blue');\n\n  let angleBetween = v1.angleBetween(v2);\n  noStroke();\n  fill(0);\n  text(\n    'angle between: \\n' +\n      angleBetween.toFixed(2) +\n      '\\n radians or \\n' +\n      degrees(angleBetween).toFixed(2) +\n      ' degrees',\n    10,\n    50,\n  );\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_angleBetween",
		"name": "Vector/angleBetween"
	},
	"Vector_lerp": {
		"link": "https://p5js.org/reference/#/p5.Vector/lerp",
		"code": "let step = 0.01;\nlet amount = 0;\n\nfunction draw() {\n  background(240);\n  let v0 = createVector(0, 0);\n\n  let v1 = createVector(mouseX, mouseY);\n  drawArrow(v0, v1, 'red');\n\n  let v2 = createVector(90, 90);\n  drawArrow(v0, v2, 'blue');\n\n  if (amount > 1 || amount < 0) {\n    step *= -1;\n  }\n  amount += step;\n  let v3 = p5.Vector.lerp(v1, v2, amount);\n\n  drawArrow(v0, v3, 'purple');\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_lerp",
		"name": "Vector/lerp"
	},
	"Vector_reflect": {
		"link": "https://p5js.org/reference/#/p5.Vector/reflect",
		"code": "function draw() {\n  background(240);\n\n  let v0 = createVector(0, 0);\n  let v1 = createVector(mouseX, mouseY);\n  drawArrow(v0, v1, 'red');\n\n  let n = createVector(0, -30);\n  drawArrow(v1, n, 'blue');\n\n  let r = v1.copy();\n  r.reflect(n);\n  drawArrow(v1, r, 'purple');\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_reflect",
		"name": "Vector/reflect"
	},
	"Vector_fromAngle": {
		"link": "https://p5js.org/reference/#/p5.Vector/fromAngle",
		"code": "function draw() {\n  background(200);\n\n  // Create a variable, proportional to the mouseX,\n  // varying from 0-360, to represent an angle in degrees.\n  let myDegrees = map(mouseX, 0, width, 0, 360);\n\n  // Display that variable in an onscreen text.\n  // (Note the nfc() function to truncate additional decimal places,\n  // and the \"\\xB0\" character for the degree symbol.)\n  let readout = 'angle = ' + myDegrees.toFixed(1) + '\\xB0';\n  noStroke();\n  fill(0);\n  text(readout, 5, 15);\n\n  // Create a p5.Vector using the fromAngle function,\n  // and extract its x and y components.\n  let v = p5.Vector.fromAngle(radians(myDegrees), 30);\n  let vx = v.x;\n  let vy = v.y;\n\n  push();\n  translate(width / 2, height / 2);\n  noFill();\n  stroke(150);\n  line(0, 0, 30, 0);\n  stroke(0);\n  line(0, 0, vx, vy);\n  pop();\n}",
		"id": "Vector_fromAngle",
		"name": "Vector/fromAngle"
	},
	"Vector_random2D": {
		"link": "https://p5js.org/reference/#/p5.Vector/random2D",
		"code": "function setup() {\n  frameRate(1);\n}\n\nfunction draw() {\n  background(240);\n\n  let v0 = createVector(50, 50);\n  let v1 = p5.Vector.random2D();\n  drawArrow(v0, v1.mult(50), 'black');\n}\n\n// draw an arrow for a vector at a given base position\nfunction drawArrow(base, vec, myColor) {\n  push();\n  stroke(myColor);\n  strokeWeight(3);\n  fill(myColor);\n  translate(base.x, base.y);\n  line(0, 0, vec.x, vec.y);\n  rotate(vec.heading());\n  let arrowSize = 7;\n  translate(vec.mag() - arrowSize, 0);\n  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);\n  pop();\n}",
		"id": "Vector_random2D",
		"name": "Vector/random2D"
	},
	"textAlign__0": {
		"link": "https://p5js.org/reference/#/p5/textAlign",
		"code": "fill(0);\nnoStroke();\ntextSize(16);\ntextAlign(RIGHT);\ntext('ABCD', 50, 30);\ntextAlign(CENTER);\ntext('EFGH', 50, 50);\ntextAlign(LEFT);\ntext('IJKL', 50, 70);",
		"id": "textAlign__0",
		"name": "textAlign I"
	},
	"textAlign__1": {
		"link": "https://p5js.org/reference/#/p5/textAlign",
		"code": "fill(0);\n\ntextSize(16);\nstrokeWeight(0.5);\n\nline(0, 12, width, 12);\ntextAlign(CENTER, TOP);\ntext('TOP', width/2, 12);\n\nline(0, 37, width, 37);\ntextAlign(CENTER, CENTER);\ntext('CENTER', width/2, 37);\n\nline(0, 62, width, 62);\ntextAlign(CENTER, BASELINE);\ntext('BASELINE', width/2, 62);\n\nline(0, 87, width, 87);\ntextAlign(CENTER, BOTTOM);\ntext('BOTTOM', width/2, 87);",
		"id": "textAlign__1",
		"name": "textAlign II"
	},
	"textLeading": {
		"link": "https://p5js.org/reference/#/p5/textLeading",
		"code": "fill(0);\nnoStroke();\nlet lines = 'L1\\nL2\\nL3'; // \"\\n\" is a \"new line\" character\ntextSize(12);\n\ntextLeading(10);\ntext(lines, 10, 25);\n\ntextLeading(20);\ntext(lines, 40, 25);\n\ntextLeading(30);\ntext(lines, 70, 25);",
		"id": "textLeading",
		"name": "textLeading"
	},
	"textSize": {
		"link": "https://p5js.org/reference/#/p5/textSize",
		"code": "fill(0);\nnoStroke();\ntextSize(12);\ntext('Font Size 12', 10, 30);\ntextSize(14);\ntext('Font Size 14', 10, 60);\ntextSize(16);\ntext('Font Size 16', 10, 90);",
		"id": "textSize",
		"name": "textSize"
	},
	"textStyle": {
		"link": "https://p5js.org/reference/#/p5/textStyle",
		"code": "fill(0);\nnoStroke();\ntextSize(12);\ntextStyle(NORMAL);\ntext('Font Style Normal', 10, 15);\ntextStyle(ITALIC);\ntext('Font Style Italic', 10, 40);\ntextStyle(BOLD);\ntext('Font Style Bold', 10, 65);\ntextStyle(BOLDITALIC);\ntext('Font Style Bold Italic', 10, 90);",
		"id": "textStyle",
		"name": "textStyle"
	},
	"textWidth": {
		"link": "https://p5js.org/reference/#/p5/textWidth",
		"code": "textSize(28);\nfill(0);\nlet aChar = 'P';\nlet cWidth = textWidth(aChar);\ntext(aChar, 0, 40);\nline(cWidth, 0, cWidth, 50);\n\nlet aString = 'p5.js';\nlet sWidth = textWidth(aString);\ntext(aString, 0, 85);\nline(sWidth, 50, sWidth, 100);",
		"id": "textWidth",
		"name": "textWidth"
	},
	"textAscent": {
		"link": "https://p5js.org/reference/#/p5/textAscent",
		"code": "fill(0);\nlet base = height * 0.75;\nlet scalar = 0.8; // Different for each font\n\ntextSize(32); // Set initial text size\nlet asc = textAscent() * scalar; // Calc ascent\nline(0, base - asc, width, base - asc);\ntext('dp', 0, base); // Draw text on baseline\n\ntextSize(64); // Increase text size\nasc = textAscent() * scalar; // Recalc ascent\nline(40, base - asc, width, base - asc);\ntext('dp', 40, base); // Draw text on baseline",
		"id": "textAscent",
		"name": "textAscent"
	},
	"textDescent": {
		"link": "https://p5js.org/reference/#/p5/textDescent",
		"code": "fill(0);\nlet base = height * 0.75;\nlet scalar = 0.8; // Different for each font\n\ntextSize(32); // Set initial text size\nlet desc = textDescent() * scalar; // Calc ascent\nline(0, base + desc, width, base + desc);\ntext('dp', 0, base); // Draw text on baseline\n\ntextSize(64); // Increase text size\ndesc = textDescent() * scalar; // Recalc ascent\nline(40, base + desc, width, base + desc);\ntext('dp', 40, base); // Draw text on baseline",
		"id": "textDescent",
		"name": "textDescent"
	},
	"randomSeed": {
		"link": "https://p5js.org/reference/#/p5/randomSeed",
		"code": "randomSeed(99);\nfor (let i = 0; i < 100; i++) {\n  let r = random(0, 255);\n  stroke(r);\n  line(i, 0, i, 100);\n}",
		"id": "randomSeed",
		"name": "randomSeed"
	},
	"random__0": {
		"link": "https://p5js.org/reference/#/p5/random",
		"code": "for (let i = 0; i < 100; i++) {\n  let r = random(50);\n  stroke(r * 5);\n  line(50, i, 50 + r, i);\n}",
		"id": "random__0",
		"name": "random I"
	},
	"random__1": {
		"link": "https://p5js.org/reference/#/p5/random",
		"code": "for (let i = 0; i < 100; i++) {\n  let r = random(-50, 50);\n  line(50, i, 50 + r, i);\n}",
		"id": "random__1",
		"name": "random II"
	},
	"random__2": {
		"link": "https://p5js.org/reference/#/p5/random",
		"code": "// Get a random element from an array using the random(Array) syntax\nlet words = ['apple', 'bear', 'cat', 'dog'];\nlet word = random(words); // select random word\nnoStroke();\nfill(0);\ntext(word, 10, 50); // draw the word",
		"id": "random__2",
		"name": "random III"
	},
	"randomGaussian__0": {
		"link": "https://p5js.org/reference/#/p5/randomGaussian",
		"code": "for (let y = 0; y < 100; y++) {\n  let x = randomGaussian(50, 15);\n  line(50, y, x, y);\n}",
		"id": "randomGaussian__0",
		"name": "randomGaussian I"
	},
	"randomGaussian__1": {
		"link": "https://p5js.org/reference/#/p5/randomGaussian",
		"code": "let distribution = new Array(360);\nfunction setup() {\n   createCanvas(100, 100);\n   for (let i = 0; i < distribution.length; i++) {\n     distribution[i] = floor(randomGaussian(0, 15));\n   }\n }\nfunction draw() {\n   background(204);\n  translate(width / 2, width / 2);\n  for (let i = 0; i < distribution.length; i++) {\n     rotate(TWO_PI / distribution.length);\n     stroke(0);\n     let dist = abs(distribution[i]);\n     line(0, 0, dist, 0);\n   }\n }",
		"id": "randomGaussian__1",
		"name": "randomGaussian II"
	},
	"noise__0": {
		"link": "https://p5js.org/reference/#/p5/noise",
		"code": "let xoff = 0.0;\n\nfunction draw() {\n  background(204);\n  xoff = xoff + 0.01;\n  let n = noise(xoff) * width;\n  line(n, 0, n, height);\n}",
		"id": "noise__0",
		"name": "noise I"
	},
	"noise__1": {
		"link": "https://p5js.org/reference/#/p5/noise",
		"code": "let noiseScale=0.02;\n\nfunction draw() {\n  background(0);\n  for (let x=0; x < width; x++) {\n    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);\n    stroke(noiseVal*255);\n    line(x, mouseY+noiseVal*80, x, height);\n  }\n}",
		"id": "noise__1",
		"name": "noise II"
	},
	"noiseDetail": {
		"link": "https://p5js.org/reference/#/p5/noiseDetail",
		"code": "let noiseVal;\n let noiseScale = 0.02;\nfunction setup() {\n   createCanvas(100, 100);\n }\nfunction draw() {\n   background(0);\n   for (let y = 0; y < height; y++) {\n     for (let x = 0; x < width / 2; x++) {\n       noiseDetail(2, 0.2);\n       noiseVal = noise((mouseX + x) * noiseScale, (mouseY + y) * noiseScale);\n       stroke(noiseVal * 255);\n       point(x, y);\n       noiseDetail(8, 0.65);\n       noiseVal = noise(\n         (mouseX + x + width / 2) * noiseScale,\n         (mouseY + y) * noiseScale\n       );\n       stroke(noiseVal * 255);\n       point(x + width / 2, y);\n     }\n   }\n }",
		"id": "noiseDetail",
		"name": "noiseDetail"
	},
	"noiseSeed": {
		"link": "https://p5js.org/reference/#/p5/noiseSeed",
		"code": "let xoff = 0.0;\n\nfunction setup() {\n  noiseSeed(99);\n  stroke(0, 10);\n}\n\nfunction draw() {\n  xoff = xoff + .01;\n  let n = noise(xoff) * width;\n  line(n, 0, n, height);\n}",
		"id": "noiseSeed",
		"name": "noiseSeed"
	}
};
let keywords = ["Vector.angleBetween","Image.loadPixels","Vector.normalize","Vector.fromAngle","quadraticVertex","quadraticVertex","Vector.toString","Vector.random2D","Color.setGreen","Color.setAlpha","curveTightness","createGraphics","drawingContext","mouseIsPressed","Vector.heading","Vector.reflect","randomGaussian","randomGaussian","Color.setBlue","bezierTangent","bezierTangent","mouseReleased","Vector.setMag","Vector.rotate","Color.setRed","strokeWeight","curveTangent","beginContour","bezierVertex","bezierVertex","createCanvas","keyIsPressed","mouseDragged","mousePressed","mouseClicked","touchStarted","Image.resize","Image.filter","createVector","Vector.magSq","Vector.limit","ellipseMode","ellipseMode","bezierPoint","curveVertex","applyMatrix","applyMatrix","applyMatrix","applyMatrix","resetMatrix","keyReleased","mouseButton","createImage","createImage","createImage","Vector.mult","Vector.dist","Vector.lerp","textLeading","textDescent","noiseDetail","brightness","saturation","background","strokeJoin","strokeJoin","strokeJoin","curvePoint","beginShape","keyPressed","keyPressed","mouseMoved","touchMoved","touchEnded","Image.mask","Image.save","loadPixels","Vector.set","Vector.add","Vector.sub","Vector.div","Vector.mag","textAscent","randomSeed","lerpColor","colorMode","colorMode","strokeCap","blendMode","blendMode","translate","translate","translate","keyIsDown","keyIsDown","Image.get","textAlign","textAlign","textStyle","textWidth","noiseSeed","noStroke","triangle","rectMode","rectMode","endShape","noCursor","textSize","ellipse","preload","keyCode","keyCode","pmouseX","pmouseY","touches","noFill","stroke","stroke","circle","square","square","square","bezier","vertex","cursor","noLoop","noLoop","redraw","rotate","shearX","shearY","mouseX","mouseY","pixels","filter","filter","filter","filter","filter","filter","filter","filter","filter","Vector","random","random","random","alpha","color","color","color","green","clear","point","point","point","curve","curve","curve","setup","scale","Image","noise","noise","blue","fill","line","line","quad","rect","rect","rect","draw","loop","push","push","hue","red","arc","arc","arc","key","get","get","set","set","set"];