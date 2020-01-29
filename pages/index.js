import { NextSeo } from "next-seo";

//Components
import Warning from "../components/warning";

class Index extends React.Component {
	render() {
		return (
			<>
				<NextSeo
					title="Random Imgur Images Infinite Scroll"
					description="Scroll through randomly generated Imgur images."
				/>
				<div className="body">
					<h1 className="title">Random Imgur Infinite Scroll</h1>
					<hr />

					<Warning />
				</div>

				<style jsx>{`
					.title {
						text-align: center;
						font-family: Arial;
						font-size: 50px;
						font-weight: 800;
						color: #fff;
					}
				`}</style>
			</>
		);
	}
}

export default Index;
