////////// Web crawler com node ////////////////
/////// video do canal do Estevan Maito/////////
//  https://www.youtube.com/watch?v=2B6MpQvsQp0   //

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs'); //"módulo filesystem, que é nativo do node..."


request('https://www.imdb.com/chart/moviemeter', function(err,res,body){
    if(err) console.log('Deu erro: ', err);

    var $ = cheerio.load(body);

    $('.lister-list tr').each(function(){
        var title = $(this).find('.titleColumn a').text.trim();
        var rating = $(this).find('imdbRating strong').text.trim();

        console.log('Título :', title);
        console.log('rating: ', rating);

        fs.appendFile('imdb.txt', title + ' ' + rating + '\n');

    })

});