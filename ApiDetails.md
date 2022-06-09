# API Details
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

## 1. Start API

This API must be invoked by the billing application to send payment notification to the device.

***Demo and Production P2P 3.0 Start API URL***
- Demo URL: https://demo.ezetap.com/api/3.0/p2p/start
- Production: https://www.ezetap.com/api/3.0/p2p/start
- HTTP Method: POST
- Request HTTP Headers: Content-Type: application/json

#### Sample Request & Response

|col1|col2|
|----|----|
|cell1|cell2|
|cell1|cell2|
|cell1|cell2|

![Sample request response of Start API](/images/startAPI_req_res.png "Sample request response for start API")

## 2. Status API

Once the notification is received on the device,this API must be invoked to retrieve the status of payment.

***Demo and Production P2P 3.0 Status API URL:***
- Demo URL: https://demo.ezetap.com/api/3.0/p2p/status
- Production URL: https://www.ezetap.com/api/3.0/p2p/status
- HTTP Method: POST
- Request HTTP Headers: Content-Type: application/json

#### Sample Request & Response

![Sample request response of Status API](/images/statusAPI_req_res.png "Sample request response for status API")

## 3. Cancel API

This API must be invoked to cancel a notification that is queued up on the server or has been received on the device.

Cancellation will happen even when the device has received notification. In such a scenario it will prompt the user *“notification cancel”* message and removes the notification.

- If the device user went on with the flow of taking PIN (in case of card transaction), then cancellation only happens on submission of payment with an error prompt - *“Notification cancelled from billing system”*
- In the above scenario, the cancellation request will be accepted until the device has submitted payment. Otherwise, it will respond with *P2P_PAYMENT_INITIATED* error code.

**Best Practice:**
*Merchant should use cancel API after every 150 secs of the start API is initiated the transaction. In the scenario where the transaction is sent to device and is not completed for 150 secs. Then the request of transaction will be cancelled automatically.*

***Demo and Production P@P 3.0 Cancel API URL:***
- Demo URL: https://demo.ezetap.com/api/3.0/p2p/cancel
- Production: https://www.ezetap.com/api/3.0/p2p/cancel
- HTTP Method: POST
- Request HTTP Headers: Content-Type: application/json

#### Sample Request & Response

![Sample request response of Status API](/images/cancelAPI_req_res.png "Sample request response for status API")