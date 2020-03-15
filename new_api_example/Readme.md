# News API
This is a API for accessing topics of information from newsapi.org .
## Pre-Requisites.

- node.js | express.js | fetch | request
- jest.js | supertest.js

## Instructions

- Clone the repo.
- Sign up for a free developer account at [**News API**](https://newsapi.org/) and add your API key inside secret.js (or whatever is easiest).
- Npm start to run the server.
- Send HTTP request, using Postman as an example, of "localhost:8081/climate" to receive JSON document response.
- Response format is JSON document as below:
    ``` javascript
    {
        "title": [string], // The headline or title of the article
        "author": [string], // The author of the article
        "source_name": [string], // Display name for the source this article came from
        "published_utc": [string], // The UTC date and time that the article was published, in ISO 8601 format
        "dataload_utc": [string], // The UTC date and time that your API app is called, in ISO 8601 format
    }
 
- NPM test runs the jest unit test, checking that there is a response from the API.
# How to deploy to cloud environment
- Firebase cloud functions is one option.
- Simple integrate this API with firebase tools, upload the tool to Firebase Cloud Functions, and require authentication to be able to call the API (Using firebase auth for ease).


## Evaluation criteria

Your work will be evaluated based on the following criteria:
- Functional requirements as specificed
- Proper workflow and branching strategy
- Proper handling of secrets
- Clarity of the instructions in the `README.md` file
- We do not judge on coding style and paradigm but would appreciate code with clear logic flow and effective use of resources
