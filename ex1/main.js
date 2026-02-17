const {tab,element}= require('./data');
const searchElement= require('./searchElement')

searchElement(tab,element,(err,position) => {
    if (err){
        console.log(err.message)
    }else{
        console.log(`Element found qt position ${position}`)
    }
})