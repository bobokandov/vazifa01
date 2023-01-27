import logo from "./logo.svg";
import rasm1 from "./photo/1.jpg";
import rasm2 from "./photo/2.jpg";
import rasm3 from "./photo/3.jpg";
import rasm4 from "./photo/4.jpg";
import rasm5 from "./photo/5.jpg";
import rasm6 from "./photo/6.jpg";
import rasm7 from "./photo/7.jpg";
import rasm8 from "./photo/8.jpg";
import rasm9 from "./photo/9.jpg";
import logo1 from "./photo/nuq.webp";
import logo2 from "./photo/pp.webp";
import logo3 from "./photo/tw.webp";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <div className="section00">
          <h2>Олег Марков</h2>

          <ul className="section01">
            <ol>Главная</ol>
            <ol>Обо мне</ol>
            <ol>Связаться</ol>
          </ul>
        </div>
        <div className="ggr">
          <div className="row">
            <div className="column">
              <img src={rasm1} alt="" />
              <img src={rasm4} alt="" />
              <img src={rasm7} alt="" />
            </div>

            <div className="column">
              <img src={rasm2} alt="" />
              <img src={rasm5} alt="" />
              <img src={rasm8} alt="" />
            </div>

            <div className="column">
              <img src={rasm3} alt="" />
              <img src={rasm6} alt="" />
              <img src={rasm9} alt="" />
            </div>
          </div>
        </div>

        <p className="footer">
          © 2035 Олег Марков. Сайт создан на <a href=""> Wix.com.</a>
        </p>
        <div className="footer2">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
