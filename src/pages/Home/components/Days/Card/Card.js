import IconWeather from "../../../../../assets/images/iconWeather";

const Card = () =>{
    const days = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь и солнце'
        },
        {
            day: 'Ср',
            day_info: '30 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь'
        },
        {
            day: 'Чт',
            day_info: '31 авг',
            icon_id: 'mainly_cloudly',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            day: 'Gn',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        }
    ];

    return(
        <div>
            {
                days.map(day => (
                    <>
                        <div>{day.day}</div>
                        <div>{day.day_info}</div>
                        <div> <IconWeather id={day.icon_id} /> </div>
                        <div>{day.temp_day}</div>
                        <div>{day.temp_night}</div>
                        <div>{day.info}</div>
                    </>
                   
                ))
            }
        </div>
    );
}

export default Card;