var express = require('express');
var app = express();

app.get('/', function(req, res){
  //render views/stockSelect.ejs template file
  res.render('pages/stockSelect', {title: 'STOCKSELECT PAGE'})
});

module.exports = app;


var company = {}

    var symb = []
    var company_names = []

    $(document).ready(function() {
        var most_active_url = 'https://api.iextrading.com/1.0/stock/market/list/mostactive'
        $.ajax({url:most_active_url, dataType:"jsonp"}).then(function(data) {

            //populate symb with symbols and company_names with names of 10 most active companies
            var i;
            for(i = 0 ; i < data.length; i++){
                symb.push(data[i].symbol)
                //cut off company name if it exceeds 25 characters
                var letter_limit = 25;
                if(data[i].companyName.length > letter_limit){
                    var new_str
                    var n
                    for(n = letter_limit; n > 0; n--){
                        if(data[i].companyName.charAt(n) == ' '){
                            new_str = data[i].companyName.substring(0,n)
                            break
                        }
                    }
                    company_names.push(new_str)
                }else{
                    
                    company_names.push(data[i].companyName)
                }
                //populate company object
                company[symb[i]] = company_names[i];

            }


            var num = 1
            Object.keys(company).forEach(function(key) {
                //key is the company's symbol
                //value is the company's name
                var value = company[key];
                console.log(key);
                   
                var str_logo = '#results' + num

                var str = '#name' + num
                $(str).text(value)

                var url ='https://api.iextrading.com/1.0/stock/' + key + '/logo'
                $.ajax({url:url, dataType:"jsonp"}).then(function(data_url) {
                    $(str_logo).css({'background-image' : 'url(' + data_url.url + ')', 'background-repeat' : 'no-repeat', 'background-position' : 'center'});
                });
                num++
                
            });
            
  
        })
   
    })
    





