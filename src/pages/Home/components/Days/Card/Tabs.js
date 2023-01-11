const Tabs = () =>{

    const tabs =[
        {
            value: 'На неделю',
        },
        {
            value: 'На 10 дней',
        },
        {
            value: 'На месяц',
        }
    ];

    return(

        <div className="tabs">
            <div className="tabs_wrapper">
                {
                    tabs.map(tab => (
                        <div className="tab_value"> {tab.value} </div>
                    ))
                }
            </div>

            <div className="cancel">Отменить</div>
        </div>
    );
}

export default Tabs;