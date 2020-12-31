var feedback = function (res) {
	if (res.success === true) {
		var status = document.querySelector('.status');
		var p = document.createElement('p');
		var t = document.createTextNode('Image url: ' + res.data.link);
		p.appendChild(t);
		status.classList.add('bg-success');
		status.appendChild(p);
		// document.querySelector('.status').innerHTML = 'Image url: ' + res.data.link;
	}
};
new Imgur({
	clientid: '146def7f79c7a87',
	callback: feedback
});
