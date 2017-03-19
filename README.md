Westwork Bootstrap
====
This repository contains the code that runs on first boot of a Westwork system. It is responsible for taking the following actions:
* Starting a WiFi network named "Westwork"
* Scanning local network and connecting to the WiFi network specified by the user.
* Gathering the following information from the user (provisional list):
    * Name
    * Desired language, once we have i8n
    * Gender (?)
    * Desired domain name (and iterate until one is available)
    * Desired user name
    * Desired password
* Running all the config templates through template engine
* Enabling and starting all the services
* Once LDAP service is started, adding user to database
* Punching appropriate holes in firewall/NAT if possible or instructing user on how to do so
    * Try IGD/UPnP
    * Try PCP
    * Etc, eventually may also have to offer tunneling through a service provided by Westwork
* Getting authorization from user to import Google Suite/Microsoft Office 365 account and begin downloading
* Finally, redirecting user to homepage, enabling and starting up [main Westwork service](https://github.com/westwork-org/westwork), disabling bootstrap service, and shutting self down.