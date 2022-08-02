## Cancel API

<h3 class= "use">Use Case</h3>
<hr>

This API must be invoked to cancel a notification that is queued up on the server or has been received on the device.

Cancellation will happen even when the device has received notification. In such a scenario it will prompt the user *“notification cancel”* message and removes the notification.

- If the device user went on with the flow of taking PIN (in case of card transaction), then cancellation only happens on submission of payment with an error prompt - *“Notification cancelled from billing system”*
- In the above scenario, the cancellation request will be accepted until the device has submitted payment. Otherwise, it will respond with *P2P_PAYMENT_INITIATED* error code.

<div class="abc">
<span class="bold">Best Practice:</span><span> Merchant should use cancel API after every 150 secs of the start API is initiated the transaction. In the scenario where the transaction is sent to device and is not completed for 150 secs. Then the request of transaction will be cancelled automatically.</span>
</div>

### Request Parameters

<table class = "params">
<thead class = "paramhead">
<tr><th class = "parameter">Attribute</th><th class = "Desc">Description</th></tr>
</thead>
<tbody>
<tr><td><div class = "att">username</div><div class = "dt" ><span>String</span></div><div class = "dt" ><span>Mandatory</span></div></td><td><div class = "descrip" ><p>Any username</p></div></td></tr>
<tr><td><div class = "att">appKey</div><div class = "dt" ><span>String</span></div><div class = "dt" ><span>Mandatory</span></div></td><td><div class = "descrip" ><p>account appKey</p></div></td></tr>
<tr><td><div class = "att">origP2pRequestId</div><div class = "dt" ><span>String</span></div><div class = "dt" ><span>Mandatory</span></div></td><td><div class = "descrip" ><p>Request ID returned by the start API call</p></div></td></tr>
<tr><td><div class = "att">pushTo</div><div class = "dt" ><span>JSON with "deviceId" as String(250)</span></div><div class = "dt" ><span>Mandatory</span></div></td><td><div class = "descrip" ><p>PushTo is a json with destination info like Device id of the pos on which notification is sent<br><span class = "refertab"> Please refer the syntax in Sample request<br>"pushTo": { "deviceId": "< device serial number > | ezetap_android" }</span></p></div></td></tr>
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