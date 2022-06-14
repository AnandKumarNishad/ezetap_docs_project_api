# PUSH TO PAY

## Pre-requisites to use Push To Pay Solution
- Merchant system must have Internet Connectivity (Wi-Fi or Mobile Hotspot)
- Merchant system able to call/ access any external API like Ezetap P2P API from their
own system
- Using minimum TLS 1.2 protocol (Transport Layer Security).
<!-- - For more details refer to attached pdf (PCI_SSC Migrating) link. -->

## Push to Pay Solution for Android POS device

#### 1. What is Push to Pay Solution?

![Push To Pay flow](/images/flow.png "Push To Pay flow")

Ezetap’ s Push to pay solution allows seamless integration with Customer’s existing web-based application.

Push to pay a server-to-server communication enabled by the billing application to the Android POS device. The device receives payment notification for which payment can be collected via different payment modes. This solution is compatible with Windows, iOS, Linus & Android platforms.

#### About Android POS device:

# API Details
We have a set of APIs available to enable integration with billing system. Below are the details of these APIs.

1. Start API
2. Status API
3. Cancel API

**NOTE:** All request/responses are of type application/json

Before these APIs are invoked, please ensure the following:

1. Device is connected to Internet
2. Ezetap Application is installed on the device
3. User is logged in to the Ezetap application with credentials shared by Ezetap

For testing these APIs in demo environment, please refer to the section - Setting up the device for Integration in Demo Environment