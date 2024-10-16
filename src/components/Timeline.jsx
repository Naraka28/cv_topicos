/* eslint-disable react/jsx-key */
import timeline from "../data/timeline"
import {TimelineItem} from "./TimelineItem"
import {Title} from "./Title"

export function Timeline(){
    return(
        <div className="flex flex-col md:flex-row justify-center my-20 ">
            <div className="w-full md:w-7/12">
                <Title >Timeline</Title>
                {timeline.map(item =>(
                    <TimelineItem
                    date={item.year}
                    title={item.title}
                    content={item.about}
                    />
                ))}
            </div>

        </div>
    );
}