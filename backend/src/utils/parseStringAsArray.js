module.exports = function parsestringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}