import PropTypes from "prop-types";

const ButtonPrimary = ({ href, target = "_self", label, icon, classes = "", onClick }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-primary ${classes}`}
        onClick={onClick} // Add the onClick handler
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`} onClick={onClick}> {/* Add the onClick handler */}
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func, // Add onClick prop type
};


//Button Secondary
const ButtonOutline = ({ href, target = "_self", label, icon, classes = "",download }) => {
    if (href) {
      return (
        <a href={href}   download={download} target={target} className={`btn btn-outline ${classes}`}>
          {label}
          {icon && (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          )}
        </a>
      );
    } else {
      return (
        <button className={`btn btn-outline ${classes}`}>
          {label}
          {icon && (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          )}
        </button>
      );
    }
  };
  
  ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
  };

export { ButtonPrimary ,ButtonOutline };
