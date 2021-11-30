import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import QRCODEPageStyles, { MacAddressInputStyles } from "./styles";
import { ImQrcode } from "react-icons/im";
import Qr from "qrcode.react";
function QRCODEPage() {
  return (
    // isso é um fragment
    <>
      <Header />
      <QRCODEPageStyles>
        <span>Capture o QRCODE com o APP</span>
        <p>Suas atividades serão sincronziadas com as do Celular</p>
        <div className="qrcodeContainer">
          <Qr value="getmacaddress" size={350} />
        </div>
      <MacAddressInputStyles>
        <p>Informe o MacAddress que apareceu no Celular</p>
        <input type="text" name="macaddress" id="" />
        <button>
          Sincronizar
        </button>
      </MacAddressInputStyles>
      </QRCODEPageStyles>
      <Footer />
    </>
  );
}

export { QRCODEPage };
