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

	render() {
		if (this.state.accepted) {
			return <Gallery />;
		} else {
			return (
				<>
					<div className="warning">
						<h1>
							Please Accept that you will potentially see a lot of
							horrific stuff
						</h1>
						<button onClick={this.acceptCondition}>Accept</button>
						<button onClick={this.acceptCondition}>Decline</button>
					</div>

					<style jsx>{`
						.warning {
							text-align: center;
							color: #fff;
						}
						button {
							margin-right: 15px;
						}
					`}</style>
				</>
			);
		}
	}
}

export default Warning;
