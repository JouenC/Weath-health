import PropTypes from 'prop-types';

/**
 * Dropdown
 *
 * @param   {object}      props
 * @param   {string}      props.className        [input wrapper className]
 * @param   {string}      props.id               [label "html for" identifiant]
 * @param   {string}      props.label            [label name]
 * @param   {Array}       props.select           [select data for mapping]
 * @param   {function}    props.handleChange     [handling input change]
 *
 * @returns {Reactnode}   jsx injected in DOM
 */
export default function Dropdown({
  className,
  id,
  label,
  select,
  handleChange,
}) {
  
  // Fonction pour rendre les options
  const renderOptions = () =>
    select.map((item) => (
      <option
        title="dropdownOption"
        type="text"
        value={item.value}
        key={item.abbrev || item.value} // Clé de secours si `abbrev` n'existe pas
      >
        {item.label}
      </option>
    ));

  return (
    <div className={`form--inputWrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
      <select
        className="dropdownList"
        id={id}
        onChange={handleChange}
        aria-required="true"
        required
        defaultValue="" // Ajout d'une option par défaut vide
      >
        {renderOptions()}
      </select>
    </div>
  );
}

/**
 * Dropdown PROPTYPES
 */
Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  select: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      abbrev: PropTypes.string, // `abbrev` est facultatif
    })
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
};

// Default for `className`
Dropdown.defaultProps = {
  className: '', 
};