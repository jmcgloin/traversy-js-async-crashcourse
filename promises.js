const posts = [
	{ title: "Post 1", body: "This is post one." },
	{ title: "Post 2", body: "This is post two." }
]

const getPosts = () => {
	setTimeout(() => {
		let output = '';
		posts.forEach(post => output += `<li>${post.title}</li>`);
		document.body.innerHTML = output;
	}, 1000)
}

const createPosts = (post) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			posts.push(post);

			const error = false;

			if(!error) res();
			else rej('Error: Bad stuff');

		}, 2000);

	})
}

// createPosts({ title: "Post 3", body: "This is post three." }, getPosts)
// 	.then(getPosts)
// 	.catch(err => console.log(err))

