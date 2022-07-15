## Status API

Once the notification is received on the device,this API must be invoked to retrieve the status of payment.

***Demo and Production P2P 3.0 Status API URL:***
- Demo URL: https://demo.ezetap.com/api/3.0/p2p/status
- Production URL: https://www.ezetap.com/api/3.0/p2p/status
- HTTP Method: POST
- Request HTTP Headers: Content-Type: application/json


### Status API Request Parameters

<table class = "params">
<thead class = "paramhead">
<tr><th class = "parameter">Attribute</th><th class = "Desc">Description</th></tr>
</thead>
<tbody>
<tr><td>username<span>String</span><span>Mandatory</span></td><td>Username shared by Exetap</td></tr>
<tr><td>appkey<span>String</span><span>Mandatory</span></td><td>appkey of the account</td></tr>
<tr><td>origP2pRequestID<span>String</span><span>Mandatory</span></td><td>P2P request ID from the response of the start API call </td></tr>
</tbody>
</table>


### Status API Response Parameters

<table class = "params">
<thead class = "paramhead">
<tr><th class = "parameter">Attribute</th><th class = "Desc">Description</th></tr>
</thead>
<tbody>
<tr><td>success<span>Boolean</span></td><td>Indicates notification found</td></tr>
<tr><td>errorCode<span>String(48)</span></td><td>Error Code if notification not found.</td></tr>
<tr><td>errorMessage<span>String(256)</span></td><td>Descriptive error message for the above error code on notification status. This field will be empty for a successful initiation.</td></tr>
<tr><td>message<span>String</span></td><td>It is descriptive information of pushToPay status, it also tells what the status is.</td></tr>
<tr><td>messageCode<span>String</span></td><td>Message Code if notification status not found.</td></tr>
<tr><td>status<span>String</span><span>Important Field</span></td><td>Only if status is "Authorized", payment is successful</td></tr>
</tbody>
</table>


#### Sample Request & Response

|Sample Request|Sample Response|
|-----|-----|
|{<br>"appkey":"< account appkey >",<br>"username":"<admin/agent username>",<br>" origP2pRequestId ":"< Use the one returned by the start API >" <br>}|{<br>"success": true,<br>"messageCode": "P2P_DEVICE_TXN_DONE",<br>"message":"Transaction done on device, Please look at Txn status.",<br>"realCode": "P2P_DEVICE_TXN_DONE",<br>"setting": {},<br>"apps": [],<br>"amount": 111,<br>"amountOriginal": 111,<br>"currencyCode": "INR",<br>"customerMobile": "",<br>"customerReceiptUrl": "http://d.eze.cc/r/o/pX9RhCGa",<br>"externalRefNumber": "a1b1",<br>"txnId": "170420065424513E020067042",<br>"merchantName": "BhaskaranNew",<br>"nonceStatus": "OPEN",<br>"orgCode": "BHASKARANNEW_59",<br>"merchantCode": "BHASKARANNEW_59",<br>"paymentCardType": "UNKNOWN",<br>"paymentMode": "CASH",<br>"postingDate": 1492671265000,<br>"processCode": "_DEF_PROC",<br>"settlementStatus": "SETTLED",<br>"signatureId": "NR",<br>"status": "AUTHORIZED",<br>"states": [<br>"SETTLED"],<br>"userMobile": "4563219870",<br>"txnType": "CHARGE",<br>"userAgreement": "",<br>"signable": false,<br>"voidable": false,<br>"refundable": true,<br>"chargeSlipDate": "2017-04-20T12:24:25+0530",<br>"readableChargeSlipDate": "20/04/2017 12:24:25",<br>"settlementTime": 1492671265000,<br>"receiptUrl": "http://d.eze.cc/r/o/pX9RhCGa",<br>"signReqd": false,<br>"txnTypeDesc": "Charge",<br>"acquirerCode": "NONE",<br>"orderNumber": "a1b1",<br>"totalAmount": 111,<br>"tipEnabled": false,<br>"callTC": false,<br>"acquisitionId": "",<br>"acquisitionKey": "",<br>"externalDevice": false,<br>"txnMetadata": []<br>}