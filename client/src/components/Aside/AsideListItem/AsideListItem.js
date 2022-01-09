import style from './AsideListItem.module.css';

function AsideListItem(props) {
    return (
        <li className={style.listItem}>
            <a href="#">{props.children}</a>
        </li>
    );
}

export default AsideListItem