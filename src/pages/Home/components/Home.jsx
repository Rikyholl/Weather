import Card from "./Days/Card/Card";
import ThisDay from "./ThisDay/Thisday";
import ThisDayInfo from "./ThisDay/ThisDayComponents/ThisDayInfo";

const Home = () => {

    return(
        <div>
            <div className="thisDayInfo_wrapper">
                <ThisDay />
                <ThisDayInfo />
            </div>

            <Card />
           
        </div>
       
    
    );
}

export default Home;