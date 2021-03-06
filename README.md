[![npm version](https://badge.fury.io/js/%40amraneze%2Freact-instagram-login.svg)](https://badge.fury.io/js/%40amraneze%2Freact-instagram-login)

# React Instagram Login

> An Instagram oAUth Sign-in / Log-in Component for React

## Install

```
npm install react-instagram-login

```

## How to use

### With default button

```js
import React from "react";
import ReactDOM from "react-dom";
import InstagramLogin from "react-instagram-login";

const responseInstagram = (response) => {
  console.log(response);
};

ReactDOM.render(
  <InstagramLogin
    clientId="5fd2f11482844c5eba963747a5f34556"
    buttonText="Login"
    onSuccess={responseInstagram}
    onFailure={responseInstagram}
  />,
  document.getElementById("instagramButton")
);
```

### With a custom button

```js
import React from 'react';
import ReactDOM from 'react-dom';
import InstagramLogin from 'react-instagram-login';

const responseInstagram = (response) => {
  console.log(response);
}

ReactDOM.render(
  <InstagramLogin
    clientId="5fd2f11482844c5eba963747a5f34556"
    buttonText="Login"
    onSuccess={responseInstagram}
    onFailure={responseInstagram}
    render={({onClick} => (<button onClick={onClick}>Login with Instagram</button>))}
  />,
  document.getElementById('instagramButton')
);
```

## onSuccess callback

### Displaying OAuth using a popup

> Note: The redirectUri needs to be the same url as the current url.

### Displaying OAuth using a redirection

If you want to use redirection you should change the prop `useRedirect` to true.

Callback will return a code for use on your server to get a full access_token.

If `implicitAuth` is set to `true` it will return the full access_token directly.

## onFailure callback

Callback will return an error object.

|   property name   | value  |
| :---------------: | :----: |
|       error       | string |
|   error_reason    | string |
| error_description | string |

## Parameters

|    params    |  value   |    default value     |
| :----------: | :------: | :------------------: |
|   clientId   |  string  |       REQUIRED       |
|    scope     |  string  |        basic         |
|  onSuccess   | function |       REQUIRED       |
|  onFailure   | function |       REQUIRED       |
| redirectUri  |  string  |          -           |
|  buttonText  |  string  | Login with Instagram |
|   cssClass   |  string  |          -           |
|     tag      |  string  |        button        |
|     type     |  string  |        button        |
| implicitAuth | boolean  |        false         |
| useRedirect  | boolean  |        false         |
|    width     |  number  |         400          |
|    height    |  number  |         800          |
|    render    | function |          -           |

Instagram API Docs: https://www.instagram.com/developer/

You can now also pass child components such as icons into the button component.

```js
<InstagramLogin
  clientId="5fd2f11482844c5eba963747a5f34556"
  onSuccess={responseInstagram}
  onFailure={responseInstagram}
>
  <FontAwesome name="instagram" />
  <span> Login with Instagram</span>
</InstagramLogin>
```

## Dev Server

```
npm run start

```

## Run Tests

```
npm run test:watch

```

## Production Bundle

```
npm run bundle
```

#### TODO

- [ ] Use Hooks
- [ ] Fix the test cases
- [ ] Update dependencies
- [ ] Create a babel Conf
- [ ] Use prettier + Husky
- [ ] Improve and refactor the code
- [ ] Use Google, Facebook, Linkedin ... in this project

### Follow me on Twitter: [@Amraneze](https://twitter.com/amraneze)
