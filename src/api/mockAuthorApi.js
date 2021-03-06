/* eslint-disable no-console */
import delay from './delay';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
// import News from './allNewsFeed';
let API_KEY = 'e1d9404cdd08407a82e260634ee3fcca';
let url = 'https://newsapi.org/v2/sources?' +
    'apiKey=' + API_KEY;

let req = new Request(url);
let allIn =[];

// if (News.Promise[0] = "resolved") {

// }
const authors = [];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author) => {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

class AuthorApi {
    static getAllAuthors() {
        return new Promise((resolve, reject) => {
            fetch(req)
                .then(body => {
                    return body.json();
                })
                .then(data => {
                    setTimeout(() => {
                        resolve(Object.assign([], data.sources));
                    }, delay);
                })
                .catch(error => {
                    console.error('error:', error);
                });
            
        });
    }

    static saveAuthor(author) {
        author = Object.assign({}, author); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minAuthorNameLength = 3;
                if (author.firstName.length < minAuthorNameLength) {
                    reject(`First Name must be at least ${minAuthorNameLength} characters.`);
                }

                if (author.lastName.length < minAuthorNameLength) {
                    reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
                }

                if (author.id) {
                    const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
                    authors.splice(existingAuthorIndex, 1, author);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids for new authors in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    author.id = generateId(author);
                    authors.push(author);
                }

                resolve(author);
            }, delay);
        });
    }

    static deleteAuthor(authorId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfAuthorToDelete = authors.findIndex(author => {
                    author.id == authorId;
                });
                authors.splice(indexOfAuthorToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default AuthorApi;