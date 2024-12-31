 ## Cypress Test Automation

 ## Tools

- [Chai Assertion Library](https://www.chaijs.com/guide/)

- [Mocha framework](https://www.chaijs.com/guide/)

- [Cpress framework api](https://docs.cypress.io/api/table-of-contents)

- [Cpress framework docs](https://docs.cypress.io/app/get-started/why-cypress)

- [Application url](http://www.automationpractice.pl/index.php)

```bash
  ┌──(kali㉿kali)-[/var/lib/jenkins/jobs/Cypress]
└─$ docker volume inspect  jenkins_data
[
    {
        "CreatedAt": "2024-12-27T12:54:53-05:00",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/jenkins_data/_data",
        "Name": "jenkins_data",
        "Options": {},
        "Scope": "local"
    }
]

┌──(kali㉿kali)-[/var/lib/jenkins/jobs/Cypress]
└─$ docker images cypress/base
REPOSITORY     TAG       IMAGE ID       CREATED        SIZE
cypress/base   22.11.0   ad235cbe456a   2 months ago   700MB

┌──(kali㉿kali)-[/var/lib/jenkins/jobs/Cypress]
└─$ docker images jenkins/jenkins
REPOSITORY        TAG       IMAGE ID       CREATED        SIZE
jenkins/jenkins   latest    b8b10e639360   4 months ago   475MB
jenkins/jenkins   lts       5dea1f4edf69   6 months ago   470MB

┌──(kali㉿kali)-[/var/lib/jenkins/jobs/Cypress]
└─$ docker network ls
NETWORK ID     NAME            DRIVER    SCOPE
51f7a3ff6811   jenkins         bridge    local

```

![Cucumber Report](https://github.com/sumankumar01/WEB-AUTOMATION-CYPRESS/blob/main/cypress/screenshots/CucumberReport.png)

![Pipeline](https://github.com/sumankumar01/WEB-AUTOMATION-CYPRESS/blob/main/cypress/screenshots/jenkins%20pipeline.png)

![Pipeline Filter](https://github.com/sumankumar01/WEB-AUTOMATION-CYPRESS/blob/main/cypress/screenshots/pipeline.png)

![Slack notification](https://github.com/sumankumar01/WEB-AUTOMATION-CYPRESS/blob/main/cypress/screenshots/slack%20notification.png)
