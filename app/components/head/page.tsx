import Image from "next/image"
import Logo from "../images/LogoCassino.svg"
import style from "./page.module.css"

export default function Header(){

    return(
        <>
        <div className={style.head}>
            <div className={style.margen}>
                <Image id={style.logoImg} className={style.img} width={150} src={Logo} alt="" /> 
                <div>
                    <a className={style.btn} href="https://cassinopix.com/">
                        ACESSAR <strong>CASSINO PIX</strong>
                    </a>
                </div>

            </div>
        </div>
        </>
    )

}