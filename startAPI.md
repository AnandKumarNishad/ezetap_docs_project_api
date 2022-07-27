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
<tr><th class = "parameter">Attribute</th><th class = "Desc">Description</th></tr>
</thead>
<tbody>
<tr><td><div class = "att">appKey</div><div class = "dt" ><span>String(50)</span></div><div class = "dt" ><span>Mandatory</span></div></td><td>APP key shared by Ezetap</td></tr>
<tr><td><div class = "att">pushTo</div><div class = "dt" ><span>Json with “deviceId” as String(250)</span></div><div class = "dt" ><span>Mandatory</span></div></td><td>PushTo is a json with destination info like Device id of the pos on which notification will be sent. Please refer the syntax in Sample request 'pushTo': { 'deviceId': 'device serial number'|ezetap_android'}}</td></tr>
<tr><td><div class = "att">username</div><div class = "dt" ><span>String(20)</span></div><div class = "dt" ><span>Mandatory</span></div></td><td>Username must be passed</td></tr>
<tr><td><div class = "att">description</div><div class = "dt" ><span>String(50)</span></div><div class = "dt" ><span>Optional</span></div></td><td>It describes the notification purpose</td></tr>
<tr><td><div class = "att">amount</div><div class = "dt" ><span>BigDecimal</span></div><div class = "dt" ><span>Mandatory</span></div></td><td>Transaction amount</td></tr>
<tr><td><div class = "att">amountCashBack</div><div class = "dt" ><span>BigDecimal</span></div><div class = "dt" ><span>Optional</span></div></td><td>CashBack amount if required</td></tr>
<tr><td><div class = "att">amountAdditional</div><div class = "dt" ><span>BigDecimal</span></div><div class = "dt" ><span>Optional</span></div></td><td>Additional Amount if required</td></tr>
<tr><td><div class = "att">externalRefNumber</div><div class = "dt" ><span>String</span></div><div class = "dt" ><span>Mandatory</span></div></td><td>Reference number of the bill. This must be unique for every transaction.</td></tr>
<tr><td><div class = "att">customerMobileNumber</div><div class = "dt" ><span>String</span></div><div class = "dt" ><span>Optional</span></div></td><td>Customer mobile number</td></tr>
<tr><td><div class = "att">customerEmail</div><div class = "dt" ><span>String</span></div><div class = "dt" ><span>Optional</span></div></td><td>Customer's email id</td></tr>
<tr><td><div class = "att">customerName</div><div class = "dt" ><span>String</span></div><div class = "dt" ><span>Optional</span></div></td><td>Customer's Name</td></tr>
<tr><td><div class = "att">accountLabels</div><div class = "dt" ><span>List of String</span></div><div class = "dt" ><span>Optional</span></div></td><td>Labels is the list of tags. It is used for passing MID/TID labels in multi-TID case</td></tr>
<tr><td><div class = "att">externalRefNumber2</div><div class = "dt" ><span>String</span></div><div class = "dt" ><span>Optional</span></div></td><td></td></tr>
<tr><td><div class = "att">externalRefNumber3</div><div class = "dt" ><span>String</span></div><div class = "dt" ><span>Optional</span></div></td><td></td></tr>
<tr><td><div class = "att">externalRefNumber4</div><div class = "dt" ><span>String</span></div><div class = "dt" ><span>Optional</span></div></td><td></td></tr>
<tr><td><div class = "att">externalRefNumbers</div><div class = "dt" ><span>Set of String</span></div><div class = "dt" ><span>Optional</span></div></td><td></td></tr>
<tr><td><div class = "att">additionalData</div><div class = "dt" ><span>Json String</span></div><div class = "dt" ><span>Optional</span></div></td><td>AdditionalData is json</td></tr>
<tr><td><div class = "att">orgCode</div><div class = "dt" ><span>String</span></div><div class = "dt" ><span>Optional</span></div></td><td>Merchant's orgCode</td></tr>
<tr><td><div class = "att">paymentBy</div><div class = "dt" ><span>String</span></div><div class = "dt" ><span>Optional</span></div></td><td>For service fees configuration, this is DEBIT|CREDIT</td></tr>
<tr><td><div class = "att">paymentMode</div><div class = "dt" ><span>String</span></div><div class = "dt" ><span>Optional</span></div></td><td>For service fees configuration, this is CARD</td></tr>
</tbody>
</table>

</section>

<section id = "resparam">

### Response Parameters

<table class = "params">
<thead class = "paramhead">
<tr><th class = "parameter">Attribute</th><th class = "Desc">Description</th></tr>
</thead>
<tbody>
<tr><td><div class = "att">success</div><div class = "dt" ><span>Boolean</span></div><div class = "dt" ></div></td><td>Indicates notification has been started successful or not</td></tr>
<tr><td><div class = "att">errorCode</div><div class = "dt" ><span>String(48)</span></div></td><td>Error code if notification has not initiated due to either token issue or wrong deviceId . It is empty for a successful creation</td></tr>
<tr><td><div class = "att">errorMessage</div><div class = "dt" ><span>String(256)</span></div></td><td>Descriptive error message for the above error code on notification initiation. This field will be empty for a successful initiation.</td></tr>
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