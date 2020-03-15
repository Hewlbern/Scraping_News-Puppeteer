const express = require('express');
const app = express();
const fetch = require('node-fetch');
const secret = require('./secret.js')


/*
Using the News API, build an API app that:
Takes a query string parameter called keyword
Uses the input value from the keyword parameter to search for news articles on that topic in the language of English
Retrieves the most recent 200 news articles from the result
Returns a JSON document as a list of objects in the following format:


{
    "title": [string], // The headline or title of the article
    "author": [string], // The author of the article
    "source_name": [string], // Display name for the source this article came from
    "published_utc": [string], // The UTC date and time that the article was published, in ISO 8601 format
    "dataload_utc": [string], // The UTC date and time that your API app is called, in ISO 8601 format
}


Also include a unit test.

*/



app.get('/:keyword', function (req, res) {

    // news api takes information from a large amount of news sources worldwide. https://newsapi.org/ .
    // the URL below looks through all english articles, from the date below, sorting by the time it was published.
    var url = 'https://newsapi.org/v2/everything?' +
        'language=en&' +
        `q=${req.params.keyword}&` +
        'from=2020-02-15&' +
        'sortBy=publishedAt&' +
        'pageSize=100&' +
        `apiKey=${secret}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // news_data - the important data is stored in articles key.
            var news_data = data["articles"]
            // Date() creates a UTC time for when the API is called.
            var Api_Time = new Date();
            // result uses the map function to iterate through the news_data array, collecting the information we are looking for.
            // .slice(0,200) to just look at 200 articles max
            const result = news_data.slice(0, 200).map(function (news) {
                return {
                    title: news["title"],
                    author: news["author"],
                    source_name: news["source"]["name"],
                    published_utc: news["publishedAt"],
                    dataload_utc: Api_Time
                }
            });
            res.send(
                { result });
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = app
