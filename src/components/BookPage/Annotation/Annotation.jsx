import './styles/Annotation.css'

export const Annotation = props => {
    return <div className="book__annotation">
        <div className="annotation__header">Аннотация</div>
        <div className="annotation__text">{ props.annotation }</div>
    </div>
}