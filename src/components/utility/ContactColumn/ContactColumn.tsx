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
                href="https://www.google.com/maps/place/M.G.+dental+clinic+and+implant+center/@27.6571565,85.3199586,16.69z/data=!4m6!3m5!1s0x39eb170015b800ed:0xa559e882c4265737!8m2!3d27.6572897!4d85.3220152!16s%2Fg%2F11mt4b6vsc?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D"
                className="footer-link"
                target="_blank"
            >
                <address className={styles.itemText}>
                    Chapagaun Dobato <br />
                    Lalitpur, Nepal
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
                href="mailto:mgdentalclinicandimplantcenter@gmail.com"
                className="footer-link"
            >
                mgdentalclinicandimplantcenter@gmail.com
            </a>
        </li>
    </>
));

ContactColumn.displayName = "ContactColumn";