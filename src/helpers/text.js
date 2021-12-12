/**
 * pluralizeNoun(0, 'turtle'); // turtles
 * pluralizeNoun(1, 'turtle'); // turtle
 * pluralizeNoun(2, 'turtle'); // turtles
 * pluralizeNoun(3, 'fox', 'es'); // foxes
 * @param {number} count
 * @param {string} noun
 * @param {string} suffix
 */
export const pluralizeNoun = (count, noun, suffix = 's') => {
    return `${noun}${count !== 1 ? suffix : ''}`;
};

/**
 * pluralize(0, 'turtle'); // 0 turtles
 * pluralize(1, 'turtle'); // 1 turtle
 * pluralize(2, 'turtle'); // 2 turtles
 * pluralize(3, 'fox', 'es'); // 3 foxes
 * @param {number} count
 * @param {string} noun
 * @param {string} suffix
 */
export const pluralize = (count, noun, suffix = 's') => {
    return `${count} ${pluralizeNoun(count, noun, suffix)}`;
};
