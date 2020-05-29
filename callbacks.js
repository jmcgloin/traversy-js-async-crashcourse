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

const createPosts = (post, cb) => {
	setTimeout(() => {
		posts.push(post);
		cb();
	}, 2000);
}

getPosts();
createPosts({ title: "Post 3", body: "This is post three." }, getPosts);