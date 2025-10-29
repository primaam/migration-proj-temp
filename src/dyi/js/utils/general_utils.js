/**
 * Formats a number with thousand separators using dots and decimal comma
 * 
 * @example
 * // Returns "1.234.567,89"
 * thousandSeparator(1234567.89);
 * 
 * @example
 * // Returns "500.000"
 * thousandSeparator(500000);
 * 
 * @param {number|string} number - The number to format
 * @returns {string} Formatted number with thousand separators
 */
export const thousandSeparator = (number) => {
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
};

/**
 * Formats a number with fixed decimal places and removes trailing zeros
 * 
 * @example
 * // Returns "123.45"
 * formatNumberComma(123.456, 2);
 * 
 * @example
 * // Returns "123.4"
 * formatNumberComma(123.400, 1);
 * 
 * @example
 * // Returns "123"
 * formatNumberComma(123.000, 2);
 * 
 * @example
 * // Returns 0
 * formatNumberComma(0, 2);
 * 
 * @param {number|string} number - The number to format
 * @param {number} [after=2] - Number of decimal places (default: 2)
 * @returns {string|number} Formatted number without trailing zeros, or 0 if input is 0
 */
export const formatNumberComma = (number, after = 2) => {
    let num = parseFloat(number);
    if (num === 0) return 0;

    return num.toFixed(after).replace(/\.?0+$/, "");
};

/**
 * Checks if a filename has an image extension
 * 
 * @example
 * // Returns true
 * isImageFile("photo.jpg");
 * 
 * @example
 * // Returns true
 * isImageFile("image.PNG");
 * 
 * @example
 * // Returns false
 * isImageFile("document.pdf");
 * 
 * @param {string} filename - The filename to check
 * @returns {boolean} True if the file is an image, false otherwise
 */
export const isImageFile = (filename) => {
    const extention = getExtentionFile(filename);
    return /(jpe?g|jpg|png|gif|bmp)$/i.test(extention);
};

/**
 * Extracts the file extension from a filename
 * 
 * @example
 * // Returns "jpg"
 * getExtentionFile("photo.jpg");
 * 
 * @example
 * // Returns "pdf"
 * getExtentionFile("document.pdf?v=1.0");
 * 
 * @example
 * // Returns undefined
 * getExtentionFile("filewithout extension");
 * 
 * @param {string} filename - The filename to extract extension from
 * @returns {string|undefined} The file extension in lowercase, or undefined if no extension found
 */
export const getExtentionFile = (filename) => {
    return (filename.match(/\.([^.]*?)(?=\?|#|$)/) || [])[1];
};

/**
 * Validates if a file type is either image or PDF
 * 
 * @example
 * // Returns true
 * validateFile("image/jpeg");
 * 
 * @example
 * // Returns true
 * validateFile("application/pdf");
 * 
 * @example
 * // Returns false
 * validateFile("text/plain");
 * 
 * @param {string} filetype - The MIME type of the file
 * @returns {boolean} True if file is image or PDF, false otherwise
 */
export const validateFile = (filetype) => {
    let valid = false;
    const splitFile = filetype.split("/");
    if (/(jpe?g|jpg|png|gif|bmp)$/i.test(splitFile[1])) {
        valid = true;
    } else if (/(pdf)$/i.test(splitFile[1])) {
        valid = true;
    }
    return valid;
};