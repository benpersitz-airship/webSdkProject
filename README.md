<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3l5YnIwZzExcHVqMWh4ZXBwejlxdTI1YXE3MXFtNHg1Y2ZmN2lkcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Mb9dQnfZXSBYMhU2Nv/giphy.gif" alt="Mission Impossible">

  <h3 align="center">MISSION <strike style="opacity:.5;">IM</strike>POSSIBLE:</h3>
  <h4 align="center">Implement the Web SDK</h4>
  <p align="center" style="display:none;"><a href="#">View Demo</a></p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Tools Needed</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#content-kit">Content Kit</a></li>
        <li><a href="#surge">Surge</a></li>
      </ul>
    </li>
    <li><a href="#mission-objectives">Mission Objectives</a></li>
    <ul>
      <li><a href="#resources">Resources</a></li>
    </ul>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is intended to help you learn how to implement the Web SDK into a prebuilt website, much like Airship customers would be doing for their sites. <b>It is not</b> an end-all, be-all example of everything that <i>can</i> be done within our SDK. But, it will drive home some of they key and foundational aspects of it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Tools Needed

* A Text Editor (Popular examples: <a href="https://atom-editor.cc/" target="_blank">ATOM</a> or <a href="https://www.sublimetext.com/" target="_blank">Sublime Text</a>)
* Ability to publish your page live on the internet (Recommend: <a href="https://surge.sh/" target="_blank">Surge</a>)
* An Airship project

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Content Kit

First you'll either want to download the entire contents of this <b>demo_website_template</b> folder `OR` clone the <b>cs-hub</b> repo:
   ```sh
   git clone hhttps://github.com/urbanairship/cs-hub.git
   ```
<p>Then you'll want to set up Surge (see details below)</p>
<p>And then..... you'll want to have lots of fun adding the Web SDK to your site, publishing, and making it your own!</p>


### Surge
<p>To help you get started, we'll walk through using <a href="https://surge.sh/" target="_blank">Surge</a>, which is an incredibly easy (and free) way to publish your site to a live domain allowing you to test and demo our SDK.</p>
<p><i>Disclaimer: Please refer to Surge's <a href="https://surge.sh/help/getting-started-with-surge" target="_blank">Getting started with Surge</a> in the event the workflow changes on their end (aka don't shoot the messenger).</i></p>

1. First, ensure you have a recent version of <a href="https://nodejs.org/en" target="_blank">Node.js</a>
2. Then, install Surge using npm by running the following command:
 ```sh
 npm install --global surge
 ```
 <i>You may need to preface this command with sudo</i>
3. Now, run surge from within any directory, to publish that directory onto the web.
 <br><br>
 That’s it! Running surge inside the directory you want to deploy will get your started. You’ll be able to create an account right from the command line, deploy, and host your site for free on Surge.
 <p><img src="https://surge.sh/images/help/getting-started-with-surge.gif" alt="surge gif"></p>
 <h4><a href="https://youtu.be/-EjdMvYPSVU" target="_blank">Watch this Surge video</a></h4>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Mission Objectives

1. Create or Use a current Airship Project to configure your Web channel
2. Download your SDK Bundle kit and install accordingly
3. Add your SDK codes:
* Snippet content on `index.html`
* `push-worker.js` file in your root directory
* Action methods on the `assets/SDK_functions.js` file

### Resources
* [Web SDK Documentation](https://docs.airship.com/platform/web/getting-started/)
* [Web SDK Reference](https://docs.airship.com/reference/libraries/web-notify-sdk/latest/index.html)
* [Web Platform Overrides](https://docs.airship.com/api/ua/?openapi=http#schemas-weboverrideobject)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
