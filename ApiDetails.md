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

| Sample Request | Sample Response |
|-----|-----|
|{<br>"appKey": "3cecb4d3-6719-47fe-8259-70b6a7ae6d01",<br>    "username": "8087750622",<br>"customerMobileNumber": "8087750863",<br>"amount": "10300",<br>"externalRefNumber": "INVOICE_299",<br>"externalRefNumber2": "500007080",<br>"externalRefNumber3": "7000",<br>"externalRefNumber4": "500008080",<br>"externalRefNumber5": "3000",<br>"externalRefNumber6": "500007070",<br>"externalRefNumber7": "",<br>"externalRefNumbers":<br>&emsp;[ "{\"Account 4\":\"200\"}",<br>&ensp;&emsp;"{\"Account 5\":\"100\"}", ],<br>"pushTo": { "deviceId": "0821006725, ezetap_android"}<br>}|{ <br>"success": true,<br>"messageCode": null,<br>"message": null,<br>"errorCode": null,<br>"errorMessage": null,<br>"realCode": null,<br>"apiMessageTitle": null,<br>"apiMessage": null,<br>"apiMessageText": null,<br>"apiWarning": null,<br>"p2pRequestId":<br>"200205214646781E020059712"<br>}|

## 2. Status API

Once the notification is received on the device,this API must be invoked to retrieve the status of payment.

***Demo and Production P2P 3.0 Status API URL:***
- Demo URL: https://demo.ezetap.com/api/3.0/p2p/status
- Production URL: https://www.ezetap.com/api/3.0/p2p/status
- HTTP Method: POST
- Request HTTP Headers: Content-Type: application/json

#### Sample Request & Response

| Sample Request | Sample Response |
|-----|-----|
|{<br>"appkey":"<account appkey>",<br>"username":"<admin/agent username>",<br>" origP2pRequestId ":"<Use the one returned by the start API>" <br>}|{<br>"success": true,<br>"messageCode": "P2P_DEVICE_TXN_DONE",<br>"message":"Transaction done on device, Please look at Txn status.",<br>"realCode": "P2P_DEVICE_TXN_DONE",<br>"setting": {},<br>"apps": [],<br>"amount": 111,<br>"amountOriginal": 111,<br>"currencyCode": "INR",<br>"customerMobile": "",<br>"customerReceiptUrl": "http://d.eze.cc/r/o/pX9RhCGa",<br>"externalRefNumber": "a1b1",<br>"txnId": "170420065424513E020067042",<br>"merchantName": "BhaskaranNew",<br>"nonceStatus": "OPEN",<br>"orgCode": "BHASKARANNEW_59",<br>"merchantCode": "BHASKARANNEW_59",<br>"paymentCardType": "UNKNOWN",<br>"paymentMode": "CASH",<br>"postingDate": 1492671265000,<br>"processCode": "_DEF_PROC",<br>"settlementStatus": "SETTLED",<br>"signatureId": "NR",<br>"status": "AUTHORIZED",<br>"states": [<br>"SETTLED"],<br>"userMobile": "4563219870",<br>"txnType": "CHARGE",<br>"userAgreement": "",<br>"signable": false,<br>"voidable": false,<br>"refundable": true,<br>"chargeSlipDate": "2017-04-20T12:24:25+0530",<br>"readableChargeSlipDate": "20/04/2017 12:24:25",<br>"settlementTime": 1492671265000,<br>"receiptUrl": "http://d.eze.cc/r/o/pX9RhCGa",<br>"signReqd": false,<br>"txnTypeDesc": "Charge",<br>"acquirerCode": "NONE",<br>"orderNumber": "a1b1",<br>"totalAmount": 111,<br>"tipEnabled": false,<br>"callTC": false,<br>"acquisitionId": "",<br>"acquisitionKey": "",<br>"externalDevice": false,<br>"txnMetadata": []<br>}


```for(let i = 0; i < 10; i++){
    console.log("HI");
}```

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