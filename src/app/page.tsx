import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import localFont from 'next/font/local'
import Card from "./components/card/card";

const mont = localFont({
  src: '../../public/fonts/Mont/Mont-regular.otf',
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className="logo">
          <Image src={'/Employ-logo-cor-fundo-preto.png'} height={70} width={168} alt="Logo da empresa Employ" ></Image>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li className={`${styles.navItem} ${styles.dropdown}`}>
              <a href="">Product<FontAwesomeIcon style={{marginLeft: '0.375rem'}} color="rgb(161, 163, 170)" height={14} icon={faChevronDown} /></a>
            </li>
            <li className={styles.navItem}>
              <a href="">Learning Center<FontAwesomeIcon style={{marginLeft: '0.375rem'}} color="rgb(161, 163, 170)" height={14} icon={faChevronDown} /></a>
              </li>
            <li className={`${styles.navItem} ${styles.active}`}><a href="">Pricing</a></li>
            <li className={styles.navItem}><a href="">Watch demo</a></li>
          </ul>
        </nav>
        <div >
          <button type="button" className={styles.button} style={{ marginRight: '10px' }}>Log in</button>
          <button type="button" className={styles.button}>Get started</button>
        </div>
      </header>
      <div className={styles.persuasiveDiv}>
        <h1 className={mont.className} style={{marginBottom: "30px", fontSize: "54px"}}>Pick the plan that’s right for you</h1>
        <p style={{marginBottom: "15px", fontSize: "24px"}}>No credit card required.</p>
        <div className={styles.subPersuasive}>
          <span style={{fontWeight: "bold"}}>Billed yearly save 20%</span> | <span>Billed monthly</span>
        </div>
      </div>
      <main>
        <div className={styles.cardDiv}>
          <Card plan="Free" price={0} isfree={true} text="Seriously, free forever" op1="✓ Up to 10 videos" op2="✓ Customizable player" op3="✓ Recording and editing"></Card>
          <Card plan="Bronze" price={19} isfree={false} text="Billed at $228 per year" op1="✓ Remove Wistia branding" op2="✓ Basic CTAs" op3="✓ Multiple users" complement="Everything in Free, and…"></Card>
          <Card plan="Silver" price={79} isfree={false} text="Billed at $948 per year" op1="✓ Lead capture forms" op2="✓ Enhanced data analytics" op3="✓ Webinar hosting" complement="Everything in Bronze, and…"></Card>
          <Card plan="Gold" price={319} isfree={false} text="Billed at $3.828 per year" op1="✓ Marketing integrations" op2="✓ Unlimited video galleries" op3="✓ Custom branded webinars" complement="Everything in Silver, and…"></Card>
        </div>
      </main>
    </>
  );
}
