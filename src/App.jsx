
import {GlobalStyle} from "./components/GlobalStyle"
import {NetFlixSeries } from "./components/NetFlixSeries"

export const App = () => {
return(
    <>
    <GlobalStyle/> 
     <h1 className="text-6xl font-bold text-center ">NETFLIX TOP WEB SERIES</h1>
        <NetFlixSeries/>
    </>
)
}