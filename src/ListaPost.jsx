import { useEffect, useState } from 'react';

export default function ListaPost() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	const getAllPost = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		return res.json();
	};

	useEffect(() => {
		getAllPost().then((data) => {
			setPosts(data);
			setLoading(false);
		});
	}, []);

	return (
		<section>
			<h1>Lista de Posts</h1>

			{loading && <p>Cargando...</p>}

			{posts.length !== 0 && (
				<ul>
					{posts.map((post) => (
						<li key={post.id}>
							<h3>{post.title}</h3>
							<p>{post.body}</p>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
