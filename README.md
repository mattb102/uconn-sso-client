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

You wil need to run the auth function twice. The second time should be run after the redirect when the ticket and service and supplied in your URL. An example of this is with a useEffect in react:
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
