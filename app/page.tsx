"use client"
import Image from "next/image";
import BGDesktop from "./components/images/cassinopix-bg.jpg";
import style from "./page.module.css";
import bgPatern from "./components/images/BG-PATTERN.jpg";
import n1 from "./components/images/numbers.svg";
import n2 from "./components/images/number2.svg";
import pix from "./components/images/pix.svg"
import Headline from "./components/images/7K.png"
import BgMobile from "./components/images/bgmobile.png"
import Selo from "./components/images/selo.webp";
import Diferencias from "./components/images/diferencias.png"
import LogoCassino from "./components/images/LogoCassino.svg"
import Sponsor from "./components/images/7b13f83fa43714f59786efa4082f55a1.webp";
import insta from "./components/images/insta.svg";
import telegram from "./components/images/telegram.svg";
import sponsor01 from "./components/images/spr1.webp"
import sponsor02 from "./components/images/spr2.webp"
import sponsor03 from "./components/images/spr3.webp"
import sponsor04 from "./components/images/spr4.webp"
import sponsor05 from "./components/images/spr5.webp"
import sponsor06 from "./components/images/spr6.webp"
import sponsor07 from "./components/images/spr7.webp"
import sponsor08 from "./components/images/spr8.webp"
import Header from "./components/head/page";
import Terms from "./components/modals/terms/page";
import Terms2 from "./components/modals/modal2/page";
import Terms3 from "./components/modals/modal3/page";
import Terms4 from "./components/modals/modal4/page";



import { useState } from "react";



export default function Home() {
  const [terms, setTerms] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)

  return (
    <>
    <Header />
      <section className={style.section}>
        <div  className={`${style.bgImage} ${style.bgMobile} ${style.bgDesktop}`}>
          <div className={style.headlineDiv}>
            <div id={style.head}>
              <h1 className={style.headline}>
                GANHE ATÉ 
              </h1>
              <div>
                <Image  id={style.Image} className={style.headlineImg} src={Headline} alt="" />
              </div>
              <p>
                EM BÔNUS
              </p>
              <div>
                <Image id={style.pix}  src={Diferencias} alt="" />
              </div>
              <div className={style.btn}>
                <a href="https://cassinopix.com/">ABRA SUA <strong>CONTA!</strong></a>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section className={style.section02}>
          <div className={style.movingTextContainer}>
            <div className={style.movingText}>
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ
              R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM 
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE 
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 
              EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • 
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS •
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ
              R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM 
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE 
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 
              EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • 
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS •
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ
              R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM 
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE 
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 
              EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • 
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS •
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ
              R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM 
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE 
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 
              EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • 
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS •
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ
              R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM 
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE 
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 
              EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • 
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS •
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ
              R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM 
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE 
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 
              EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • 
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS •
              
            </div>
          </div>
          <div className={style.movingTextContainer2}>
            <div className={style.movingText2}>
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ
              R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM 
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE 
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 
              EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • 
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS •
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ
              R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM 
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE 
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 
              EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • 
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS •
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ
              R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM 
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE 
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 
              EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • 
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS •
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ
              R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM 
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE 
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 
              EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • 
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS •
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ
              R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM 
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE 
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 
              EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • 
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS •
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ
              R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM 
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE 
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM
              BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE
              ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 
              EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS • 
              GANHE ATÉ R$ 7000 EM BÔNUS • GANHE ATÉ R$ 7000 EM BÔNUS •
              
            </div>
          </div>
        </section>
        <section className={style.bgPattern} style={{backgroundImage: `url(${bgPatern.src})`}}>
          <h2>
            COMO RESGATAR SEU BÔNUS
          </h2>
          <div className={style.numsDiv}>
            <div>
             <span className={style.nums}>
              1
             </span>
              <p>
                <span>CRIE SUA CONTA</span> FÁCIL E RÁPIDO, EM POUCOS MINUTOS
              </p>
            </div>
            <div>
              <span className={style.nums}>2</span>
              <p>
                <span>FAÇA UM DEPÓSITO</span> DEPÓSITO MÍNIMO DE R$5
              </p>
            </div>
            <div>
             <span className={style.nums}>3</span>
              <p>
                <span>RECEBA SEU BÔNUS</span> RECEBA O DOBRO NA HORA!
              </p>
            </div>
          </div>
        </section>
        <footer className={style.footer}>
          <div>
              <Image width={200} src={LogoCassino}  alt=""/>
              <Image width={300} className={style.selo} src={Selo} alt="" />
            <div className={style.divSocial}>
              <a href="https://www.instagram.com/cassino.pix/?hl=en">
              <Image src={insta} alt="" />
              </a>
              <a href="https://t.me/Suportecassinopix_bot">
              <Image src={telegram} alt="" />
              </a>
            </div>
          </div>
          <div>
            <Image width={150} src={Sponsor} alt="" />
          </div>
          <div>
            <p>
            CassinoPix is an online entertainment website that offers its users a unique sports betting experience. This website is operated by NovaWave Technology N.V., a company registered in Curaçao, under number 162293, with registered office in Zuikertuintjeweg Z/N (Zuikertuin Tower), Curaçao, an entity duly authorized and licensed by the Government of Curaçao.
            </p>
            <p>
            By accessing, continuing to use, or browsing this website you agree that we may use certain browser cookies to improve your experience whilst using our site. We only use cookies to enhance your experience, and this does not interfere with your privacy.
            </p>
          </div>
        </footer>
        <div className={style.sponsors}>
          <Image src={sponsor01} alt="" />
          <Image src={sponsor02} alt="" />
          <Image src={sponsor03} alt="" />
          <Image src={sponsor04} alt="" />
          <Image src={sponsor05} alt="" />
          <Image src={sponsor06} alt="" />
          <Image src={sponsor07} alt="" />
          <Image src={sponsor08} alt="" />
        </div>
        <div className={style.terms}>

          <button onClick={()=>{
            setTerms(true)
          }}>
            <span>
              Termos e Condições
            </span>
          </button>

          <button onClick={()=>{
            setModal1(true)
          }}>
          <span>
            Políticas de Cookies
          </span>
          </button>
          <button onClick={()=>{
            setModal2
          }}>

          </button>

          <button onClick={()=>{
            setModal3(true)
          }}>
          <span>
            Regras e Regulamentos
          </span>
          </button>

          <button onClick={()=>{
            setModal3(true)
          }}>
          <span>
            Políticas de Privacidade
          </span>
          </button>

        </div>
    {terms && (
      <div className="modal">
        <button onClick={()=>{
          setTerms(false)
        }}>
          <Terms />
        </button>
       
      </div>
    )}

    {modal1 && (
      <div className="modal">
        <button onClick={()=>{
          setModal1(false)
        }}>
          <Terms />
        </button>
       
      </div>
    )}
        {modal2 && (
      <div className="modal">
        <button onClick={()=>{
          setModal2(false)
        }}>
          <Terms2 />
        </button>
       
      </div>
    )}
        {modal3 && (
      <div className="modal">
        <button onClick={()=>{
          setModal3(false)
        }}>
          <Terms3 />
        </button>
       
      </div>
    )}
    </>
  );
}
