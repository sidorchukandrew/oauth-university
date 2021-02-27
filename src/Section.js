import Markdown from "./components/Markdown";

export default function Section(props) {
    let sectionContent = null;

    if (props.section?.section_type === "markdown") {
        sectionContent = (
            <Markdown
                content={props.section?.content}
            />
        );
    } else if (props.section?.section_type === "component") {
        sectionContent = props.section?.content;
    }

    return sectionContent;
}