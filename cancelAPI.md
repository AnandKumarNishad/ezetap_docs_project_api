## Cancel API

<h3 class= "use">Use case</h3>
<hr>

This API must be invoked to cancel a notification that is queued up on the server or has been received on the device.

Cancellation will happen even when the device has received notification. In such a scenario it will prompt the user *“notification cancel”* message and removes the notification.

- If the device user went on with the flow of taking PIN (in case of card transaction), then cancellation only happens on submission of payment with an error prompt - *“Notification cancelled from billing system”*
- In the above scenario, the cancellation request will be accepted until the device has submitted payment. Otherwise, it will respond with *P2P_PAYMENT_INITIATED* error code.

<div class="abc">
<span class="bold ital">Best Practice:</span><span class="ital"> Merchant should use cancel API after every 150 secs of the start API is initiated the transaction. In the scenario where the transaction is sent to device and is not completed for 150 secs. Then the request of transaction will be cancelled automatically.</span>
</div>

### Request Parameters

<table class = "params">
<thead class = "paramhead">
<tr><th class = "parameter">Parameter</th><th class = "datatype">Datatype</th><th class = "Desc">Description</th></tr>
</thead>
<tbody>
<tr><td>username</td><td>String</td><td>Any username (Mandatory)</td></tr>
<tr><td>appKey</td><td>String</td><td>account appKey (Mandatory)</td></tr>
<tr><td>origP2pRequestId</td><td>String</td><td>Request ID returned by the start API call (Mandatory)</td></tr>
<tr><td>pushTo</td><td>JSON with "deviceId" as String(250)</td><td>PushTo is a json with destination info like Device id of the pos on which notification is sent (Mandatory)<br><br><span class = "refer"> Please refer the syntax in Sample request</span><br>"pushTo": { "deviceId": "< device serial number > | ezetap_android"}<br>}</td></tr>
</tbody>
</table>

<!-- #### Sample Request & Response

<table class = "samReqRes">
<thead class = "samReqResHead">
<tr><th class = "samReq"> Sample Request </th><th class = "samRes"> Sample Response </th></tr>
</thead>
<tbody>
<tr><td>{<br>"username": "7388589588",<br>"appKey": "1275c97d-ba9d-409a-9c4a-d5c7a30ae937",<br>"origP2pRequestId": "220207101337222E020061977",<br>"pushTo": {<br>&ensp;&emsp;"deviceId": "1490772770, ezetap_android"<br>}<br>}</td><td>{<br>"success": true,<br>"messageCode": null,<br>"message": null,<br>"errorCode": null,<br>"errorMessage": null,<br>"realCode": null,<br>"apiMessageTitle": null,<br>"apiMessage": null,<br>"apiMessageText": null,<br>"apiWarning": null,<br>"p2pRequestId":"1901131948341E010055004"<br>}</td></tr>
</tbody>
</table> -->