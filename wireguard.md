# Setting up a Wireguard VPN server

## Introduction
I got a request from a prospective client for setting up a wireguard VPN server. I had not done that before but I thought let's try it out. How hard could it be?

And in reality, it was not that hard once I got hang of it. But I had to spend better part of three days in setting it up the way it was supposed to be set up. I really didn't have any experience in setting up a VPN server and configuring clients for it. In this article I will show you how to setup a [Wireguard](https://www.wireguard.com/) VPN server and configure clients for it.

## About Wireguard
From the Wireguard website: 
> WireGuard® is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. It aims to be faster, simpler, leaner, and more useful than IPsec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. WireGuard is designed as a general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances. Initially released for the Linux kernel, it is now cross-platform (Windows, macOS, BSD, iOS, Android) and widely deployable. It is currently under heavy development, but already it might be regarded as the most secure, easiest to use, and simplest VPN solution in the industry.

Wireguard has roaming built-in and works on [zero trust model](https://en.wikipedia.org/wiki/Zero_trust_security_model). It really doesn't care who connects to it as long as they present the correct keys. All the responsibility of authenticating and authorizing the client is with the server and unless someone knows the private key of the client they cannot connect to the VPN server. The security of the connection can be further tightened by allowing only a specific network of IP address or even a single IP address.

## Setting up Wireguard Server
