const ThisDay = () =>{

    return(
        <div className="thisDay">
            <div className="top_block">
                <div className="temp">
                    <div className="thisDay_temp"> 20°</div>
                    <div className="thisDay_day"> Сегодня </div>
                </div>
                <img src="/images/sun.png" alt="sun" width={119} height={119} />
            </div>
            
            <div className="bottom_block">
                <div className="thisDay_time">Время: 21:54</div>
                <div className="city">Город: Москва</div>
            </div>
        </div>
    );
}

export default ThisDay;
