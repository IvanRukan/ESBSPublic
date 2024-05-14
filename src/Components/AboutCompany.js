import about_image from './images/AboutImage.jpg'

const AboutCompany = () => {
    return (
        <div className="AboutCompanyMain">
            <div className="AboutCompanyTop">
                <div className="AboutCaption">
                Наша компания выполняет работы по установке,<br></br> техническому обслуживанию и ремонту<br></br> профессиональных систем безопасности.
                </div>
                <div className="AboutTelephone">
                контактный телефон: +7 (914) 794-00-01
                </div>
            </div>
            <img className="AboutPicture" src={about_image}/>
            <div className="AboutCompanyBottom">
                <div className="AboutCompanyBottomInner">
                    <div className="AboutCompanyBottomCaption">О компании</div>
                    <div className="AboutCompanyBottomStats">Безопасность. Надежность. Доверие</div>
                </div>
                <div className="AboutCompanyBottomDesc">ООО «ЭСБС» работает на рынке с 1999 года и <br></br>занимается разработкой, монтажом, обслуживанием и<br></br> ремонтом систем безопасности любого уровня<br></br> сложности: от простых до самых сложных.<br></br> Компания получила все необходимые лицензии для<br></br>осуществления деятельности, имеет в своем штате<br></br> только специалистов с высокой квалификацией и <br></br>большим опытом.</div>
            </div>
        </div>
    )
}

export default AboutCompany
