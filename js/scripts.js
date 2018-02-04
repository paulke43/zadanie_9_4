function drawTree(n) {
	for ( var i= 0 ; i < n ; i++) {

		var star = "*";
		for (j=0; j < i; j++) {
			star += '*';
		}
		console.log(star);
	}
}
drawTree(7);