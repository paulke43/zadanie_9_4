/*function drawTree(n) {
	for ( var i=0 ; i < n ; i++) {
		var star = "*";
		for (j=0; j < i; j++) {
			star += '*';
		}
		console.log(star);
	}
}
drawTree(7);*/

// version with only one loop

function drawtree(NumberOfLines) {
	for (var i = "*"; i.length < NumberOfLines; i += "*")
    console.log(i);
}
drawtree(7)