export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 1
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState(prevState => ({ test: prevState.test + 1 }))
    }

    render() {
        return (
            <div>
                <h2>This is a test!</h2>
                <button
                    onClick={this.onClick}
                >{this.state.test}</button>
            </div>
        )
    }
}