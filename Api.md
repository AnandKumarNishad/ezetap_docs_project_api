## SDK Integration
Easy-to-include libraries and modular code packages. No-fuss integration to get your payments up in no time at all.

#### Push To Pay

###### API Details
We have a set of APIs available to enable integration with billing system. Below are the details of these APIs.

1. Start API
2. Status API
3. Cancel API

**NOTE:** All request/responses are of type application/json

Before these APIs are invoked, please ensure the following:

1. Device is connected to Internet
2. Ezetap Application is installed on the device
3. User is logged in to the Ezetap application with credentials shared by Ezetap

For testing these APIs in demo environment, please refer to the section - Setting up the device for Integration in Demo Environment

###### Start API

This API must be invoked by the billing application to send payment notification to the device.

***Demo and Production P2P 3.0 Start API URL***
- Demo URL: https://demo.ezetap.com/api/3.0/p2p/start
- Production: https://www.ezetap.com/api/3.0/p2p/start
- HTTP Method: POST
- Request HTTP Headers: Content-Type: application/json