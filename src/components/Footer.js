import style from "../assets/css/Footer.module.css";

function Footer() {
    return (
      <div>
        <footer className= {style.footer}>
            <div className="wrap">
                <h2 className= {style.logo}>Movie</h2>
            </div>
        </footer>
      </div>  
    );
}

export default Footer;