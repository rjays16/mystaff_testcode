import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { width } from '@mui/system';
import styles from './styles.module.css';

export default function Sidebar(): React.JSX.Element {
  return (
    <div className={styles.frame51}>
    <div className={styles.frame37}>
      <div className={styles.frame40}>
        <div className={styles.frame39}>
          <div className={styles.frame13}>
          </div>
          <div className={styles.frame38}>
            <div className={styles.chrissielee}>
              Chrissie Lee
            </div>
            <span className={styles.client}>
              Client
            </span>
          </div>
        </div>
      </div>
      <Divider/>
      <div className={styles.frame46}>
        <div className={styles.contactinformation}>
          CONTACT INFORMATION
        </div>
        <div className={styles.frame44}>
          <div className={styles.frame42}>
            <div className={styles.frame48}>
              <div className={styles.icmessages}>
                <img src="/assets/email.png" className={styles.vector79} />
              </div>
              <span className={styles.email}>
                Email
              </span>
            </div>
            <span className={styles.chrissieleegmailcom}>
              chrissielee@gmail.com
            </span>
          </div>
          <div className={styles.frame43}>
            <div className={styles.frame47}>
              <div className={styles.icphone}>
                <img src='/assets/phone.png' className={styles.vector80} />
              </div>
              <span className={styles.phone}>
                Phone
              </span>
            </div>
            <span className={styles.numb1}>
              +01 234 567 8910
            </span>
          </div>
          <div className={styles.frame4422}>
            <div className={styles.frame4823}>
              <div className={styles.icpin}>
                <img src="/assets/address.png" className={styles.vector81} />
              </div>
              <span className={styles.address}>
                Address
              </span>
            </div>
            <span className={styles.california}>
              1st Avenue, Golden Street,<br />
              Springville Village,<br />
              San Diego, California
            </span>
          </div>
        </div>
      </div>
     <Divider/>
    </div>
  </div>
  );
}
