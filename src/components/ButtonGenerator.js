function ButtonGenerator() {
    return (
        <div className="p-vertical-lg">

            <div className="p-vertical-md">
                <label className="font-xs bold-5">
                    REDIRECT URI
                </label>
                <input className="foc-ring rounded-sm p-md main-font grey-border full-width"></input>
            </div>
            <div className="p-vertical-md ">
                <label className="font-xs bold-5">
                    CLIENT ID
                </label>
                <input className="foc-ring rounded-sm p-md main-font grey-border full-width"></input>
            </div>

            <div className="p-vertical-md ">
                <label className="font-xs bold-5">
                    SCOPES
                </label>
               <div className="rounded-sm p-md grey-bg-4 grey-border">Scopes in here</div>
            </div>
        </div>
    )
}

export default ButtonGenerator;