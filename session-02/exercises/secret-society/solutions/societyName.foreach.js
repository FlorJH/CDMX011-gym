function societyName(friends) {
	let secreto=[];
	friends.forEach(palabra =>{
		secreto.push(palabra.slice(0,1));
	})
	return secreto.sort().join('')
}