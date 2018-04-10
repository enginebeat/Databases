var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model('Cat', catSchema);

/* one way of adding data to the database
var george = new Cat({
    name: 'Mrs. Norris',
    age: 7,
    temperament: 'Evil'
});

function addCat(){
    george.save((err, cat)=>{
        if(err){
            console.log('Something went wrong!');
        }else{
            console.log('Just added a cat');
            console.log(cat);
        }
    });
}
*/



/* A more consise way of adding an element to the database
notice hte call back to check for error.
*/

Cat.create({
    name: 'Snow White',
    age: 15,
    temperament: 'Bland'
}, (err, cat)=>{
        if(err){
            console.log(err);
        }else{
            console.log(cat);
        }
    }
);

Cat.find({}, (err, cats)=>{
    if(err){
        console.log('We had a error!');
        console.log(err);
    }else{
        console.log("All the cats in the database");
        console.log(cats);
    }
});