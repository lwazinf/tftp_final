import styles from "../styles/Landing.module.css";
import Image from "next/image";
import BlogPics from "./BlogPics";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles._detailPills}>
        <div className={styles._pill}>UPCOMING EVENTS</div>
      </div>
      <div className={styles._cardHolder}>
        <EventCard
          bg={"/assets/kart.jpg"}
          date={"12 / 01 / 2022"}
          quote={"Go Kart Competition"}
          cost={"R200"}
          pos={"center"}
        />
        <EventCard
          bg={"/assets/funDay.jpg"}
          date={"12 / 01 / 2022"}
          quote={"General Fun Day"}
          cost={"R200"}
          pos={"-30px"}
        />
        <EventCard
          bg={"/assets/paintball.jpg"}
          date={"12 / 01 / 2022"}
          quote={"Paintball"}
          cost={"R200"}
          pos={"-20px"}
        />
      </div>
    </div>
  );
};

export default Landing;

const EventCard = (props) => {
  const _date = props.date;
  const _quote = props.quote;
  const _bg = "url('" + props.bg + "')";
  const _pos = props.pos
  const _cost = props.cost;
  return (
    <div className={styles._card}>
      <div
        style={{
          background: _bg,
          backgroundSize: "cover",
          backgroundPositionY: _pos,
        }}
        className={styles._cardImage}
      ></div>
      <div className={styles._date}>
        {_date}
        <br />
        <br />
       <p style={{
         position: 'relative',
        bottom: '48px',
        left: '90px',
        fontWeight: '600',
        fontSize: '14px',
        color: 'black',
       }}>{_cost} pp </p>
        <div className={styles._cta}></div>
      </div>
      <div className={styles._quote}>{_quote}</div>
    </div>
  );
};
