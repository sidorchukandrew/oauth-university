import Checkbox from "@material-ui/core/Checkbox";
import { Component } from "react";

class ButtonGenerator extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            base_url: props.config?.base_url,
            scopes: props.config?.scopes,
            redirectUri: "",
            clientId: "",
            clientIdFocused: false,
            redirectUriFocused: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFocus(event) {
        console.log(event);
        if (event.target.name === "clientId") {
            this.setState({
                clientIdFocused: true
            });
        }
        else if (event.target.name === "redirectUri") {
            this.setState({
                redirectUriFocused: true
            });
        }
    }

    handleBlur(event) {
        if (event.target.name === "clientId") {
            this.setState({
                clientIdFocused: false
            });
        }
        else if (event.target.name === "redirectUri") {
            this.setState({
                redirectUriFocused: false
            });
        }
    }

    render() {
        return (
            <div className="p-vertical-lg">
                <div className="p-vertical-md d-flex f-column">
                    <label className="font-xs bold-5 m-bottom-md">
                        REDIRECT URI
                </label>
                    <input
                        className="foc-ring rounded-sm p-md main-font grey-border flex-grow"
                        name="redirectUri"
                        value={this.state.redirectUri}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                </div>
                <div className="p-vertical-md d-flex f-column">
                    <label className="font-xs bold-5 m-bottom-md">
                        CLIENT ID
                </label>
                    <input
                        className="foc-ring rounded-sm p-md main-font grey-border flex-grow"
                        name="clientId"
                        onChange={this.handleChange}
                        value={this.state.clientId}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                </div>

                <div className="p-vertical-md d-flex f-column">
                    <label className="font-xs bold-5 m-bottom-md">
                        SCOPES
                </label>
                    <div className="rounded-sm p-md grey-bg-4 grey-border">
                        {
                            this.state.scopes?.map(scope => {
                                return (
                                    <div className="d-flex align-center" key={scope}>
                                        <Checkbox />
                                        <span className="font-sm">
                                            {scope}
                                        </span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>


                <div className="m-vertical-lg no-wrap horiz-scroll rounded-sm grey-bg-4 p-lg primary-color-text font-sm">
                    <span>
                        {this.state.base_url}?
                    </span>
                    <span className={this.state.clientIdFocused ? 'tertiary-color' : ''}>
                        client_id={this.state.clientId}
                    </span>
                    &
                    <span className={this.state.redirectUriFocused ? 'tertiary-color' : ''}>
                        redirect_uri={encodeURIComponent(this.state.redirectUri)}
                    </span>
                </div>
            </div>
        );
    }
}

export default ButtonGenerator;