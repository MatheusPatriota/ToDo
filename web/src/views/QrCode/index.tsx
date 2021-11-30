import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import QRCODEPageStyles, { MacAddressInputStyles } from "./styles";
import { ImQrcode } from "react-icons/im";
import Qr from "qrcode.react";
import { useState } from "react";
function QRCODEPage() {
  const [macaddress, setMacaddress] = useState("");

  async function saveMacaddress() {
    await localStorage.setItem("@todo/macaddress", macaddress);
  }

  return (
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
          <input
            type="text"
            name="macaddress"
            id="mac"
            onChange={(e) => setMacaddress(e.target.value)}
            value={macaddress}
          />
          <button type="button" onClick={saveMacaddress}>Sincronizar</button>
        </MacAddressInputStyles>
      </QRCODEPageStyles>
      <Footer />
    </>
  );
}

export { QRCODEPage };
