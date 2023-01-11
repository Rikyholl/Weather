import Indicators from "../../../../../assets/Indicators";

const ThisDayInfo = () =>{

    let items = [{
        iconId: 'temp',
        name: 'Температура',
        value: '20° - ощущается как 17°',
    },
    {
        iconId: 'pressure',
        name: 'Давление',
        value: '765 мм ртутного столба - нормальное',
    },
    {
        iconId: 'precipitation',
        name: 'Осадки',
        value: 'Без осадков',
    },
    {
        iconId: 'wind',
        name: 'Ветер',
        value: '3 м/с юго-запад - легкий ветер',
    }];

    return(
        
        <div className="thisDayInfo">
            {
                items.map(item => (
                    <div className="thisDayInfo_items" key={item.iconId}>
                        <div className="indicator">
                            <div className="indicator_icon"> <Indicators id={item.iconId} /> </div>
                            <div className="indicator_name"> {item.name} </div>
                        </div>
                        
                        <div className="value"> {item.value} </div>
                    </div>
                ))
            }

            <img src="./images/clouds.png" className="clouds" alt="clouds" />
        </div>
    );
}

export default ThisDayInfo;