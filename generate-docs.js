const fs = require('fs');

let snippets = fs.readFileSync("docs/src/tests.js").toString().split("/*~~~").filter(x => x.trim().length).map(x => ({ link: x.split("~~~*/")[0].trim(), code: x.split("~~~*/")[1].trim() }))

	for (var i = 0; i < snippets.length; i++) {
		let romnum = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
		for (var i = 0; i < snippets.length; i++) {
			let isUniq = true;
			let rank = 0;
			for (var j = 0; j < snippets.length; j++) {
				if (snippets[i].link == snippets[j].link) {
					if (i > j) {
						rank++;
						isUniq = false;
					} else if (i < j) {
						isUniq = false;
					}
				}
			}
			let name = snippets[i].link.split("#/")[1].replace("p5/", "").replace("p5.", "");
			let id = name.replace(/[^A-z0-9]/g, "_");
			if (!isUniq) {
				name += " " + romnum[rank] + "";
				id += "__" + rank;
			}
			snippets[i].id = id;
			snippets[i].name = name;
		}
	}
	snippets = Object.fromEntries(snippets.map(x => [x.id, x])/*.sort()*/);
let keywords = Object.keys(snippets).map(x => snippets[x].name.replace('/', '.').split(" ")[0]).sort((a, b) => (b.length - a.length));

let data = `
let snippets = ${JSON.stringify(snippets, null, "\t")};
let keywords = ${JSON.stringify(keywords)};`;

fs.writeFileSync("docs/js/data.js", data);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let html_index = `<ul>
	${Object.keys(snippets).map(x=>`<li><a href="javascript:void(0)" onclick="openEg('${x}');">${snippets[x].name}</a></li>`).join("")}
</ul>`;

let html_selector = `<select onchange="openEg(this.value)">
	<option value="">Select...</option>
	${Object.keys(snippets).map(x=>`<option value="${x}">${snippets[x].name}</option>`).join("\n")}
</select>`;

let html_datalist = `<input list="reference-list" id="reference-item" name="reference-item" placeholder="Search" onchange="selection(this)" />
<datalist id="reference-list">
	${Object.keys(snippets).map((x, i)=>`<option value="${(snippets[x].name)[0].toUpperCase() + (snippets[x].name).slice(1)}" data-id="${x}" data-guid="${i}"></option>`).join("")}
</datalist>`;

fs.readFile("docs/tpl/template.html", 'utf8', function (err,data) {
	if (err) { return console.log(err); }
	let result = data.replace(/{{ INDEX }}/g, html_index)
		.replace(/{{ SELECTOR }}/g, html_selector)
		.replace(/{{ DATALIST }}/g, html_datalist);

	fs.writeFileSync("docs/index.html", result, 'utf8', function (err) {
		if (err) { return console.log(err); }
	});
});