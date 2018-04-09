import { INSPECT_MAX_BYTES } from 'buffer';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model('Cat', catSchema);

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


Cat.find({}, addCat, (err, cats)=>{
    if(err){
        console.log('We had a error!');
        console.log(err);
    }else{
        console.log("All the cats in the database");
        console.log(cats);
    }
});
