import styles from "./card.module.css"
import React from 'react';

export default function Card(props: {plan: string, price: number, isfree: boolean, text: string, op1: string, op2: string, op3: string, complement?: string}) {
    let plan = props.plan;
    let price = props.price;
    let isfree = props.isfree;
    let text = props.text;
    let op1 = props.op1;
    let op2 = props.op2;
    let op3 = props.op3;
    let complement = props.complement;
    return (
        <div className={styles.cardBody}>
            <h2 className={styles.plan}>{plan}</h2>
            <div className={styles.price}>
                ${price}<span style={{ fontSize: "16px" }}>{isfree ? "" : " /mo"}</span>
            </div>
            <p>{text}</p>
            <button type="button" className={styles.button}>{isfree ? "Sign up for free" : "Start a free trial"}</button>
            <p style={{marginBottom: "10px"}}>{isfree ? "" : complement}</p>
            <ul className={styles.list}>
                <li>{op1}</li>
                <li>{op2}</li>
                <li>{op3}</li>
            </ul>
        </div>
    )
}