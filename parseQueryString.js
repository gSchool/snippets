const stringToObject = (currentString) => {
    let splitString = currentString.split("=")
    return {key: splitString[0], value: splitString[1]}
}

const arrayToObj = (obj,item) => {
    obj[item.key] = item.value; 
    return obj;
}

const parseQueryString = (str) => {
    const queryStr = str.slice(str.indexOf('?') + 1);
    return queryStr.split("&").map(stringToObject).reduce(arrayToObj, {});
  }
  
let result = parseQueryString('http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA')
console.log(result)