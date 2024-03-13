Senior Frontend Developer - Coding Challenge | Conde Nast
===================

Senior Frontend Developer - Coding Challenge | Conde Nast 0.1.0 - React, React Router, React Testing Library, Jest and many other latest technologies.

## Quick start

1.  Make sure that you have Node v21 or above installed.
2.  Clone this repo using `git clone git@github.com:syednomansd/conde-nast.git`
3.  Move to the appropriate directory: `cd conde-nast`
4.  Run `npm install` in order to install dependencies.

### Local Environment with Live Reload

```
npm start
```

_At this point you can see the example app at `http://localhost:3000`._

### Build for Production

```
npm run build
```

### Test

```
npm run test
```

## Technology stack

| Name | Version |
| ------ | ------ |
| React | `18` |
| React Router | `6` |
| React Testing Library | `13` |
| Jest | `5` |

**Note:** This Project is modified version of awesome [Create React App](https://github.com/facebook/create-react-app). I had modified it according to mine Senior Frontend Developer - Coding Challenge | Conde Nast 0.1.0 project needs.

## Project Requirements

* Frontend of a small dynamic news website.
* Components/Modules/Page:
    * News Overview
    * News Details page
        * dynamic component of your frontend
* Design / Layout
    * Should be responsive (adapt to desktop or mobile screen sizes respectively)
    * Effects or transitions during user interaction 
* Navigation:
    * [Dummy menu] Navigation bar with two levels (The second level is only shown if a user clicks on the first level)

## Things that can be improved

I didn’t want to spend more time than the specified, but I feel we can improve a bit on the following things:

* Use React Helmet or custom service to have dynamic Opengraphs meta tags. It will help us to have better SEO for every page we have in our app.
* To have a better UX, I am currently fetching the same news API and filtering the content on the page. In the real world, we would have a separate API for news details which we can integrate with minor adaptations in the useNewsDetail hook.