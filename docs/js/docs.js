function indexList() {
	let _output = '<ul>';
	for ( item in snippets ) {
		_output += `<li><a href="javascript:void(0)" onclick="openEg('${snippets[item].id}')">${snippets[item].name}</a></li>`;
	}
	_output += '</ul>';
	return _output;
}
document.getElementById("index").innerHTML = indexList();

function selector() {
	let _output = '<select onchange="openEg(this.value)">';
		_output += `<option value="">Select...</option>`;
		for ( item in snippets ) {
			_output += `<option value="${snippets[item].id}">${snippets[item].name}</option>`;
		}
		_output += '</select>';
	return _output;
}
function datalist() {

	let _i = 0;
	let _output = '<input list="reference-list" id="reference-item" name="reference-item" placeholder="Search" onchange="selection(this)" />';
		_output += '<datalist id="reference-list">';
		for ( item in snippets ) {
			let _value = (snippets[item].name)[0].toUpperCase() + (snippets[item].name).slice(1);
			_output += `<option value="${_value}" data-name="${snippets[item].name}" data-id="${snippets[item].id}" data-guid="${_i}"></option>`;
			_i++;
		}
		_output += '</datalist>';
	return _output;
}
document.querySelector("nav").innerHTML = `${selector()} ${datalist()}`;

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
