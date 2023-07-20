import "./Maps.css";

function Maps(): JSX.Element {
  return (
    <div className="Maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d81075.68385539186!2d34.848662778702284!3d32.02462627332681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d32.0054394!2d34.776078399999996!4m5!1s0x151d4b70c925e5ed%3A0x9e629a46351e04c3!2sjohn%20brice%20map!3m2!1d32.063966!2d34.7867361!5e0!3m2!1siw!2sil!4v1689855808087!5m2!1siw!2sil"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Maps;
