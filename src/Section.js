import ButtonGenerator from "./components/ButtonGenerator";
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
        if (props.section?.content === "button generator") {
            sectionContent = (
                <ButtonGenerator config={props.section?.oauth_config} />
            )
        }
    } else if (props.section?.section_type === "image") {
        sectionContent = (
            <div className="d-flex justify-center">
                <img src={props.section.content} alt="" style={{ maxWidth: "100%", width: "100%" }} />
            </div>
        );
    }

    return sectionContent;
}