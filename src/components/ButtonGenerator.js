import Checkbox from "@material-ui/core/Checkbox";
import { Component } from "react";
import Button from "./Button";
import CheckIcon from "@material-ui/icons/DoneRounded";

class ButtonGenerator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            base_url: props.config?.base_url,
            scopes: props.config?.scopes,
            scopeDelimiter: props.config?.scope_delimiter,
            redirectUri: "",
            clientId: "",
            clientIdFocused: false,
            redirectUriFocused: false,
            selectedScopes: [],
            copyButtonContent: "Copy"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleScopeChange = this.handleScopeChange.bind(this);
        this.handleCopyClick = this.handleCopyClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFocus(event) {
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

    handleScopeChange(isChecked, scope) {
        if (isChecked) {
            let updatedScopes = JSON.parse(JSON.stringify(this.state.selectedScopes));
            updatedScopes.push(scope);
            this.setState({ selectedScopes: updatedScopes });
        } else {
            let updatedScopes = this.state.selectedScopes.filter(selectedScope => selectedScope !== scope);
            this.setState({ selectedScopes: updatedScopes });
        }
    }

    formatSelectedScopes() {
        return encodeURIComponent(this.state.selectedScopes.join(this.state.scopeDelimiter));
    }

    handleCopyClick() {
        let oauthUrl = `${this.state.base_url}?client_id=${this.state.clientId}`
            + `&redirect_uri=${encodeURIComponent(this.state.redirectUri)}`
            + `&scope=${this.formatSelectedScopes()}`;
        navigator.clipboard.writeText(oauthUrl).then(() => {
            let copyButtonContent = (
                <span className="d-flex align-center">
                    Copied
                    <span className="m-left-sm">
                        <CheckIcon style={{ fontSize: "15px" }} />
                    </span>
                </span>
            );

            this.setState({ copyButtonContent: copyButtonContent });

            setTimeout(() => this.setState({ copyButtonContent: "Copy" }), 2000);
        });
    }

    render() {
        return (
            <div className="p-vertical-lg">
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
                        SCOPES
                </label>
                    <div className="rounded-sm p-md grey-bg-4 grey-border">
                        {
                            this.state.scopes?.map(scope => {
                                return (
                                    <div className="d-flex align-center" key={scope}>
                                        <Checkbox
                                            onChange={(event) => this.handleScopeChange(event.target.checked, scope)}
                                            color="primary"
                                            size="small"
                                        />
                                        <span className="font-sm">
                                            {scope}
                                        </span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div
                    className="m-vertical-md no-wrap horiz-scroll rounded-sm grey-bg-4 p-lg primary-color-text font-sm"
                >
                    <div>
                        <span>
                            {this.state.base_url}?
                        </span>
                        <span className={this.state.clientIdFocused ? 'tertiary-color' : ''}>
                            {this.props.config?.client_id_param_name}={this.state.clientId}
                        </span>
                        &
                        <span className={this.state.redirectUriFocused ? 'tertiary-color' : ''}>
                            {this.props.config?.redirect_uri_param_name}={encodeURIComponent(this.state.redirectUri)}
                        </span>
                        &
                        <span className="p-right-lg">
                            {this.props.config?.scope_param_name}={this.formatSelectedScopes()}
                        </span>
                    </div>
                </div>
                <div className="d-flex justify-end">
                    <Button
                        colorClass="primary-color-bg"
                        onClick={this.handleCopyClick}
                    >
                        {this.state.copyButtonContent}
                    </Button>
                </div>
            </div>
        );
    }
}

export default ButtonGenerator;