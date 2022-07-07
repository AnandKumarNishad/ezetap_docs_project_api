# Solution for Android POS device

#### 1. What is Push to Pay Solution?

![Push To Pay flow](/images/flow.png "Push To Pay")


Ezetap’s Push to pay solution allows seamless integration with Customer’s existing web-based application.

Push to pay a server-to-server communication enabled by the billing application to the Android POS device. The device receives payment notification for which payment can be collected via different payment modes. This solution is compatible with Windows, iOS, Linus & Android platforms.

#### 1.1 About Android POS device:
The Android POS is an Android based Smart device. It is a standalone SIM + Wi-Fi enabled device, which can enable various modes of payments such as
1. Cash
2. Cards
3. Wallets
4. UPI
5. Remote Pay – Payment Links

The transaction flow in case of Android POS is as follows:
1. Agent logins into the device at the start of the day
2. During billing, he/she presses the “pay” Button, which invokes the service
3. Device receives same notification and agent proceeds with the payment
4. Agent follows the steps as displayed on the device and collects the payment
5. Agents print the transaction receipts and hands over the same to Customer.
6. The Customer CRM is updated (if integrated) with the transaction details as well.

#### 1.2 Pre-requisites to use Push To Pay Solution
* Merchant system must have Internet Connectivity (Wi-Fi or Mobile Hotspot)
* Merchant system able to call/ access any external API like Ezetap P2P API from their
own system
* Using minimum TLS 1.2 protocol (Transport Layer Security).

#### 2. How to get started with Push to Pay Integration?

We recommend that you get started with integration in Demo environment, test, validate the flow, and use cases, and then move on to the Production environment.

Here is what you will need to start with the integration in demo environment:
- Demo merchant account (Please provide a Mobile Number and address for us to create your Merchant Account)
- App Key: You will require this for invoking the APIs (more details in the API section)
- Username: You will require this for invoking the APIs (more details in the API section)
- Demo Device (Please provide an address where we can deliver a Demo Device to you to start off the Integration)

You can reach-out to Devsupport@ezetap.com or the respective Ezetap SPOC during the entire process of integration in case of support or troubleshooting.

## API Details for Android POS
We have a set of APIs available to enable integration with billing system. Below are the details of these APIs.

1. <Link to = '/apiDetails/startApi'>Start API</Link>
2. <Link to = '/apiDetails/statusApi'>Status API</Link>
3. <Link to = '/apiDetails/cancelApi'>Cancel API</Link>

> **NOTE:** All request/responses are of type application/json

Before these APIs are invoked, please ensure the following:

1. Device is connected to Internet
2. Ezetap Application is installed on the device
3. User is logged in to the Ezetap application with credentials shared by Ezetap

For testing these APIs in demo environment, please refer to the section - Setting up the device for Integration in Demo Environment