// import Loader from "react-loader-spinner";

export default function Button(props) {

    let content = props.loading ? "" : props.name;
    let classes = "no-border p-xs d-flex justify-center align-center font-sm"
    let sizeClasses = props.small ? "p-horiz-md p-vertical-sm" : "p-horiz-15 p-vertical-md";
    let borderRadiusClasses = props.noRoundLeft ? "rounded-right-sm" : "rounded-sm";
    sizeClasses = props.fullWidth ? sizeClasses + " full-width" : sizeClasses;
    let colorClasses = props.disabled ? "grey-text-6 grey-bg-5" : "foc-ring white-text hov-lighten pointer " + props.colorClass;

    classes = classes + " " + colorClasses + " " + sizeClasses + " " + borderRadiusClasses;

    if (props.disabled) {
        return (
            <button
                className={classes}
            >
                { content}
            </button >
        );
    }
    else {
        return (
            <button
                className={classes}
                onClick={props.onClick}
            >
                {props.children} {content}
            </button >
        );
    }
}