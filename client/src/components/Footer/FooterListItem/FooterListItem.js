import style from './FooterListItem.module.css';

function FooterListItem(props) {
    return (
        <li className={style.listItem}>
            <a href="#">{props.children}</a>
        </li>
    );
}

export default FooterListItem