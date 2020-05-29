/**
 * Truncate function
 * Takes a string of text and returns a shorter version,
 * followed by a clamp (default clamp='...')
 *
 * @param {String} text - Text to be truncated
 * @param {Number} length [length=300] - Max lenght of returned text
 * @param {String} clamp [clamp='...'] - Defines the clamp/end of the truncated text
 *
 * @returns {String}
 */
export function truncate(text, length = 300, clamp = '...') {
    if (text.length <= length) return text;

    let tcText = text.slice(0, length - clamp.length);
    let last = tcText.length - 1;

    while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0]) last -= 1;

    // Fix for case when text dosn't have any `space`
    last = last || length - clamp.length;

    tcText =  tcText.slice(0, last);

    return tcText + clamp;
}
