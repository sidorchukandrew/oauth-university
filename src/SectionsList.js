import Section from "./Section";

export default function SectionsList(props) {

    let sections = props.sections?.map(section => {
        return (
            <Section section={section} key={section.id} />
        );
    });
    return (
        <div>
            {sections}
        </div>
    )
}