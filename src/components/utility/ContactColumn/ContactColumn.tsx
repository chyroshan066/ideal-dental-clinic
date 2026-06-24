import { memo } from "react";
import { IonIcon } from "../IonIcon";
import { CONTACTS } from "@/constants/contact-links";
import styles from "./ContactColumn.module.css";

export const ContactColumn = memo(() => (
    <>
        <li className={styles.footerItem}>
            <div className={styles.itemIcon}>
                <IonIcon name="location-outline" />
            </div>
            <a
                href="https://www.google.com/maps/place/Ideal+dental+clicnic/@27.7206116,85.3605623,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1bdaf24bcfc1:0x5390d884f64baa86!8m2!3d27.7206069!4d85.3631372!16s%2Fg%2F11b6lj7f0t?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D"
                className="footer-link"
                target="_blank"
            >
                <address className={styles.itemText}>
                    Boudha Road <br />
                    Kathmandu, Nepal
                </address>
            </a>
        </li>

        {CONTACTS.map((contact, index) => (
            <li
                key={index}
                className={styles.footerItem}
            >
                <div className={styles.itemIcon}>
                    <IonIcon name={contact.ionIcon} />
                </div>
                <a
                    href={contact.href}
                    className="footer-link"
                    target="_blank"
                >
                    {contact.textNumber}
                </a>
            </li>
        ))}

        <li className={styles.footerItem}>
            <div className={styles.itemIcon}>
                <IonIcon name="mail-outline" />
            </div>
            <a
                href="mailto:idealdentalcare61@gmail.com"
                className="footer-link"
            >
                idealdentalcare61@gmail.com
            </a>
        </li>
    </>
));

ContactColumn.displayName = "ContactColumn";