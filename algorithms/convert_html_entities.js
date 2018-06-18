/*
 * Convert the characters &, <, >, " (double quote), and ' (apostropher), in a string to their corresponding HTML name codes.
 */
function convertHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/'/g, "&apos;");
}
