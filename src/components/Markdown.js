import ReactMarkdown from "react-markdown";

export default function Markdown(props) {
    return (
        <div className="flex-grow double-height markdown">
            <ReactMarkdown>
                {props.content}
            </ReactMarkdown>
        </div>
    );
}