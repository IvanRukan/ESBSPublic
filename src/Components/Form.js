import { useState } from "react"
import { Link } from "react-router-dom";
import whatsapp from './images/whatsappicon.jpg'



const FormToContact = () => {
    const [email, setEmail] = useState("")
    const [topic, setTopic] = useState("")
    const [message, setMessage] = useState("")
    const handleSubmit = (event) => {
        let mail_to = "mailto:"
        let company_mail = "esbs1@yandex.ru"
        let resulting_message = "Ваша почта для обратной связи: ".concat(email, "/n Ваше сообщение: ", message)
        let result = mail_to.concat(company_mail, "?subject=",topic, "&body=", resulting_message)
        window.location.href = result;
        event.preventDefault()
    }

    return (
       <div className="FormMain">
            <div className="FormCaption">Наши контакты</div>
            <div className="FormLower">
                <div className="FormContactsContainer">
                    <div className="ContactsCaption">Телефон: +7 914 794 00 01<br></br>
Почта: esbs1@yandex.ru</div>
                    <div className="AddressCaptionContainer">
                        <div className="AddressCaption">Укажите адрес вашей компании</div>
                        <img className="WhatsAppImage" src={whatsapp}/>
                    </div>
                </div>
                <form className="sendingEmail" onSubmit={handleSubmit}>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" className="FormInput"></input>
                    <input required value={topic} onChange={(e) => setTopic(e.target.value)} type="text" name="topic" placeholder="Тема сообщения" className="FormInput"></input>
                    <textarea required value={message} onChange={(e) => setMessage(e.target.value)} type="text" name="message" placeholder="Сообщение" className="FormInput Textarea"></textarea>
                    <input type="submit" value="Отправить" className="SubmitForm"></input>
                </form>
            </div>
       </div>
    )
}

export default FormToContact