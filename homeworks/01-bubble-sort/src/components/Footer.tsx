import "../styles/Footer.scss";

type FooterProps = {
  generate: () => void;
  start: () => void;
};

const Footer = (props: FooterProps) => {
  return (
    <footer>
      <div className="controls">
        <button onClick={props.generate}>New set</button>
        <button onClick={props.start}>Start</button>
      </div>
      <p className="status">Not solved | Paused | Solved</p>
    </footer>
  );
};

export default Footer;
