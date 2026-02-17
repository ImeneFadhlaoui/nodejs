
function searchElement(tab,element,callback) {
    let position = -1;
    for (let i = 0; i<tab.length; i++){
        if (tab[i] == element) {
            position = i;
            break;
        }
    }
    if (position !== -1) {
        callback(null, position);
    }else{
        callback(new Error('Element not found'), null)
    }
}

module.exports = searchElement