const fs = require('fs');

let snippets = fs.readFileSync("tests.js").toString().split("/*~~~").filter(x => x.trim().length).map(x => ({ link: x.split("~~~*/")[0].trim(), code: x.split("~~~*/")[1].trim() }))

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

fs.writeFileSync("js/data.js", data);