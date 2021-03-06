import Section from "./Section";
import { sortByOrdinal } from "./utils/SortUtils";

export default function SectionsList(props) {

    let sortedSections = sortByOrdinal(props.sections);
    let sections = sortedSections.map(section => {
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