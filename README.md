<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="[docs/imgs/logo-color.png](https://github.com/Finesseology/cultureforyou)">
    <img src="docs/imgs/logo-color.png" alt="Logo" width="110" height="110">
  </a>

  <h3 align="center">Culture For You</h3>
  <h4 align="center">Brought to you by D8.</h4>
  <br />

  <p align="center">
    Welcome to the Culture For You website project!
    <br />
    <a href="https://cultureforu.com"><strong>Explore the website »</strong></a>
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#synopsis">Synopsis</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#updating-website">Updating Website</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# About The Project

<div>
  <h1 align="center">Homepage</h1>
</div>

[![Product Name Screen Shot][homepage-img]](https://cultureforu.com)

## Synopsis

<div>
  <h2 align="center"> About the Project </h2>
    <p>
      Our client has a small business creating various designs for Engravings, Henna, Makeup, and Wedding Signs. Our client takes special request orders and currently manages everything through Instagram. As the client’s business grows, they will require a space to have all of the products and services organized, as well as a place to utilize their online presence to promote their works to a wider audience. As the business gains more customers, a larger database will be required to track all appointments, clientele, and orders. This online presence will provide a space for clientele to easily set up appointments or contact the business for special orders/additional information. Additionally, we want customers to have the ability to contact the artist directly with any questions or concerns regarding purchases. Finally, to facilitate the growth of our client's business, we are integrating web analytics to better understand user patterns on the web pages and forecast the success of future products by Culture For You.
    </p>
  </br>
</div>

<div>
  <h1 align="center" style="font-size: 20px;">Things to keep in mind</h1>
  This project is developed by Computer Science students at California State University, Sacramento.

-   This project is built for an external company through the school as a senior project.
-   It is a collaborative effort between students for a grade.
-   It will not see updates to the website past December 2023.
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

This project was built using Next.js.

[![Next][next.js]][next-url]
[![Next-auth][next-auth.js]][next-auth-url]
[![mysql][mysql.js]][mysql-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

This is an example of how to set up your project locally.
To get a local copy up and running follow these simple example steps.

## Prerequisites

<h4> Below are the steps to ensure the system software is up to date and ready for set up. </h4>
<br>

First we update the server to ensure it is up to date.
<br>

Debian based linux system:

```
sudo apt update
```

```
sudo apt upgrade
```

<br>

Then we have to ensure our npm is installed and up to date.

```sh
npm install npm@latest -g
```

## Installation

Below is an example of how you can install and set up your project. This project uses SendGrid, Google analytics, Google Captcha, mysql2 and Next-Auth.

1. Clone the repo
    ```sh
    git clone https://github.com/Finesseology/cultureforyou.git
    ```
2. Install NPM packages:

    If you wish to install the latest versions of the packages:

    ```sh
    npm install
    ```

    OR

    If you wish to install the versions of the packages used in the project:

    ```sh
    npm ci
    ```

3. Create a sendgrid.env
    ```sh
     touch sendgrid.env
    ```
4. Enter your sendgrid API key in `sendgrid.env`
    ```sh
    export SENDGRID_API_KEY='API_KEY'
    ```
5. Create `.env.local`

    ```sh
    touch .env.local
    ```

6. Enter required API keys into .env.local.
   Put Google API keys at the top. NextAuth secret is REQUIRED for deployment. NextAuth URL should be the URL of the website. Add any API keys used in this file. Database variables should be obtained from the database provider.

    ```sh
    GOOGLE_CLIENT_ID = 'key'
    GOOGLE_CLIENT_SECRET = 'key'

    NEXT_PUBLIC_RECAPTCHA_SITEKEY="key"
    RECAPTCHA_SECRETKEY="key"

    NEXTAUTH_SECRET='secret'
    NEXTAUTH_URL=https://cultureforu.com

    DB_HOST = 'host'
    DB_NAME = 'name'
    DB_USER = 'user'
    DB_PASS = 'pass'

    ```

7. Then we must build the project.

    ```
    npm run build
    ```

8. After the project is build without errors, we must start the pm2 hosting.
    ```
    pm2 start npm --name cultureforu -- start
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Updating Website

<h4> If we make changes to the code for the website we have to update the website. Fortunately this is simple with pm2. </h4>

1. First step is to move into the cultureforyou directory

    ```
    cd cultureforyou
    ```

2. Next we pull from the git repo

    ```
    git pull
    ```

3. Then we make sure have all the packages installed.

    ```
    npm ci
    ```

4. Then we must re-build the project.

    ```
    npm run build
    ```

5. After the project is build without errors, we must restart the pm2 hosting.
    ```
    pm2 restart cultureforu
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Ensure there are no build errors aside from eslint. From there the project is ready to be launched in whatever manner is desired.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

# Roadmap

-   [x] Add interactive live website
-   [x] Add emailing service
-   [x] Add website analytics
-   [x] Add user login system
-   [x] Add an appointment scheduling feature
-   [x] Add an admin dashboard
-   [x] Add a user dashboard

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

# Contributing

Unfortunately, as this is a school project we cannot accept outside contributions during the core development cycle. If you wish to fork the project and check it out yourself, this project is public and we won't stop you.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

# License

Distributed under the MIT License. See LICENSE for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

# Contact

## Project Contributors

-   Chris Lemke
    -   [Github Profile][github-url-chris]
    -   [Personal Website](https://finesseology.com)
    -   [Linked In][linkedin-url-chris]
    -   clemke@csus.edu
    -   finesseologyy@gmail.com
-   Anna Sarkisyan
    -   [Github Profile][github-url-anna]
    -   [Linked In][linkedin-url-anna]
    -   annasarkisyan@csus.edu
-   Ally Mahbobi
    -   [Github Profile][github-url-ally]
    -   [Linked In][linkedin-url-ally]
    -   amahbobi@csus.edu
-   Ghuncha Arif
    -   [Github Profile][github-url-chris]
    -   ghunchaarif@csus.edu
-   Abdullah Hamdan
    -   [Github Profile][github-url-abdullah]
    -   [Linked In][linkedin-url-abdullah]
    -   aahamdan@csus.edu
-   Henry Mahbobi
    -   [Github Profile][github-url-henry]
    -   [Linked In][linkedin-url-henry]
    -   hmahbobi@csus.edu
-   Jui-Ching Chen
    -   [Github Profile][github-url-jui]
    -   [Linked In][linkedin-url-jui]
    -   jchen5@csus.edu
-   Jovan Wettach
    -   [Github Profile][github-url-jovan]
    -   jov876@yahoo.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

# Acknowledgments

These sites and projects were very helpful in the development of this project. We would like to thank the public work of these projects.

-   [Nextjs Documentation](https://nextjs.org/docs/getting-started)
-   [Readme Documentation](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

<!-- Custom files and links -->

[d8-logo-img]: docs/imgs/logo-color.png
[cfu-logo-img]: docs/imgs/favicon.ico
[culture-homepage-img]: docs/imgs/culture-homepage.png
[homepage-admin-img]: docs/imgs/homepage-admin.png
[homepage-img]: docs/imgs/homepage.png

<!-- References to Projects -->

<!-- Contributors -->

[contributors-shield]: https://img.shields.io/github/contributors/Finesseology/cultureforyou.svg?style=for-the-badge
[contributors-url]: https://github.com/Finesseology/cultureforyou/graphs/contributors

<!-- Forks -->

[forks-shield]: https://img.shields.io/github/forks/Finesseology/cultureforyou.svg?style=for-the-badge
[forks-url]: https://github.com/Finesseology/cultureforyou/forks

<!-- Stars -->

[stars-shield]: https://img.shields.io/github/stars/Finesseology/cultureforyou.svg?style=for-the-badge
[stars-url]: https://github.com/Finesseology/cultureforyou/stargazers

<!-- Issues -->

[issues-shield]: https://img.shields.io/github/issues/Finesseology/cultureforyou.svg?style=for-the-badge
[issues-url]: https://github.com/Finesseology/cultureforyou/issues

<!-- License -->

[license-shield]: https://img.shields.io/github/license/Finesseology/cultureforyou.svg?style=for-the-badge
[license-url]: https://github.com/Finesseology/cultureforyou/LICENSE.txt

<!-- Linked In -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url-chris]: https://www.linkedin.com/in/christopher-lemke-fin/
[linkedin-url-anna]: https://www.linkedin.com/in/anna-sarkisyan/
[linkedin-url-ally]: https://www.linkedin.com/in/ally-mahbobi/
[linkedin-url-abdullah]: https://www.linkedin.com/in/abdullah-hamdan-0013361aa/
[linkedin-url-henry]: https://www.linkedin.com/in/xavier-mahbobi-703539230/
[linkedin-url-jui]: https://www.linkedin.com/in/jui-ching-chen-38409a264/

<!-- Githubs -->

[github-url-chris]: https://github.com/Finesseology
[github-url-anna]: https://github.com/annasark
[github-url-ally]: https://github.com/amahbobi
[github-url-ghuncha]: https://github.com/aliag123
[github-url-abdullah]: https://github.com/abHam87
[github-url-henry]: https://github.com/hmahbobi123
[github-url-jui]: https://github.com/jujuchen5
[github-url-jovan]: https://github.com/Jov876

<!-- Outside links -->

[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[next-auth.js]: https://img.shields.io/badge/nextauth.js-000000?style=for-the-badge&logoColor=white
[next-auth-url]: https://next-auth.js.org/
[gcc.js]: https://img.shields.io/badge/Google%20Cloud-000000?style=for-the-badge&logo=google&logoColor=white
[gcc-url]: https://console.cloud.google.com/
[mysql.js]: https://img.shields.io/badge/MySQL-000000?style=for-the-badge&logo=mysql&logoColor=white
[mysql-url]: https://www.mysql.com/
[sendgrid.js]: https://img.shields.io/badge/SendGrid-000000?style=for-the-badge&logo=sendgrid&logoColor=white
[sendgrid-url]: https://sendgrid.com/
