import { Wrapper,Content } from "./footer.style";

const Footer = () => (
    <Wrapper>
        <Content>
            <p>Hello! I'm Ahmed Mousa </p>
            <div>
            <label>Check out my other projects </label>
            <a href="https://wa.me/+201018564287" target="_blank" className="whatsapp"  >  <i className="fa fa-fa-whatsapp" aria-hidden="true"></i> Whatsapp</a>
            </div>
            <div>
            <label>Contact me </label> 
            <a href="https://www.linkedin.com/in/chirag-chouhan-b48311228/" target="_blank" className="ln"  >  <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
            </div>
        </Content>
    </Wrapper>
)

export default Footer;