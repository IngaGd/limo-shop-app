import { allAssets } from "../../../assets/assets";
import styles from "./logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src={allAssets[`logoTransparent`]} alt="" className={styles.logo} />
    </div>
  );
}
