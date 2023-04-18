<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="[public/logo-color.png](https://github.com/Finesseology/cultureforyou)">
    <img src="public/logo-color.png" alt="Logo" width="110" height="110">
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
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://cultureforu.com)

This project is developed by Computer Science students at California State University, Sacramento.

Things to keep in mind:

-   This project is still in progress.
-   It is a collaborative effort between students for a grade.
-   This project is a live website developed for a business.
-   It is developed using an Agile environment with 2 week sprints.

Of course, this project will see continuous development until the end of 2023, however afterwards, development may stop.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This project was built using Next.js.

[![Next][next.js]][next-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how to set up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

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

    If you wish to install the latest versions of the packages:

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
5. Create in `.env.local`

    ```sh
    touch .env.local
    ```

6. Enter required API keys into .env.local.
   Put Google API keys at the top. NextAuth secret is REQUIRED for deployment. NextAuth URL should be the URL of the website. Add any API keys used in this file. Database variables should be obtained from the database provider.

    ```sh
    GOOGLE_CLIENT_ID = 'key'
    GOOGLE_CLIENT_SECRET = 'key'

    NEXTAUTH_SECRET='secret'
    NEXTAUTH_URL=https://cultureforu.com

    DB_HOST = 'host'
    DB_NAME = 'name'
    DB_USER = 'user'
    DB_PASS = 'pass'

    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

To use this project, simply navigate to the installation destination of the project.

If you wish to check out the project in a developer build:

```sh
npm run dev
```

If you wish to build the project for deployment:

```sh
npm run build
```

Ensure there are no build errors aside from eslint. From there the project is ready to be launched in whatever manner is desired.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [x] Add interactive live website
-   [x] Add emailing service
-   [x] Add website analytics
-   [x] Add user login system
-   [ ] Add an appointment scheduling feature
-   [ ] Add a payment system
-   [ ] Multi-view Support
    -   [ ] Light mode
    -   [ ] Dark mode

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Unfortunately, as this is a school project we cannot accept outside contributions during the core development cycle. If you wish to fork the project and check it out yourself, this project is public and we won't stop you.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

### Project Repo

-   Project Link: [https://github.com/Finesseology/cultureforyou](https://github.com/Finesseology/cultureforyou)

### Project Contributors

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

## Acknowledgments

These sites and projects were very helpful in the development of this project. We would like to thank the public work of these projects.

-   [Nextjs Documentation](https://nextjs.org/docs/getting-started)
-   [Readme Documentation](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

<!-- Custom files and links -->

[product-screenshot]: public/logo-color.png

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
[linkedin-url-chris]: https://www.linkedin.com/in/christopher-lemke-b57924140/
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
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
