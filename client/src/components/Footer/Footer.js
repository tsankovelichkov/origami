import style from './Footer.module.css';
import FooterListItem from './FooterListItem/FooterListItem';


function Footer() {
    return (
        <footer className={style.footer}>
            <ul>
            <FooterListItem>Going to 1</FooterListItem>
            <FooterListItem>Going to 2</FooterListItem>    
            <FooterListItem>Going to 3</FooterListItem>    
            <FooterListItem>Going to 4</FooterListItem>    
            <FooterListItem>Going to 5</FooterListItem>    
            <FooterListItem>Going to 6</FooterListItem>    
            <FooterListItem>Going to 7</FooterListItem>    
            <FooterListItem>Going to 8</FooterListItem>    
            <FooterListItem>Going to 9</FooterListItem>    
            <FooterListItem>Going to 10</FooterListItem>    
            <FooterListItem>Going to 11</FooterListItem>    
            <li className={style.listItem}><img src="/blue-origami-bird-flipped.png"/></li>
            </ul>
            <p>Software University ® 2019</p>
        </footer>
    );
}

export default Footer