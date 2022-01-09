import style from './ListItem.module.css';

function ListItem(props) {
    return (
        <li className={style.listItem}>
            <a href="#">{props.children}</a>
        </li>
    );
}

export default ListItem