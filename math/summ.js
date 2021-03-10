var fsum = function(a) {
	let b = 0;
	for (let i = 0; i < a.length; i++) {
		b += a[i];
	}
	return(b);
}
module.exports = fsum;