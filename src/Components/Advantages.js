import like from './images/like.jpg'
import trophy from './images/trophy.jpg'
import marker from './images/marker.jpg'



const Advantages = () => {
    return (
        <div className="AdvantagesMain">
            <div className="AdvatangesCaption">Преимущества компании</div>
            <div className="AdvantagesLower">
                <div className="Advantage">
                    <img src={marker} className="AdvantageImage" />
                    <div className="AdvantageDesc">Мы работаем для вашей коммерческой,<br></br>имущественной безопасности</div>
                </div>
                <div className="Advantage">
                    <img src={like} className="AdvantageImage" />
                    <div className="AdvantageDesc">Комплексные системы безопасности на <br></br>заказ устанавливают, обслуживают<br></br> и ремонтируют опытные инженеры и<br></br>обученные мастера с задействованием<br></br> профессиональных инструментов</div>
                </div>
                <div className="Advantage">
                    <img src={trophy} className="AdvantageImage" />
                    <div className="AdvantageDesc">Для системы обеспечения безопасности<br></br> объектов мы поставляем<br></br> высококачественную технику, ПО<br></br>и комплектующие от разных российских и<br></br> зарубежных производителей.</div>
                </div>
            </div>
        </div>
    )
}

export default Advantages