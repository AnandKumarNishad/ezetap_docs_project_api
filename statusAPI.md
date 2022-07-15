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
<tr><td><div>username</div><div><span>String</span></div><div><span>Mandatory</span></div></td><td><div><p>Username shared by Exetap</p></div></td></tr>
<tr><td><div>appkey</div><div><span>String</span></div><div><span>Mandatory</span></div></td><td><div><p>appkey of the account</p></div></td></tr>
<tr><td><div>origP2pRequestID</div><div><span>String</span></div><div><span>Mandatory</span></div></td><td><div><p>P2P request ID from the response of the start API call</p></div></td></tr>
</tbody>
</table>


### Status API Response Parameters

<table class = "params">
<thead class = "paramhead">
<tr><th class = "parameter">Attribute</th><th class = "Desc">Description</th></tr>
</thead>
<tbody>
<tr><td><div>success</div><div><span>Boolean</span></div></td><td><div><p>Indicates notification found</p></div></td></tr>
<tr><td><div>errorCode</div><div><span>String(48)</span></div></td><td><div><p>Error Code if notification not found.</p></div></td></tr>
<tr><td><div>errorMessage</div><div><span>String(256)</span></div></td><td><div><p>Descriptive error message for the above error code on notification status. This field will be empty for a successful initiation.</p></div></td></tr>
<tr><td><div>message</div><div><span>String</span></div></td><td><div><p>It is descriptive information of pushToPay status, it also tells what the status is.</p></div></td></tr>
<tr><td><div>messageCode</div><div><span>String</span></div></td><td><div><p>Message Code if notification status not found.</p></div></td></tr>
<tr><td><div>status</div><div><span>String</span></div><div><span>Important Field</span></div></td><td><div><p>Only if status is "Authorized", payment is successful</p></div></td></tr>
</tbody>
</table>


#### Sample Request & Response

|Sample Request|Sample Response|
|-----|-----|
|{<br>"appkey":"< account appkey >",<br>"username":"<admin/agent username>",<br>" origP2pRequestId ":"< Use the one returned by the start API >" <br>}|{<br>"success": true,<br>"messageCode": "P2P_DEVICE_TXN_DONE",<br>"message":"Transaction done on device, Please look at Txn status.",<br>"realCode": "P2P_DEVICE_TXN_DONE",<br>"setting": {},<br>"apps": [],<br>"amount": 111,<br>"amountOriginal": 111,<br>"currencyCode": "INR",<br>"customerMobile": "",<br>"customerReceiptUrl": "http://d.eze.cc/r/o/pX9RhCGa",<br>"externalRefNumber": "a1b1",<br>"txnId": "170420065424513E020067042",<br>"merchantName": "BhaskaranNew",<br>"nonceStatus": "OPEN",<br>"orgCode": "BHASKARANNEW_59",<br>"merchantCode": "BHASKARANNEW_59",<br>"paymentCardType": "UNKNOWN",<br>"paymentMode": "CASH",<br>"postingDate": 1492671265000,<br>"processCode": "_DEF_PROC",<br>"settlementStatus": "SETTLED",<br>"signatureId": "NR",<br>"status": "AUTHORIZED",<br>"states": [<br>"SETTLED"],<br>"userMobile": "4563219870",<br>"txnType": "CHARGE",<br>"userAgreement": "",<br>"signable": false,<br>"voidable": false,<br>"refundable": true,<br>"chargeSlipDate": "2017-04-20T12:24:25+0530",<br>"readableChargeSlipDate": "20/04/2017 12:24:25",<br>"settlementTime": 1492671265000,<br>"receiptUrl": "http://d.eze.cc/r/o/pX9RhCGa",<br>"signReqd": false,<br>"txnTypeDesc": "Charge",<br>"acquirerCode": "NONE",<br>"orderNumber": "a1b1",<br>"totalAmount": 111,<br>"tipEnabled": false,<br>"callTC": false,<br>"acquisitionId": "",<br>"acquisitionKey": "",<br>"externalDevice": false,<br>"txnMetadata": []<br>}