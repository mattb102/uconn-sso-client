# uconn-sso-client
by Matt Beauvais

# Installation
Install the package via npm:
`npm install uconn-sso-client`

Then import it in your code:
```js
import  UconnCasClient  from  'uconn-sso-client';
```

# Usage
```js
const casClient = new UconnCasClient
casClient.auth()
  .then(async (netID: string) => {
    // success!
    console.log(netID)
    // do whatever you need to do
 })
  .catch((error: any) => {
    // failure!
    console.log("NetID Auth Failed")
    // handle error
})
```

You wil need to run the auth function twice. The first call to auth will redirect the user to the NetID sign in page to enter their credentials (or, if the person already has signed into NetID before, this will be skipped). They will then be redirected back to your app with a service and ticket parameter in the url. The second time should be run after the redirect when the ticket and service and supplied in your URL, this time the function will validate the ticket with UCONN's server. An example of this is with a useEffect in react to automatically run the function again if the ticket and service params are supplied on whatever page you handle logging in on:
```js
useEffect(() => {
    // code to run after render goes here
    const queryParameters = new URLSearchParams(window.location.search);
    if (queryParameters.get("ticket") && queryParameters.get("status")) {
      // call your auth function
    }
  }
```

# Notes

This is still a very early version, so I will work to improve this to make it easier to use. I am also open to any PR's

# Resources

See: https://iam.uconn.edu/the-cas-protocol-for-application-owners/ for UCONN's overview of CAS. You should have a basic understanding on how this works before using this module
