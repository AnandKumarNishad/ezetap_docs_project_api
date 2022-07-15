## Status API

Once the notification is received on the device,this API must be invoked to retrieve the status of payment.

***Demo and Production P2P 3.0 Status API URL:***
- Demo URL: https://demo.ezetap.com/api/3.0/p2p/status
- Production URL: https://www.ezetap.com/api/3.0/p2p/status
- HTTP Method: POST
- Request HTTP Headers: Content-Type: application/json


### Start API Request Parameters

<table class = "params">
<thead class = "paramhead">
<tr><th class = "parameter">Parameter</th><th class = "datatype">Datatype</th><th class = "Desc">Description</th></tr>
</thead>
<tbody>
<tr><td>appKey</td><td>String(50)</td><td>APP key shared by Ezetap (Mandatory)</td></tr>
<tr><td>pushTo</td><td>Json with “deviceId” as String(250)</td><td>PushTo is a json with destination info like Device id of the pos on which notification will be sent (Mandatory) Please refer the syntax in Sample request 'pushTo': { 'deviceId': 'device serial number'|ezetap_android'}}</td></tr>
<tr><td>username</td><td>String(20)</td><td>Username must be passed (Mandatory)</td></tr>
<tr><td>description</td><td>String(50)</td><td>It describes the notification purpose (Optional)</td></tr>
<tr><td>amount</td><td>BigDecimal</td><td>Transaction amount (Mandatory)</td></tr>
<tr><td>amountCashBack</td><td>BigDecimal</td><td>CashBack amount if required (Optional)</td></tr>
<tr><td>amountAdditional</td><td>BigDecimal</td><td>Additional Amount if required (Optional)</td></tr>
<tr><td>externalRefNumber</td><td>String</td><td>Reference number of the bill (Mandatory). This must be unique for every transaction.</td></tr>
<tr><td>customerMobileNumber</td><td>String</td><td>Customer mobile number (Optional)</td></tr>
<tr><td>customerEmail</td><td>String</td><td>Customer's email id (Optional)</td></tr>
<tr><td>customerName</td><td>String</td><td>Customer's Name (Optional)</td></tr>
<tr><td>accountLabels</td><td>List of Strings</td><td>Labels is the list of tags. It is used for passing MID/TID labels in multi-TID case (Optional)</td></tr>
<tr><td>externalRefNumber2</td><td>String</td><td>Optional</td></tr>
<tr><td>externalRefNumber3</td><td>String</td><td>Optional</td></tr>
<tr><td>externalRefNumber4</td><td>String</td><td>Optional</td></tr>
<tr><td>externalRefNumbers</td><td>set of Strings</td><td>Optional</td></tr>
<tr><td>additionalData</td><td>Json String</td><td>AdditionalData is json (Optional)</td></tr>
<tr><td>orgCode</td><td>String</td><td>Merchant's orgCode (Optional)</td></tr>
<tr><td>paymentBy</td><td>String</td><td>For service fees configuration, this is DEBIT|CREDIT (Optional)</td></tr>
<tr><td>paymentMode</td><td>String</td><td>For service fees configuration, this is CARD (Optional)</td></tr>
</tbody>
</table>



#### Sample Request & Response

|Sample Request|Sample Response|
|-----|-----|
|{<br>"appkey":"< account appkey >",<br>"username":"<admin/agent username>",<br>" origP2pRequestId ":"< Use the one returned by the start API >" <br>}|{<br>"success": true,<br>"messageCode": "P2P_DEVICE_TXN_DONE",<br>"message":"Transaction done on device, Please look at Txn status.",<br>"realCode": "P2P_DEVICE_TXN_DONE",<br>"setting": {},<br>"apps": [],<br>"amount": 111,<br>"amountOriginal": 111,<br>"currencyCode": "INR",<br>"customerMobile": "",<br>"customerReceiptUrl": "http://d.eze.cc/r/o/pX9RhCGa",<br>"externalRefNumber": "a1b1",<br>"txnId": "170420065424513E020067042",<br>"merchantName": "BhaskaranNew",<br>"nonceStatus": "OPEN",<br>"orgCode": "BHASKARANNEW_59",<br>"merchantCode": "BHASKARANNEW_59",<br>"paymentCardType": "UNKNOWN",<br>"paymentMode": "CASH",<br>"postingDate": 1492671265000,<br>"processCode": "_DEF_PROC",<br>"settlementStatus": "SETTLED",<br>"signatureId": "NR",<br>"status": "AUTHORIZED",<br>"states": [<br>"SETTLED"],<br>"userMobile": "4563219870",<br>"txnType": "CHARGE",<br>"userAgreement": "",<br>"signable": false,<br>"voidable": false,<br>"refundable": true,<br>"chargeSlipDate": "2017-04-20T12:24:25+0530",<br>"readableChargeSlipDate": "20/04/2017 12:24:25",<br>"settlementTime": 1492671265000,<br>"receiptUrl": "http://d.eze.cc/r/o/pX9RhCGa",<br>"signReqd": false,<br>"txnTypeDesc": "Charge",<br>"acquirerCode": "NONE",<br>"orderNumber": "a1b1",<br>"totalAmount": 111,<br>"tipEnabled": false,<br>"callTC": false,<br>"acquisitionId": "",<br>"acquisitionKey": "",<br>"externalDevice": false,<br>"txnMetadata": []<br>}