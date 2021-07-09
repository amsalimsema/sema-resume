import Head from "next/head";
import Image from "next/image";
// import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.outer}>
        <Image src="/apercu.jpg" alt="dooo" layout="fill" />
        <div className={styles.content}>hallelu</div>
      </div>
      <div className={styles.Home}>
        <div className={styles.outer}>
          <Image src="/principles.jpg" alt="dooo" layout="fill" />
          <div className={styles.content}>hallelu</div>
        </div>
        <div className={styles.info_wrap}>
          <p className={styles.info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iusto
            quasi quis, perferendis unde dolor vero placeat doloremque dolorum
            cupiditate commodi velit, incidunt modi illo harum necessitatibus
            architecto nisi aliquam!
          </p>
        </div>

        <div className={styles.info_wrap}>
          <p className={styles.info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iusto
            quasi quis, perferendis unde dolor vero placeat doloremque dolorum
            cupiditate commodi velit, incidunt modi illo harum necessitatibus
            architecto nisi aliquam!
          </p>
        </div>
        <div className={styles.outer}>
          <Image src="/me.jpg" alt="dooo" layout="fill" />
          <div className={styles.content}>hallelu</div>
        </div>
      </div>

      <div className={styles.box}>
        <Row className="no-gutters">
          <Col md={6}>
            <div className={styles.outer}>
              <Image src="/me.jpg" alt="dooo" layout="fill" />
              <div className={styles.content}>hallelu</div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
