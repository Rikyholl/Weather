import Close from "../../assets/images/close";
import Indicators from "../../assets/Indicators";
const Popup = () => {

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
    <>
        <div className="blur"></div>
        <div className="popup">

            <div className="infoDay">
                <div className="infoDay_temp">12°</div>
                <div className="infoDay_name">Среда</div>
                <div className="infoDay_icon">
                    <img src="/images/sun.png" alt="sun" width={50} height={50} />
                </div>
                <div className="infoDay_time"></div>

                <div className="bottom_block">
                    <div className="infoDay_time">Время: 21:54</div>
                    <div className="infoDay_ity">Город: Москва</div>
                </div>
            </div>

            <div>
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
            </div>
        <div className="close"> <Close /> </div>
        </div>
    </>
    );
}

export default Popup;