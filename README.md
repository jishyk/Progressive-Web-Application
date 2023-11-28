# Progressive-Web-Application

## Overview
This project focuses on developing a browser-based text editor. It's a single-page application (SPA) that adheres to Progressive Web Application (PWA) standards and implements various data persistence methods. The editor can operate offline, providing flexibility in usage. Individual Acceptance Criteria (AC) are outlined to define specific functionalities. For a comprehensive guide on how to use this text editor, please refer to the 'Usage' section in this document.

## User Narrative
AS A developer,
I NEED a platform to jot down notes and code snippets, regardless of my internet connectivity,
SO THAT I can access these notes later for reference or utilization.

## Acceptance Criteria
CONTEXT: Text editor web application

01: Initial Launch

* WHEN the application is launched in the editor,
* THEN a clear client-server folder structure should be visible.

02: Starting the Application

* WHEN I execute 'npm run start' in the root directory,
* THEN the backend initiates and serves the client side.

03: Bundling via Webpack

* WHEN the application is started through the terminal,
* THEN all JavaScript files should be bundled using webpack.

04: Utilizing Webpack Plugins

* WHEN webpack plugins are activated,
* THEN an HTML file, a service worker, and a manifest file are generated.

05: Next-Gen JavaScript Compatibility

* WHEN using modern JavaScript features in the application,
* THEN the text editor should still operate flawlessly in the browser.

06: Database Kick-Start

* WHEN the text editor is accessed,
* THEN IndexedDB should automatically create a storage database.

07: Content Saving Mechanism

* WHEN I input text and click outside the DOM window,
* THEN the entered content is saved in IndexedDB.

08: Persisting Data

* WHEN I return to the text editor after exiting,
* THEN the previously entered content is retrieved from IndexedDB.

09: App Installation Feature

* WHEN the 'Install' button is clicked,
* THEN the application is downloaded and an icon is created on the desktop.

10: Service Worker Activation

* WHEN the application loads,
* THEN a service worker should be registered using Workbox.

11: Caching Static Assets

* WHEN a service worker is registered,
* THEN static assets, including pages, should be pre-cached.

12: Deployment on Heroku

* WHEN deploying on Heroku,
* THEN appropriate build scripts for a webpack application should be in place.

## Installation Guide
* Deployed App: Visit Heroku App Link to access the deployed application.
* Repository: To explore the project's repository, go to GitHub Repo Link.
## How to Use
1. Open the Application in your browser.
2. Enter your text in the provided text field.
3. Click outside the text box to save your input. The data is stored in the local database and will persist upon app refresh or revisit.
4. For offline access, click the 'Install' button and confirm installation. This will add a desktop icon for easy access to the application, both online and offline.

## Acknowledgments
The bundling of application files was facilitated by npm webpack v5.51.1.
For additional dependencies, please see package.json.

## Links

* Github: https://github.com/jishyk/Progressive-Web-Application

* Heroku: 