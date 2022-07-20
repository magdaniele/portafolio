import "./styles/footer.scss";
import Icons from "../../assets/icons/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <h1>Social media</h1>
      <ul className="footer_item_list">
        <li className="footer_item">
          <a href="https://github.com/magdaniele" target="_blank" rel="noreferrer">
            <span>
            <svg className='network_logo' {...Icons.Socialmedia.Github.props} />
            </span>
          </a>
        </li>
        <li className="footer_item">
          <a href="https://www.linkedin.com/in/eddy-cardona-ab027a174/" target="_blank" rel="noreferrer">
            <span>
            <svg className='network_logo' {...Icons.Socialmedia.Linkedin.props} />
            </span>
          </a>
        </li>
        <li className="footer_item">
          <a href="https://www.instagram.com/eddycardona3/" target="_blank" rel="noreferrer">
            <span>
            <svg className='network_logo' {...Icons.Socialmedia.Instagram.props} />
            </span>
          </a>
        </li>
        <li className="footer_item">
          <a href="https://www.facebook.com/eddyjose.cardonamagdaniel/" target="_blank" rel="noreferrer">
           <svg className='network_logo' {...Icons.Socialmedia.Facebook.props} />
          </a>
        </li>
        <li className="footer_item">
          <a href="https://twitter.com/fokiutuita" target="_blank" rel="noreferrer">
            <span>
            <svg className='network_logo' {...Icons.Socialmedia.Twitter.props} />
            </span>
          </a>
        </li>
      </ul>
      <h4>Copyright 2022 © @magdaniele All Rights Reserved. Privacy Policy</h4>
    </footer>
  );
};

export default Footer;
