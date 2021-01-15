import Checkbox from "@material-ui/core/Checkbox";

function ButtonGenerator() {
    return (
        <div className="p-vertical-lg">

            <div className="p-vertical-md d-flex f-column">
                <label className="font-xs bold-5">
                    REDIRECT URI
                </label>
                <input className="foc-ring rounded-sm p-md main-font grey-border flex-grow"></input>
            </div>
            <div className="p-vertical-md d-flex f-column">
                <label className="font-xs bold-5">
                    CLIENT ID
                </label>
                <input className="foc-ring rounded-sm p-md main-font grey-border flex-grow"></input>
            </div>

            <div className="p-vertical-md d-flex f-column">
                <label className="font-xs bold-5">
                    SCOPES
                </label>
                <div className="rounded-sm p-md grey-bg-4 grey-border">
                    <div className="d-flex align-center">
                        <Checkbox color="#50abf0" />
                        <span className="font-sm">
                            identity
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonGenerator;