/* eslint-disable no-console */
import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
// import News from './allNewsFeed';
let API_KEY = 'e1d9404cdd08407a82e260634ee3fcca';
let url = 'https://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    'apiKey=' + API_KEY;

let req = new Request(url);
let allIn = [];

// if (News.Promise[0] = "resolved") {

// }
const news = [
    {
        id: 'cory-house',
        firstName: 'Cory',
        lastName: 'House'
    },
    {
        id: 'scott-allen',
        firstName: 'Scott',
        lastName: 'Allen'
    },
    {
        id: 'dan-wahlin',
        firstName: 'Dan',
        lastName: 'Wahlin'
    }
];

//This would be performed on the server in a real app. Just stubbing in.
// const generateId = (author) => {
//     return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
// };

class NewsApi {
    static getAllNews() {
        return new Promise((resolve, reject) => {
            fetch(req)
                .then(body => {
                    return body.json();
                })
                .then(data => {
                    setTimeout(() => {
                        resolve(Object.assign([], data.articles));
                    }, delay);
                })
                .catch(error => {
                    console.log('error:', error);
                });

        });
    }

    static saveNews(news1) {
        news1 = Object.assign({}, news1); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minAuthorNameLength = 3;
                if (news1.firstName.length < minAuthorNameLength) {
                    reject(`First Name must be at least ${minAuthorNameLength} characters.`);
                }

                if (news1.lastName.length < minAuthorNameLength) {
                    reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
                }

                if (news1.id) {
                    const existingAuthorIndex = news.findIndex(a => a.id == news1.id);
                    news.splice(existingAuthorIndex, 1, news1);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids for new authors in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    news.push(news1);
                }

                resolve(news1);
            }, delay);
        });
    }

    static deleteAuthor(newsId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfAuthorToDelete = news.findIndex(news1 => {
                    news1.id == newsId;
                });
                news.splice(indexOfAuthorToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default NewsApi;