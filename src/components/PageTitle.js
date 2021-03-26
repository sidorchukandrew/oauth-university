function PageTitle(props) {
    let pageType;
    if (props.pageType) {
        pageType = props.pageType;
    }

    return (
        <div>
            <div className="hide-small">
                <div className="secondary-color d-flex justify-center bold-5 letter-space-sm">
                    {pageType}
                </div>
            </div>
            <h1>
                {props.title}
            </h1>
        </div>
    );
}

export default PageTitle;