import HectorIcon from "../../assets/icons/MagicLogo.png";
import "./notfound.scss";

export default function NotFound() {
  return (
    <div id="not-found">
      <div className="not-found-header">
        <a href="#" target="_blank">
          <img className="branding-header-icon" src={HectorIcon} alt="MagicDAO" />
        </a>

        <h2 style={{ textAlign: "center" }}>Page not found</h2>
      </div>
    </div>
  );
}
