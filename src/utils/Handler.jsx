/**
 * Get an element by its id
 * @param   {string}  id    [element identifier]
 * @return  {node}    html   [collection]
 */
export const getElement = (id) => {
    return document.getElementById(id);
  };
  
/**
 * Get many elements by their common classname
 * @param   {string}  className  [element className]
 * @return  {object}  html       [nodes collection]
 */
export const getElements = (className) => {
return [...document.getElementsByClassName(className)];
};

  
/**
 * Set multiple attributes
 * @param   {node}    element       [html]
 * @param   {string}  attributes    [attributes names]
 * @return  {object}                [element attributes]
 */
export const setAttributes = (element, attributes) => {
    for (var key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  };

  /**
 * Get many elements by their common classname
 * @param   {[type]}  tag    [tag description]
 * @return  {object}  html   [nodes collection]
 */
export const getTags = (tag) => {
    return [...document.getElementsByTagName(tag)];
  };
  
  /**
   * Get many nested elements by their common tag
   *
   * @param   {string}  tag1   [tag1 name]
   * @param   {number}  index  [index]
   * @param   {string}  tag2   [tag2 name]
   * @return  {object}  html   [nodes collection]
   */
  export const getNestedTags = (tag1, index, tag2) => {
    return [
      ...document.getElementsByTagName(tag1)[index].getElementsByTagName(tag2),
    ];
  };


