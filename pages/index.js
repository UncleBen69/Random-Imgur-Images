//Components
import Warning from "../components/warning";

class Index extends React.Component {
	render() {
		return (
			<div className="body">
				<h1 className="title">Random Imgur Infinite Scroll</h1>
				<pre className="subtitle">Really NSFW Content Below</pre>
				<hr />

				<Warning />

				<style jsx>{`
					.title {
						text-align: center;
						font-family: Arial;
						font-size: 50px;
						font-weight: 800;
						color: #fff;
					}
					.subtitle {
						color: red;
						text-align: center;
						padding-bottom: 50px;
					}
				`}</style>
			</div>
		);
	}
}

export default Index;
