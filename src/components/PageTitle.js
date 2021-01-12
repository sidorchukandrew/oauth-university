function PageTitle(props) {
    let pageType;
    if (props.pageType) {
        pageType = props.pageType;
    }

    return (
        <div>
            <div className="secondary-color d-flex justify-center bold-5 letter-space-sm">
                { pageType }
            </div>
            <div className="d-flex justify-center font-lg bold-6 m-bottom-lg">
                { props.title }
            </div>
        </div>
    );
}

export default PageTitle;