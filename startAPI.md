## Start API

This API must be invoked by the billing application to send payment notification to the device.

***Demo and Production P2P 3.0 Start API URL***
- Demo URL: https://demo.ezetap.com/api/3.0/p2p/start
- Production: https://www.ezetap.com/api/3.0/p2p/start
- HTTP Method: POST
- Request HTTP Headers: Content-Type: application/json

> **NOTE:** All request/responses are of type application/json

### Start API Request Parameters

<!-- |Parameter|Datatype|Description|
|---------|--------|-----------|
|appKey|String(50)|APP key shared by Ezetap (Mandatory)|
|pushTo|Json with “deviceId” as String (250)"|PushTo is a json with destination info like Device id of the pos on which notification will be sent (Mandatory). Please refer the syntax in Sample request 'pushTo': { 'deviceId': '<device serial number>, ezetap_android| -->

<table class = "params">
<thead class = "paramhead"><tr><th class = "parameter">Parameter</th><th class = "datatype">hbvj</th><th class = "Desc">bhjk</th></tr></thead>
<tbody>
<tr>
<td>parameter</td>
<td>hbvj</td>
<td>bhjk</td>
</tr>
</tbody>
</table>
#### Sample Request & Response

|Sample Request|Sample Response|
|-----|-----|
|{<br>"appKey": "3cecb4d3-6719-47fe-8259-70b6a7ae6d01",<br>    "username": "8087750622",<br>"customerMobileNumber": "8087750863",<br>"amount": "10300",<br>"externalRefNumber": "INVOICE_299",<br>"externalRefNumber2": "500007080",<br>"externalRefNumber3": "7000",<br>"externalRefNumber4": "500008080",<br>"externalRefNumber5": "3000",<br>"externalRefNumber6": "500007070",<br>"externalRefNumber7": "",<br>"externalRefNumbers":<br>&emsp;[ "{\"Account 4\":\"200\"}",<br>&ensp;&emsp;"{\"Account 5\":\"100\"}", ],<br>"pushTo": { "deviceId": "0821006725, ezetap_android"}<br>}|{ <br>"success": true,<br>"messageCode": null,<br>"message": null,<br>"errorCode": null,<br>"errorMessage": null,<br>"realCode": null,<br>"apiMessageTitle": null,<br>"apiMessage": null,<br>"apiMessageText": null,<br>"apiWarning": null,<br>"p2pRequestId":<br>"200205214646781E020059712"<br>}|