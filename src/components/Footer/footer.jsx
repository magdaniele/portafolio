import "./styles/footer.scss";
import Icons from "../../assets/icons/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <h1>Social media</h1>
      <ul className="footer_item_list">
        <li className="footer_item">
          <a href="/">
            <span>
            <svg className='network_logo' {...Icons.github.props} />
            </span>
          </a>
        </li>
        <li className="footer_item">
          <a href="/">
            <span>
            <svg className='network_logo' {...Icons.linkedin.props} />
            </span>
          </a>
        </li>
        <li className="footer_item">
          <a href="/">
            <span>
            <svg className='network_logo' {...Icons.instagram.props} />
            </span>
          </a>
        </li>
        <li className="footer_item">
          <a href="/">
           <svg className='network_logo' {...Icons.facebook.props} />
          </a>
        </li>
        <li className="footer_item">
          <a href="/">
            <span>
            <svg className='network_logo' {...Icons.twitter.props} />
            </span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
