<section id = "main">

## Start API

<h3 class= "use">Use case</h3>
<hr>

This API must be invoked by the billing application to send payment notification to the device.

> **NOTE:** All request/responses are of type application/json

<section id = "parameter">

### Request Parameters

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

</section>

<section id = "resparam">

### Response Parameters

<table class = "params">
<thead class = "paramhead">
<tr><th class = "parameter">Parameter</th><th class = "datatype">Datatype</th><th class = "Desc">Description</th></tr>
</thead>
<tbody>
<tr><td>success</td><td>Boolean</td><td>Indicates notification has been started successful or not</td></tr>
<tr><td>errorCode</td><td>String(48)</td><td>Error code if notification has not initiated due to either token issue or wrong deviceId . It is empty for a successful creation</td></tr>
<tr><td>errorMessage</td><td>String(256)</td><td>Descriptive error message for the above error code on notification initiation. This field will be empty for a successful initiation.</td></tr>
</tbody>
</table>

</section>

<!-- <section id = "sampleReqRes">

#### Sample Request & Response


<table class = "samReqRes">
<thead class = "samReqResHead">
<tr><th class = "samReq"> Sample Request </th><th class = "samRes"> Sample Response </th></tr>
</thead>
<tbody>
<tr><td>{<br>"appKey": "3cecb4d3-6719-47fe-8259-70b6a7ae6d01",<br>    "username": "8087750622",<br>"customerMobileNumber": "8087750863",<br>"amount": "10300",<br>"externalRefNumber": "INVOICE_299",<br>"externalRefNumber2": "500007080",<br>"externalRefNumber3": "7000",<br>"externalRefNumber4": "500008080",<br>"externalRefNumber5": "3000",<br>"externalRefNumber6": "500007070",<br>"externalRefNumber7": "",<br>"externalRefNumbers":<br>&emsp;[ "{\"Account 4\":\"200\"}",<br>&ensp;&emsp;"{\"Account 5\":\"100\"}", ],<br>"pushTo": { "deviceId": "0821006725, ezetap_android"}<br>}</td><td>{ <br>"success": true,<br>"messageCode": null,<br>"message": null,<br>"errorCode": null,<br>"errorMessage": null,<br>"realCode": null,<br>"apiMessageTitle": null,<br>"apiMessage": null,<br>"apiMessageText": null,<br>"apiWarning": null,<br>"p2pRequestId":<br>"200205214646781E020059712"<br>}</td></tr>
</tbody>
</table>

</section> -->

</section>