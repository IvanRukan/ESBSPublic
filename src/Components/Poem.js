

const Poem = () => {
    return(
    <div className="OuterPoem">
        <div className="QuoteContainer">
            <div className="Quote">Безопасность есть предотвращение зла</div>
            <div className="QuoteAuthor">Платон, стих 415</div>
        </div>
        <button  onClick={() => {window.location.href = "mailto:esbs1@yandex.ru"}} className="QuoteButton">Связь по E-mail</button>
    </div>
    )
}


export default Poem