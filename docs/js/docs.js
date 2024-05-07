function selection(val) {

	openEg(document.querySelector(`datalist#reference-list option[value="${val.value}"]`).dataset.id);
}

function openEg(id) {

	document.querySelector('input#reference-item').value = '';
	document.querySelector('nav select').value = id;

	if (id == false) { 
		document.querySelector("#index").classList.remove('hidden');
		document.querySelector("#content").classList.add('hidden');
		return false; 
	} else {
		document.querySelector("#index").classList.add('hidden');
		document.querySelector("#content").classList.remove('hidden');
	}

	function decorateP5(code) {
		if (!~code.search(/function +setup *\( *\)/)) {
			if (!~code.search(/function/)) {
				code = "function setup(){\n" + code + "\n};"
			} else {
				code = "function setup(){};\n" + code;
			}
		}
		code = code.replace(/setup\( *\) *{/, "setup(){\npixelDensity(1);")
		code = `\nlet _a = new p5();\n` + code + `;\n_a._start();`
		return code;
	}
	function decorateQ5(code) {
		return `new Q5("global");\n\n${code.replace(/p5\.([A-Z])/g, "$1")}`
	}
	let cq5 = decorateQ5(snippets[id].code);

	let q5frame = document.querySelector("#q5frame");
	let p5frame = document.querySelector("#p5frame");

	let q5html = `<body style="margin:0;overflow:hidden;background:#ddd"></body><script src="js/q5.min.js"><\/script><script>${cq5}<\/script>`;
	let p5html = `<body style="margin:0;overflow:hidden;background:#ddd"></body><script src="js/p5.min.js"><\/script><script>${decorateP5(snippets[id].code)}<\/script>`;

		q5frame.contentWindow.location.reload();
		p5frame.contentWindow.location.reload();

	q5frame.onload = function () {
		q5frame.contentWindow.document.write(q5html);
	}
	p5frame.onload = function () {
		p5frame.contentWindow.document.write(p5html);
	}
	p5frame.contentWindow.document.innerHTML = p5html;
	document.querySelector("#content h2").innerHTML = snippets[id].name;

	let ln = document.querySelector("#content footer a")
		ln.innerHTML = snippets[id].link;
		ln.href = snippets[id].link;

	let cdiv = document.querySelector("#content pre");

	let lines = cq5.split("\n");
	for (var i = 0; i < lines.length; i++) {
		let cod = lines[i].split("//")[0];
		let com = lines[i].slice(cod.length);
		for (var j = 0; j < keywords.length; j++) {
			cod = cod.replace(new RegExp('(' + keywords[j] + ')([^A-z])', 'gm'), '<strong>$1</strong>$2')
		}
		lines[i] = cod + `<span class="comm">${com}</span>`
	}
	cdiv.innerHTML = lines.join("\n");

};

openEg('');