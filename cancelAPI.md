## Cancel API

This API must be invoked to cancel a notification that is queued up on the server or has been received on the device.

Cancellation will happen even when the device has received notification. In such a scenario it will prompt the user *“notification cancel”* message and removes the notification.

- If the device user went on with the flow of taking PIN (in case of card transaction), then cancellation only happens on submission of payment with an error prompt - *“Notification cancelled from billing system”*
- In the above scenario, the cancellation request will be accepted until the device has submitted payment. Otherwise, it will respond with *P2P_PAYMENT_INITIATED* error code.

<div class="abc">
<span class="bold">Best Practice:</span><span class="ital"> Merchant should use cancel API after every 150 secs of the start API is initiated the transaction. In the scenario where the transaction is sent to device and is not completed for 150 secs. Then the request of transaction will be cancelled automatically.</span>
</div>

***Demo and Production P@P 3.0 Cancel API URL:***
- Demo URL: https://demo.ezetap.com/api/3.0/p2p/cancel
- Production: https://www.ezetap.com/api/3.0/p2p/cancel
- HTTP Method: POST
- Request HTTP Headers: Content-Type: application/json

#### Sample Request & Response

|Sample Request|Sample Response|
|-----|-----|
|{<br>"username": "7388589588",<br>"appKey": "1275c97d-ba9d-409a-9c4a-d5c7a30ae937",<br>"origP2pRequestId": "220207101337222E020061977",<br>"pushTo": {<br>&ensp;&emsp;"deviceId": "1490772770, ezetap_android"<br>}<br>}|{<br>"success": true,<br>"messageCode": null,<br>"message": null,<br>"errorCode": null,<br>"errorMessage": null,<br>"realCode": null,<br>"apiMessageTitle": null,<br>"apiMessage": null,<br>"apiMessageText": null,<br>"apiWarning": null,<br>"p2pRequestId":"1901131948341E010055004"<br>}|