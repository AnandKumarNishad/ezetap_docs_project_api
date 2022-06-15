## Cancel API

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