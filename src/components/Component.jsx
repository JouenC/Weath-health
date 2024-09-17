import PropTypes from "prop-types";

/**
 * Input
 *
 * @param   {object}      props
 * @param   {string}      props.className        [input wrapper className]
 * @param   {string}      props.id               [label "html for" identifiant]
 * @param   {string}      props.label            [label name]
 * @param   {string}      props.type             [type of content]
 * @param   {string}      props.value            [value of content]
 * @param   {function}    props.handleChange     [handling input change]
 *
 * @returns {Reactnode}   jsx injected in DOM
 */

export default function Component ({
    type,           
    className,
    id,
    label,
    value,
    handleChange,
}) {
    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={handleChange}
            />
        </div>    
    )
}

Component.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    handleChange: PropTypes.func.isRequired,
}
        
