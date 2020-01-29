import Gallery from "./gallery";

class Warning extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			accepted: false,
		};
	}

	acceptCondition = () => {
		this.setState({
			accepted: true,
		});
	};

	declineConditions = () => {
		location.href = "https://google.com";
	};

	render() {
		if (this.state.accepted) {
			return <Gallery />;
		} else {
			return (
				<>
					<div className="warning">
						<h1>
							Please accept that you will potentially see a lot of
							horrific stuff.
						</h1>
						<h2>
							All this website is doing is generating random Imgur
							URL's and displaying it, I have no control over the
							images shown.
						</h2>
						<pre className="subtitle">
							There <i>will</i> be NSFW content!!
						</pre>
						<button onClick={this.acceptCondition} id="accept">
							Accept
						</button>
						<button onClick={this.declineConditions} id="decline">
							Decline
						</button>
					</div>

					<style jsx>{`
						.subtitle {
							color: red;
							text-align: center;
							padding-bottom: 25px;
						}
						.warning {
							text-align: center;
							color: #fff;
						}
						button {
							height: 50px;
							width: 100px;
							border: 0;
							font-size: 20px;
							color: #fff;
							margin-right: 15px;
						}
						#accept {
							background-color: green;
						}
						#decline {
							background-color: red;
						}
						h1,
						h2 {
							font-family: Arial;
						}
					`}</style>
				</>
			);
		}
	}
}

export default Warning;
