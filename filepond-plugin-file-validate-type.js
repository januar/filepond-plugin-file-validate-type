/*
 * FilePondPluginFileValidateType 1.0.0
 * Licensed under MIT, https://opensource.org/licenses/MIT
 * Please visit https://pqina.nl/filepond for details.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.FilePondPluginFileValidateType=n()}(this,function(){"use strict";var e=function(e){var n=e.addFilter,t=e.utils,i=t.Type,o=t.isString,r=t.guesstimateMimeType,u=t.getExtensionFromFilename,a=t.getFilenameFromURL,l=function(e,n){var t=(/^[^\/]+/.exec(e)||[]).pop(),i=n.slice(0,-2);return t===i},T=function(e,n){return e.some(function(e){return/\*$/.test(e)?l(n,e):e===n})},c=function(e,n){if(0===n.length)return!0;var t="";if(o(e)){var i=a(e),l=u(i);if(!l)return!0;t=r(l)}else t=e.type;return T(n,t)};n("SET_ATTRIBUTE_TO_OPTION_MAP",function(e){return Object.assign(e,{accept:"acceptedFileTypes"})}),n("SET_DEFAULT_OPTIONS",function(e){return Object.assign(e,{allowFileTypeValidation:[!0,i.BOOLEAN],acceptedFileTypes:[[],i.ARRAY],labelFileTypeNotAllowed:["File is of invalid type",i.STRING]})}),n("LOAD_FILE",function(e,n){var t=n.query;return new Promise(function(n,i){var o=t("GET_ALLOW_FILE_TYPE_VALIDATION");if(!o)return void n(e);var r=t("GET_ACCEPTED_FILE_TYPES");return c(e,r)?void n(e):void i({status:{main:t("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),sub:t("GET_ACCEPTED_FILE_TYPES").join(", ")}})})})};return document&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:e})),e});