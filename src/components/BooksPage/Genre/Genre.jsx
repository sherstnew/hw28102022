import './styles/Genre.css'

export const Genre = props => {
    return <li className={ ( props.gcount === 0 ? 'genres-list__genre genres-list__genre_selected' : 'genres-list__genre' ) }>
        { props.genre }
    </li>
}