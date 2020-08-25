const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://www.aladin.co.kr/shop/common/wbest.aspx?BestType=Bestseller&BranchType=1&CID=798')
    .then(res => {
        const $ = cheerio.load(res.data);


        const result = $('.ss_book_list');

        result.each((i, v) => {


            const title = $(v).find('.bo3 > b').text();
            const author = $(v).find('ul > li:nth-child(2) > a:first-child').text();
            const date = $(v).find('ul > li:nth-child(2)').text();

            
            console.log(date.match(/\d.+년.+월/g));
        })



    })