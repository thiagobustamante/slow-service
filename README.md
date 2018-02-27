# Simple Slow Server

This is a simple server that returns mocked data and start to respond slowly after an amount of requests.

It was created to be used in training lessons about Circuit Breakers and Rate Limits controls for APIs.

## Usage

Clone it:

```sh
git clone https://github.com/thiagobustamante/slow-service.git
```

Install dependencies:

```sh
npm install
```

Edit configuration properties (properties.json):

```json
{
    "timeWindow": "one minute",
    "maxRequests": 10,
    "slowTime": "20 seconds",
    "listenPort": 3000
}
```

And start it running:

```sh
npm start
```


