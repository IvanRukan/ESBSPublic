import fire_safety from './images/fire_safety.jpg'
import systems_safety from './images/safety_systems.jpg'
import control from './images/control.jpg'

const Services = () => {
    return (
        <div className="MainServices">
            <div className="TopServices">
                <div className="ServicesCaption">Наши услуги</div>
                <div className="ServicesDirections">Основные направления работы</div>
            </div>
            <div className="BottomServices">
                <div className="Service">
                    <div className="ServiceCaption">Пожарная безопасность</div>
                    <img className='ServiceImage' src={fire_safety} />
                </div>
                <div className="Service">
                    <div className="ServiceCaption">Комплексные системы <br></br>безопасности</div>
                    <img className='ServiceImage' src={systems_safety} />
                </div>
                <div className="Service">
                    <div className="ServiceCaption">Системы контроля доступа</div>
                    <img className='ServiceImage' src={control} />
                </div>
                
            </div>
        </div>
    )
}

export default Services