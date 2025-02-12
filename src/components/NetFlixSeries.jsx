
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";


export const NetFlixSeries = ()=>{
    return (
        <ul className="grid  gap-[4rem]">
            {
               seriesData.map((curElem)=>{
                return <SeriesCard key={curElem.id} data={curElem}/>
               })
            }
        </ul>
    )
}