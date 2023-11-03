import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Security solutions built <br className="sm:block hidden" /> on customer trust.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our cybersecurity methodology is tried and tested to create a uniformly successful security experience for all of our clients.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
