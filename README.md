---
title: Html-Css-Js
date: '2015-05-02'
description: 'This is where everything starts'
---

## Table of Contents

### HTML

- [Basic page](#basic-page)
- [Head](#head)
- [Basics](#basic-content)
  - [Headings](#headings)
  - [Paragraphs](#paragraphs)
  - [Unordered list](#unordered-list)
  - [Ordered list (formatting, links)](#ordered-list)
  - [Description list](#description-list)
  - [Extra Formatting](#extra-formatting)
- [Multimedia](#multimedia)
  - [Images](#images)
  - [Figure](#figure)
  - [Video](#video)
  - [Audio](#audio)
  - [Iframe](#iframe)
  - [Svg](#svg)
  - [Responsive Images](#responsive-images)
- [Tables](#tables)
- [Forms](#forms)
- [HTML5 Semantic](#html5-semantic)
- [Additions](#additions)

### CSS

- [Selectors](#selectors)
- [Box Model](#box-model)
- [Display and Positioning](#display-and-positioning)
- [Colors](#colors)
- [Typography](#typography)
- [Responsive Design](#responsive-design)
- [Animation](#animation)
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Table of Contents

- [Basics](#basics)

  - [Hello World!](#hello-world!)
  - [Comment](#comment)
  - [Variables](#variables)
  - [Operators](#operators)
  - [If/else Statements](#if/else-statements)
  - [Ternary Operator](#ternary-operator)
  - [Switch Statement](#switch-statement)
  - [Functions](#functions)
  - [Arrays](#arrays)
  - [Objects](#objects)
  - [Loops](#loops)

- [How Js Works](#how-js-works)

  - [Hoisting](#hoisting)
  - [Scoping](#scoping)
  - [this](#this)

- [DOM](#dom)

- [Objects and Functions](#objects-and-functions)

  - [Function Constructor](#function-constructor)
  - [Inheritance](#inheritance)
  - [Object.create](#object.create)
  - [Primitives vs Objects](#primitives-vs-objects)
  - [Passing functions as arguments](#passing-functions-as-arguments)
  - [Function Returning Another Function](#Function-returning-another-function)
  - [IIFE](#iife)
  - [Closures](#closures)
  - [Bind,Call,Apply](#bind,call,apply)

- [ES6](#es6)

  - [let and const](#let-and-const)
  - [Blocks and IIFEs](#blocks-and-iifes)
  - [Strings](#strings)
  - [Arrow Functions](#arrow-functions)
  - [Arrow Functions 2](#arrow-functions-2)
  - [Destructuring](#destructuring)
  - [Arrays](#arrays)
  - [Spread Operator](#spread-operator)
  - [Rest Parameters](#rest-parameters)
  - [Default Parameters](#default-parameters)
  - [Maps](#maps)
  - [Classes](#subclasses)

- [Async](#async)

  - [ajax](#ajax)
  - [Promises](#promises)

- [Array Methods](#array-methods)
  - [Filter](#filter)
  - [ForEach](#foreach)
  - [Map](#map)
  - [Reduce](#reduce)
  - [Some](#some)
  - [Every](#every)
- [Function Methods](#function-methods)
  - [Call](#call)
  - [Apply](#apply)
  - [Bind](#bind)

## Basic page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## Head

```html
<head>
  <meta charset="utf-8" />
  <!--This element simply specifies the document's character encoding  -->
  <!-- Adding an author and description -->
  <meta name="developer" content="Damon Brooks" />
  <meta
    name="description"
    content="This info here can be helpful for search engines (SEO)"
  />
  <!-- facebook small icon meta info og:title, og:description and goes on... -->
  <meta
    property="og:image"
    content="https://en.wikipedia.org/wiki/Batman#/media/File:Batman_Detective_Comics_Vol_2_1.png"
  />
  <meta name="description" content="This is for google searches" />
  <meta property="og:title" content="html learning center" />
  <!-- small icon on browser -->
  <link rel="icon" sizes="114x114" href="multi/spidey.png" />
  <!-- fav icon -->
  <link rel="shortcut icon" href="favicon.ico" type="multi/spidey.png" />
  <!-- for the css file -->
  <link rel="stylesheet" href="mystyle.css" />
  <title>HTML-head</title>
</head>
```

## Basic content

### Headings

```html
<!-- Main to less important -->
<h1>Heading</h1>
<h6>heading6</h6>
```

### Paragraphs

```html
<p>
  Paragraph one.<br />
  Other line.
</p>
<p>Paragraph two.</p>
<hr />
<p>line above.</p>
```

### Unordered list

```html
<ul id="unorderedList">
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

### Ordered list

```html
<ol id="orderedList">
  <li><i>italic</i></li>
  <li><b>bold</b></li>
  <li><u>underlined</u></li>
  <li>
    This is a hyperlink to
    <!-- in href= "html2.html" same dir
                href="dir/html.html" diff dir
                href="../gobackanddiff/html.html"
        -->
    <!--opens up in a new tab target="_blank" -->
    <a
      href="https://www.mozilla.org/en-US/"
      target="_blank"
      title="The best place to find more information about Mozilla's
            mission and how to contribute"
      >the Mozilla homepage</a
    >.
  </li>
  <li>
    <a
      href="https://download.mozilla.org/?product=firefox-39.0-SSL&os=win&lang=en-US"
      download="firefox-39-installer.exe"
    >
      Download Firefox 39 for Windows
    </a>
  </li>
  <li>
    <a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
  </li>
  <li>
    <a
      href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&amp;subject=The%20subject%20of%20the%20email &amp;body=The%20body%20of%20the%20email"
    >
      Send mail with cc, bcc, subject and body
    </a>
  </li>
</ol>
```

### Description list

```html
<!-- Description Lists terms and definitions -->
<dl>
  <dt>description title</dt>
  <dd>description term</dd>
  <dt>blockquote</dt>
  <dd>
    <blockquote
      cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"
    >
      <p>
        The
        <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
        <em>HTML Block Quotation Element</em>) indicates that the enclosed text
        is an extended quotation.
      </p>
    </blockquote>
  </dd>
  <dt>inline quote</dt>
  <dd>
    inline quote— <code>&lt;q&gt;</code
    ><q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
      This text is inside quotation marks</q
    >
  </dd>
</dl>
```

### Extra formatting

```html
<cite>(cite)title of the work </cite><br />
<bdo dir="rtl">Right to left text</bdo>
<p>
  Abbreviations <abbr title="Hypertext Markup Language">HTML</abbr> for example
</p>

<address>
  <p>Address, Manchester by the sea, USA</p>
</address>

<p><mark>Superscript:(marked)</mark> 25<sup>th</sup> of May 2011.</p>
<p>Subscript: C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.</p>
```

## Multimedia

### Images

```html
<img
  src="multi/spidey.png"
  alt="spiderman image"
  title="Spidey"
  height="300px"
  width="300px"
  usemap="#dotMap"
/>
<!-- link from only a part of image -->
<map name="dotMap">
  <!-- coords = vertical, horizontal,radius-->
  <area
    shape="circle"
    coords="150,150,50"
    alt="circle"
    href="https://www.yahoo.com"
  />
</map>
```

### Figure

```html
<figure>
  <img src="multi/batman.png" alt="batman standing" height="400px" />
  <figcaption>Batman</figcaption>
</figure>
```

### Video

```html
<video src="multi/spidey.mp4" controls>
  <p>
    Your browser doesn't support HTML5 video. Here is a
    <a href="img/spidey.mp4">link to the video</a> instead.
  </p>
</video>
<!-- Video autoplay muted -->
<video controls width="200px" autoplay loop muted>
  <source src="multi/spidey.mp4" type="video/mp4" />
  <track kind="subtitles" src="multi/subtitle.vtt" srclang="en" />
</video>

<embed
  type="video/mp4"
  src="https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4"
  width="250"
  height="200"
/>
```

### Audio

```html
<audio controls>
  <source src="multi/spideya.mp3" type="audio/mp3" />
</audio>
```

### Iframe

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/ZqF43uD3kKQ"
  frameborder="0"
  gesture="media"
  allow="encrypted-media"
  allowfullscreen
></iframe>
```

### Svg

```svg
  <svg
    version="1.1"
    basprofile="full"
    width="400"
    height="200"
    xlmns="http://www.w3.org/2000/svg"
  >
    <rect width="400px" height="200px" fill="black" />
    <circle cx="200" cy="100" r="50" fill="yellow" />
  </svg>

```

### Responsive Images

```html
<img
  srcset="img-320w.jpg 320w, img-480w.jpg 480w, img-800w.jpg 800w"
  sizes="(max-width: 320px) 280px,
         (max-width: 480px) 440px,
         800px"
  src="img-800w.jpg"
  alt="description"
/>

<img
  srcset="img-320w.jpg,  ***you should give a width to img in CSS***
          img-480w.jpg 1.5x,
          img-640w.jpg 2x"
  src="img-640w.jpg"
  alt="description"
/>

<picture>
  <source media="(max-width: 799px)" srcset="img480w.jpg" />
  <source media="(min-width: 800px)" srcset="img800w.jpg" />
  <img src="img800w.jpg" alt="description" />
</picture>
```

## Tables

```html
<table style="border: 1px solid black;">
  <caption>
    Statistics
  </caption>
  <colgroup>
    <col />
    <col />
    <col />
    <col />
    <col style="background-color: yellow;" span="1" />
    <col style="background-color: red;" span="1" />
  </colgroup>
  <thead style="background-color: black; color: white;">
    <th>Players</th>
    <th>Team</th>
    <th>Matches</th>
    <th>Assists</th>
    <th>Yellow Cards</th>
    <th>Red Cards</th>
  </thead>
  <tbody>
    <tr>
      <td>Ricardo Quaresma</td>
      <td>Besiktas</td>
      <td>12</td>
      <td>6</td>
      <td>2</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Oguzhan Ozyakup</td>
      <td>Besiktas</td>
      <td>10</td>
      <td>4</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Tolgay Arslan</td>
      <td>Besiktas</td>
      <td>6</td>
      <td>4</td>
      <td>1</td>
      <td>0</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td></td>
      <td>28</td>
      <td>14</td>
      <td>4</td>
      <td>3</td>
    </tr>
  </tfoot>
</table>
```

| tag          | element                     |
| ------------ | --------------------------- |
| **table**    | table                       |
| **caption**  | caption                     |
| **colgroup** | specifies groups of columns |
| **col**      | specifies column properties |
| **thead**    | group header content        |
| **th**       | table heading               |
| **tbody**    | group body content          |
| **tr**       | table row                   |
| **td**       | table cell                  |
| **tfoot**    | group footer content        |

## Forms

```html
<form action="where the data should be send" method="GET or POST">
  <br />
  <!--name-->
  <div>
    <!-- label is the value of id -->
    <label for="name">Name: </label><br />
    <!-- text input -->
    <!-- min-max values are set -->
    <input
      type="text"
      id="name"
      name="user_name"
      required
      minlength="3"
      maxlength="15"
    />
  </div>
  <!--Email-->
  <div>
    <label for="mail">E-mail:</label><br />
    <!-- required!! -->
    <input type="email" id="mail" name="user_mail" required />
  </div>
  <!--Password-->
  <div>
    <label for="password">Password</label><br />
    <!-- Matching a pattern -->
    <input
      type="password"
      id="password"
      name="user_password"
      value="psw"
      pattern="[a-zA-Z0-9]+"
    />
  </div>
  <!--submit button-->
  <div>
    <br />
    <!-- type submit creates a submit button -->
    <!-- When a <form> is submitted, the name of the fields that accept input and the value of those fields are sent as name=value pairs.  -->
    <button type="submit">Submit</button>
  </div>

  <br />
  <!--number input-->
  <div>
    <label for="amount">Number input</label>
    <input
      id="amount"
      name="amount"
      type="number"
      step="1"
      required
      min="1"
      max="10"
    />
  </div>
  <br />
  <!-- range input-->
  <div>
    <label for="numRange">Range!!</label>
    <br />
    <span>Less</span>
    <input
      id="numRange"
      name="numRange"
      type="range"
      min="0"
      max="5"
      step="0.5"
    />
    <span>More</span>
  </div>
  <br />
  <!--checkbox input -->
  <div>
    <label for="checkbox1">checkbox1</label>
    <input type="checkbox" id="checkbox1" name="checkboxed" />
    <label for="checkbox2">checkbox2</label>
    <input type="checkbox" id="checkbox2" name="checkboxed" />
  </div>
  <br />
  <!--textarea -->
  <div>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <br />
  <!--radio input-->
  <div>
    <label for="good-player">
      <input type="radio" id="good-player" name="good-bad-player" checked />
      Good Player
    </label>
    <label for="bad-player">
      <input type="radio" id="bad-player" name="good-bad-player" /> Bad Player
    </label>
  </div>
</form>
<hr />
<!-- dropdown list-->
<p>Pick a day</p>
<select name="days">
  <option value="monday">Monday</option>
  <option value="tuesday">Tuesday</option>
  <option value="wednesday">Wednesday</option>
  <option value="thursday">Thursday</option>
  <option value="friday">Friday</option>
</select>
<!--datalist input-->
<p>pick a browser(datalist)</p>
<form action="/action_page.php">
  <input list="browsers" />
  <datalist id="browsers">
    <option value="Internet Explorer"> </option>
    <option value="Firefox"> </option>
    <option value="Chrome"> </option>
    <option value="Opera"> </option>
    <option value="Safari"> </option>
  </datalist>
</form>
```

## HTML5 Semantic

```html
<header>
  <h1>Header</h1>
</header>

<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Our team</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Contact</a></li>
  </ul>

  <!-- A Search form is another common non-linear way to navigate through a website. -->
  <form>
    <input type="search" name="q" placeholder="Search query" />
    <input type="submit" value="Go!" />
  </form>
</nav>

<main>
  <article>
    <h2>Article heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
    <hr />

    <h3>subsection</h3>
    <p>
      Donec ut librero sed accu vehicula ultricies a non tortor.<br />
      <!-- linebreaks -->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
    </p>
    <p>
      Pelientesque auctor nisi id magna consequat sagittis.
    </p>
    <hr />
    <!-- horizontal rules -->

    <h3>Another subsection</h3>
    <p>
      Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus.
    </p>
    <p>
      Vivamus fermentum semper porta. Nunc diam velit, adipscing ut tristique
      vitae sagittis vel odio.
    </p>
  </article>

  <section></section>

  <aside>
    <div style="float: left; margin-right: 90px;">
      <h2>Related</h2>

      <ul>
        <li><a href="#">Oh I do like to be beside the seaside</a></li>
        <li><a href="#">Oh I do like to be beside the sea</a></li>
        <li><a href="#">Although in the North of England</a></li>
        <li><a href="#">It never stops raining</a></li>
        <li><a href="#">Oh well...</a></li>
      </ul>
    </div>
    <div style="padding-left: 40px;">
      <img src="multi/html5.gif" alt="scheme of html5" />
    </div>
  </aside>
</main>
<footer>
  <p>©Copyright 2125 by nobody. All rights reserved.</p>
</footer>
```

| tag         | element                                             |
| ----------- | --------------------------------------------------- |
| **header**  | introductory content                                |
| **nav**     | provide navigation links                            |
| **main**    | dominant content                                    |
| **article** | a forum post, a newspaper article, or a blog entry. |
| **section** | represents a standalone section                     |
| **aside**   | frequently presented as sidebars or call-out boxes. |
| **footer**  | info about author, copyright, links                 |

## Additions

# CSS

## Selectors

```css
/*every single element on page */
* {
  box-sizing: border-box;
  font-size: 24px;
}
/*id selector*/
#newId {
  background-color: #7fe7cc;
  height: 40px;
  padding-top: 10px;
}
/*class selector*/
.newClass {
  background-color: #dfe38e;
  height: 80px;
}
/*descendant selector*/
header h2 {
  padding: 2px;
}
/*type selector*/
p {
  font-family: fantasy;
}
/* :visited :link */
#link-4:link {
  color: #f17e7e;
}
#link-4:visited {
  color: #efca8c;
}
/*adjacent selector (only the element that is immediately preceded by the former element)*/
.navi + p {
  font-size: 34px;
}
/*direct child*/
.navi > ul {
  border: 1px solid black; /* doesnt add another border to ul inside ul*/
}
/*sibling combinator*/
.navi ~ p {
  color: violet; /*this selects all siblings not just the first one like + */
}
/*attributes selector*/
[data-vegetable] {
  text-transform: uppercase;
}
/* not selector*/
.item-list:not([data-vegetable]) {
  text-transform: lowercase;
}
/*nth child*/
.items li:nth-child(3) a {
  color: red !important;
}
/*nth last child*/
.items > li:nth-last-child(1) a {
  color: green;
}
/*starts with*/
a[href^='http'] {
  background-color: #f17e7e;
}
/*contains*/
a[href*='developers'] {
  background-color: #3a9679;
}
/*ends with*/
a[href$='png'] {
  background-color: #f2c0ff;
}
/*custom attributes*/
li[data-vegetable='liquid'] {
  background-color: #f2c090;
}
/*first letter and nth of type*/
header p:nth-of-type(2)::first-letter {
  font-size: 40px;
  color: #3a9679;
}
```

### Box Model

```css
/* The vertical margins will collapse to 30 pixels
  instead of adding to 50 pixels. */
.block-one {
  margin: 20px;
}
.block-two {
  margin: 30px;
}
/* horizontally center element */
div {
  margin: auto;
}
/* add scroll if element is larger than container */
.scroll {
  overflow: scroll;
}
/* max-width, min-width */
.column {
  max-width: 100px;
  width: 200px;
}
/* hides element without removing them */
.invisible-elements {
  visibility: hidden;
}
/* hides element removing them */
.col {
  display: none;
}
/* content-box does not include padding and margin */
.col {
  box-sizing: border-box;
}
```

### Display and Positioning

```css
/* element2 will overlap element1 */
.element1 {
  z-index: 1;
}
.element2 {
  z-index: 1000;
}
/* position can be static, relative,absolute, fixed */
nav {
  position: fixed;
}
/* takes the full width */
.container1 {
  display: block;
}
/* take as little space as possible */
.container2 {
  display: inline;
}
/* can appear next to each other */
.container3 {
  display: inline-block;
}
/* The content will float to the left side of the
  container. */
.left {
  float: left;
}
/* The content will float to the right side of the
  container. */
.right {
  float: right;
}
/*This determines that no other elements within the same
  containing element are allowed to float on the left side
  of this element.*/
.element {
  clear: left;
}
/*This determines that no other elements within the same
  containing element are allowed to float on the right side
  of this element.*/
.element {
  clear: right;
}
/*This determines that no elements within the same
  containing element are allowed to float on either side of
  this element.*/
.element {
  clear: both;
}
/*This determines that other elements within the same
  containing element are allowed to float on both side of
  this element.*/
.element {
  clear: none;
}
```

### Colors

```css
h1 {
  color: aqua;
}
.transparent {
  color: transparent;
}
.red {
  color: #ff0000;
}
.light-blue {
  background-color: hsl(200, 70%, 50%);
}
.green {
  color: rgb(0, 255, 0);
}
```

### Typography

```css
/* Sets the text as bolder. */
p {
  font-weight: 700;
}
.text {
  font-style: italic;
}

/* external fonts */
@font-face {
  font-family: 'Glegoo';
  src: url('../fonts/Glegoo-Regular.ttf') format('truetype');
}

/* Here `Arial` is the fallback font for <p> tags */
p {
  font-family: 'Helvetica', 'Arial';
}
p {
  line-height: 10px;
}
/* colorful text */
.colorful-headline {
  display: inline-block;
  background-image: linear-gradient(to right, green, red);
  background-clip: text;
  color: transparent;
}
```

### Responsive Design

```css
/* unit em */
.nav-container {
  font-size: 10px;
}
.nav-container span {
  font-size: 1.5em; /* 10 x 1.5 = 15px */
}
/* percentage */
.news-row {
  height: 300px;
  width: 500px;
}
.news-row .news-column {
  height: 80%; /* 240px */
  width: 50%; /* 250px */
}
/* view-height and view-width */
.news-row {
  height: 100vh;
  width: 50vw;
}

/* ruleset for >= 600px media type screen, print, handheld */
@media only screen and (min-width: 600px) {
}
/* CSS ruleset */
@media only screen and (max-width: 480px) and (minresolution: 300dpi) {
}
/* ruleset for 480px - 600px */
@media only screen and (min-width: 480px) and (max-width: 600px) {
}
```

### Animation

```css
#translate {
  width: 200px;
  height: 100px;
  background-color: grey;
  border: 1px solid black;
  border-radius: 4px;
  /*translate x,y*/
  -ms-transform: translate(200px, 100px); /*explorer*/
  -webkit-transform: translate(200px, 100px); /*Safari*/
  transform: translate(200px, 100px); /*standard*/
}
#rotate {
  width: 50px;
  height: 50px;
  background-color: red;
  border: 1px solid black;
  -ms-transform: rotate(20deg);
  -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
}
#scale {
  margin: 50px;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  /*scale x,y*/
  -ms-transform: scale(0.5, 0.5); /*explorer*/
  -webkit-transform: scale(0.5, 0.5); /*Safari*/
  transform: scale(0.5, 1); /*standard*/
}
#matrix {
  width: 300px;
  height: 200px;
  background-color: green;
  border: 1px solid black;
  -ms-transform: matrix(0.5, -0.3, 0.3, 1, 500, 0); /* IE 9 */
  -webkit-transform: matrix(0.5, -0.3, 0.3, 1, 500, 0); /* Safari */
  transform: matrix(
    0.5,
    -0.3,
    0.3,
    1,
    500,
    0
  ); /*matrix(scaleX,skewY,skewX,scaleY,
      translateX,translateY)*/
  font-size: 30px;
  text-align: center;
}
#transition {
  width: 200px;
  height: 200px;
  background-color: yellow;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  -webkit-transition: width 2s, height 3s linear;
  transition: width 2s, height 3s linear;
}
#transition:hover {
  width: 300px;
  height: 300px;
  background-color: red;
}
#anime1 p {
  margin: 0;
  padding: 0;
}
#anime1 {
  margin-top: 30px;
  margin-left: 30px;
  background-color: #92b901;
  padding: 8px 10px;
  color: white;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 20px;
  width: 48px;
  -webkit-animation-name: anim1; /*Chrome,Safari,Opera*/
  -webkit-animation-duration: 5s;
  -webkit-animation-delay: 2s;
  -webkit-animation-iteration-time: 4;
  -webkit-animation-direction: alternate;
  animation-name: anim1;
  animation-duration: 5s;
  animation-delay: 2s;
  animation-iteration-count: 4;
  animation-direction: alternate;
  position: relative;
}
@-webkit-keyframes anim1 {
  from {
    background-color: #92b901;
    left: 0px;
  }
  to {
    background-color: #29c6d1;
    left: 300px;
  }
}
@keyframes anim1 {
  from {
    background-color: #92b901;
    left: 0px;
  }
  to {
    background-color: #29c6d1;
    left: 300px;
  }
}
#height {
  height: 500px;
}
#anime2 {
  margin-top: 30px;
  width: 100px;
  height: 100px;
  background-color: green;
  position: relative;
  -webkit-animation: anim2 6s ease-out 2s infinite alternate;
  animation: anim2 6s ease-out 2s infinite alternate;
}
#anime2:hover {
  animation-play-state: paused;
}
@-webkit-keyframes anim2 {
  0% {
    background-color: green;
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: blue;
    left: 300px;
    top: 0px;
  }
  50% {
    background-color: orange;
    left: 300px;
    top: 300px;
  }
  75% {
    background-color: yellow;
    left: 0px;
    top: 300px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
}
@keyframes anim2 {
  0% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: yellow;
    left: 300px;
    top: 0px;
  }
  50% {
    background-color: blue;
    left: 300px;
    top: 300px;
  }
  75% {
    background-color: green;
    left: 0px;
    top: 300px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
}

#rainbowText {
  animation-name: rainbowtext;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  position: absolute;
}
@keyframes rainbowtext {
  0% {
    color: red;
    font-size: 20px;
  }
  25% {
    color: orange;
  }
  50% {
    color: yellow;
    font-size: 40px;
  }
  75% {
    color: green;
  }
  100% {
    color: blue;
    font-size: 20px;
  }
}

.imagefilter {
  position: relative;
  top: 120px;
  border-top: 2px solid black;
}
.imagefilter img {
  width: 33%;
  float: left;
  height: auto;
}
.blur {
  -webkit-filter: blur(4px);
  filter: blur(4px);
}
.brightness {
  -webkit-filter: brightness(250%);
  filter: brightness(250%);
}
.contrast {
  -webkit-filter: contrast(180%);
  filter: contrast(180%);
}
.grayscale {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
.huerotate {
  -webkit-filter: hue-rotate(180deg);
  filter: hue-rotate(180deg);
}
.invert {
  -webkit-filter: invert(100%);
  filter: invert(100%);
}
.opacity {
  -webkit-filter: opacity(50%);
  filter: opacity(50%);
}
.saturate {
  -webkit-filter: saturate(7);
  filter: saturate(7);
}
.sepia {
  -webkit-filter: sepia(100%);
  filter: sepia(100%);
}
.shadow {
  -webkit-filter: drop-shadow(8px 8px 10px green);
  filter: drop-shadow(8px 8px 10px green);
}
```

## Basics

### Hello world!

```javascript
//Javascript hello world
(function () {
  'use strict';
  function greetMe(name) {
    console.log('Hello ' + name + '.');
  }
  greetMe('Damon');
})();
```

### Comment

```javascript
//Comment in a line
/* comments in
a few lines */
```

### Variables

```javascript
if (true) {
  var a = 2;
}
console.log(a); //2

if (true) {
  let b = 3;
}
console.log(b); // b is not defined

const PI = 3.14; //const variables can not be changed
var a = 3; // var can be changed
console.log(a); //3
```

### Operators

```javascript
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge); //true
```

### If/else Statements

```javascript
var ifElse = true;
if (ifElse) {
  console.log('That is true');
} else {
  console.log('That is not true');
}
```

### Ternary Operator

```javascript
var ternaryFirstName = 'John';
var ternaryAge = 22;

ternaryAge >= 18
  ? console.log(ternaryFirstName + ' can drink.')
  : console.log(ternaryFirstName + ' not allowed to drink.');

var drink = ternaryAge >= 18 ? 'Beer' : 'juice';
console.log(drink); //Beer
```

### Switch Statement

```javascript
var job = 'teacher';
switch (job) {
  case 'teacher':
    console.log(ternaryFirstName + ' teaches.');
    break;
  case 'driver':
    console.log(ternaryFirstName + ' is a driver.');
    break;
  default:
    console.log(ternaryFirstName + ' does something else.');
}
```

### Functions

```javascript
function calculateAge(birthYear) {
  return 2018 - birthYear;
}
var ageJohn = calculateAge(1980);
var ageDan = calculateAge(1976);
console.log(ageJohn, ageDan); //38 42

//function declaration
function yearsUntilRetire(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetire(1990, 'John');

//FUNCTION STATEMENTS and EXPRESSIONS
//function expression (they do not hoist)
var whichTeam = function (team, name) {
  switch (team) {
    case 'Barcelona':
      return name + ' plays for Barca.';
    case 'Real Madrid':
      return name + ' plays for R.Madrid.';
    default:
      return 'Does not play for both teams.';
  }
};
console.log(whichTeam('Barcelona', 'Messi'));
```

### Arrays

```javascript
var coffees = ['Dark Roast', 'Colombian', 'Turkish'];
console.log(coffees[1]); //Colombian

var johnArray = ['John', 'Smith', 1980, 'player', true];
johnArray.push('yellow');
johnArray.unshift('Mr.');
console.log(johnArray);
johnArray.pop(); //removes the last
johnArray.shift(); //removes the first
console.log(johnArray);

var isPlayer =
  johnArray.indexOf('player') === -1
    ? johnArray[0] + ' is not a player.'
    : johnArray[0] + ' is a player.';
console.log(isPlayer);
```

### Objects

```javascript
var car = {
  myCar: 'Subaru',
  milage: 112012,
  color: 'white',
};
console.log('I have a ' + car.color + ' ' + car.myCar + '.');

var carNew = new Object();
carNew.model = 'Hyundai';
carNew['milage'] = 12752;

//Objects Methods
var hank = {
  firstName: 'Hank',
  lastName: 'Dang',
  birthYear: 1980,
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  },
};
```

### Loops

```javascript
//for loop
console.log('***for loop***');
for (var i = 0; i < johnArray.length; i++) {
  console.log(johnArray[i]);
}

//while loop
console.log('***while loop***');
var i = 0;
while (i < johnArray.length) {
  console.log(johnArray[i]);
  i++;
}

//continue and break statements
console.log('***continue***');
for (var i = 0; i < johnArray.length; i++) {
  //if not string skip
  if (typeof johnArray[i] !== 'string') continue;
  console.log(johnArray[i]);
}

console.log('***break***');
for (var i = 0; i < johnArray.length; i++) {
  //if not string stop
  if (typeof johnArray[i] !== 'string') break;
  console.log(johnArray[i]);
}
```

## How Js Works

### Hoisting

```javascript
//Declaration
calculateAge(1990); //hoisting
function calculateAge(year) {
  console.log(2018 - year);
}

//Expression
//hoisting doesn't work with expressions
retirement(1980); //Uncaught TypeError: retirement is not a function
var retirement = function (year) {
  console.log(65 - (2018 - year));
};

//Variables
console.log(age); //undefined Js knows it is declared but not defined yet
var age = 36;
console.log(age); //36

function foo() {
  console.log(age); //undefined --> because age is changed after this
  var age = 65;
  console.log(age); //age is 65 inside the function
}
foo();
console.log(age); // global age is still 36
```

### Scoping

```javascript
// First scoping example
var a = 'Hello!';
first();
function first() {
  var b = 'Hi!';
  second();
  function second() {
    var c = 'Hey!';
    console.log(a + b + c); //Hello!Hi!Hey!
  }
}

// Example to show the difference between execution stack and scope chain
var a1 = 'Hello!';
first1();
function first1() {
  var b1 = 'Hi!';
  second1();
  function second1() {
    var c1 = 'Hey!';
    third1();
  }
}
function third1() {
  var d1 = 'John';
  console.log(a1 + b1 + c1 + d1); //Uncaught ReferenceError: b1 is not defined
  // it can not access to b1, c1 because they are inside another func
}
```

### this

```javascript
carAge(2012);
function carAge(year) {
  console.log(2018 - year);
  console.log(this); //global object (window)
}

var damon = {
  name: 'Damon',
  yearOfStart: 2003,
  yearsOfWork: function () {
    //method
    console.log(this); //damon object
    console.log(2018 - this.yearOfStart);

    function innerFunction() {
      //not a method it is a regular function
      console.log(this); //back to being window
    }
  },
};
damon.yearsOfWork(); // now this refers to the damon object

var mike = {
  name: 'Mike',
  yearOfStart: 2010,
};

mike.yearsOfWork = damon.yearsOfWork; //borrows the method
mike.yearsOfWork();
```

## DOM

```javascript
eventTarget.addEventListener('event', eventHandlerFunction);
eventTarget.removeEventListener('event', eventHandlerFunction);

document.querySelector('.class').addEventListener('click', function () {
  document.getElementById('dice1').style.display = 'block';
  document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.toggle('active');
  do_sth();
});
```

## Objects and Functions

### Function Constructor

```javascript
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
```

### Inheritance

```javascript
Person.prototype.calculateAge = function () {
  console.log(2018 - this.yearOfBirth);
};
Person.prototype.lastName = 'Smith';
var damon = new Person('Damon', 1980, 'driver');
var henry = new Person('Henry', 1974, 'player');
damon.calculateAge(); //38
henry.calculateAge(); //44
console.log(damon.lastName + ' ' + henry.lastName); //Smith Smith
```

### Object.create

```javascript
var personProto = {
  calculateAge1: function () {
    console.log(2018 - this.yearOfBirth); //27
  },
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1992;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1978 },
  job: { value: 'painter' },
});
```

### Primitives vs Objects

```javascript
var age = 27;
var obj1 = {
  age: 26,
  city: 'Berlin',
};
function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj1);
console.log(age); //27
console.log(obj1.city); //San Francisco
```

### Passing functions as arguments

```javascript
var years = [1970, 1960, 1893, 1920];
function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge2(el) {
  return 2018 - el;
}
function isFullAge(el) {
  return el >= 50;
}
function maxHeartBeat(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}
var ages = arrayCalc(years, calculateAge2);
var fullAges = arrayCalc(ages, isFullAge);
var heartBeat = arrayCalc(ages, maxHeartBeat);
console.log(ages); //[48, 58, 125, 98]
console.log(fullAges); //[false, true, true, true]
console.log(heartBeat); // [175, 168, -1, -1]
```

### Function Returning Another Function

```javascript
function interviewQuestions(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', can you please explain what UX design is?');
    };
  } else if (job === 'teacher') {
    return function (name) {
      console.log('What subject do you teach, ' + name + '!');
    };
  } else {
    return function (name) {
      console.log('What do you do ' + name + '?');
    };
  }
}

var teacherQuestion = interviewQuestions('teacher');
var designerQuestion = interviewQuestions('designer');
teacherQuestion('Damon'); //What subject do you teach, Damon!
designerQuestion('Jane'); //Jane, can you please explain what UX design is?
interviewQuestions('teacher')('John'); //What subject do you teach, John!
```

### IIFE

```javascript
// Immediately Invoked Function Expressions
var x = 2;
(function (x) {
  var score = Math.random() * 10;
  console.log(score); //4.122908056875344
  console.log(x); // 2
  console.log(score - x >= 5); // false
})(x);
var x = 3;
```

### Closures

```javascript
function retirement(retirementAge) {
  var a = ' years left until retirement';
  return function (yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(65);
var retirementGermany = retirement(66);
var retirementIceland = retirement(67);

retirementUS(1990); //37 years left until retirement
retirementIceland(1990); //39 years left until retirement
retirement(1990)(65); //37 years left until retirement

function interviewQuestions(job) {
  return function (name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('What do you do ' + name + '?');
    }
  };
}
interviewQuestions('teacher')('John'); //'What subject do you teach, John?'
```

### Bind, Call, Apply

```javascript
var bca = {
  name: 'Damon',
  age: 23,
  job: 'Driver',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log(
        'Good ' +
          timeOfDay +
          ' ladies and gentlemen! My name is ' +
          this.name +
          ".I'm a " +
          this.job +
          ".I'm " +
          this.age +
          ' years old.'
      );
    } else if (style === 'friendly') {
      console.log(
        'Hey Good ' +
          timeOfDay +
          ".What's up? I'm " +
          this.name +
          " I'm a " +
          this.job +
          ".I'm " +
          this.age +
          ' years old.'
      );
    } else {
      console.log('Please pick a style.');
    }
  },
};
var bca2 = {
  name: 'Mary',
  age: 54,
  job: 'Creator',
};
bca.presentation('formal', 'morning'); //Good morning ladies and gentlemen! My name is Damon.I'm a Driver.I'm 23 years old.

//call
bca.presentation.call(bca2, 'friendly', 'afternoon'); //Hey Good afternoon.What's up? I'm Mary I'm a Creator.I'm 54 years old.
//changed this method from bca to bca2 ==> Method borrowing

//apply
bca.presentation.apply(bcaCall, ['friendly', 'Morning']); //with array it doesn't fit in our example

//bind
var bcaFriendly = bca.presentation.bind(bca, 'friendly');
bcaFriendly('morning'); //Hey Good morning.What's up? I'm Damon I'm a Driver.I'm 23 years old.
bcaFriendly('night'); //Hey Good night.What's up? I'm Damon I'm a Driver.I'm 23 years old.
//similar to call but it doesn't immediately call the function it creates another one with preset arguments
```

## ES6

### let and const

```javascript
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5); //Jane Miller

//ES6
/* constants can not be changed, will get an error
 can mutate it though if it is object (with .push() for ex) */
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); //Uncaught TypeError: invalid assignment to const 'name6'

//ES5
function driverLicense5(passedTest) {
  if (passedTest) {
    var firstname = 'John';
    var yearOfBirth = 1990;
  }
  console.log(
    firstname + ' whom was born in ' + yearOfBirth + ' passed the test!'
  );
}
driverLicense5(true); //John whom was born in 1990 passed the test!

//ES6
function driverLicense6(passedTest) {
  if (passedTest) {
    //let and const only accessible in block
    let firstname = 'John';
    const yearOfBirth = 1990;
  }
  console.log(
    firstname + ' whom was born in ' + yearOfBirth + ' passed the test!'
  );
}
driverLicense6(true); // Uncaught ReferenceError: firstname is not defined

//ES5
var i5 = 5;
for (var i5 = 2; i5 > 0; i5--) {
  console.log(i5);
}
console.log(i5); // 0
//ES6
let i6 = 6;
for (let i6 = 2; i6 > 0; i6--) {
  console.log(i6);
}
console.log(i6); // 6
```

### Blocks and IIFEs

```javascript
//ES5
(function () {
  var c = 3;
});
console.log(c); //c is not defined
//ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}
console.log(a); // not accessible
console.log(c); // accessible
```

### Strings

```javascript
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge() {
  return 2017 - yearOfBirth;
}

//ES5
console.log(
  'This is ' +
    firstName +
    ' ' +
    lastName +
    ' and he is ' +
    calcAge(yearOfBirth) +
    '.'
);
//ES6
console.log(
  `This is ${firstName} ${lastName} and he is ${calcAge(yearOfBirth)}.`
);
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //true
console.log(n.endsWith('h')); //true
console.log(n.endsWith('n')); //false
console.log(n.includes('oh')); //true
console.log(`${firstName} `.repeat(3)); //John John John
```

### Arrow Functions

```javascript
const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function (e) {
  return 2017 - e;
});
console.log(ages5); //[27, 52, 35, 80]

//ES6
let ages6 = years.map((e) => 2017 - e); // no need for return in one-line functions
console.log(ages6); //[27, 52, 35, 80]

ages6 = years.map((e, index) => `Age element ${index + 1}: ${2017 - e}.`);
console.log(ages6);

ages6 = years.map((e, index) => {
  const now = new Date().getFullYear();
  const age = now - e;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6); //[ "Age element 1: 27.", "Age element 2: 52.", "Age element 3: 35.", "Age element 4: 80." ]
```

### Arrow Functions 2

```javascript
//ES5
var box5 = {
  color: 'green',
  position: '1',
  clickMe: function () {
    var self = this;
    document.querySelector('.green').addEventListener('click', function () {
      //this points to window object not to box5 thats why we create self variable
      var str =
        'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  },
};
box5.clickMe();
//ES6
const box6 = {
  color: 'green',
  position: '1',
  clickMe: function () {
    // if you switch this to es6 it is not gonna work '() =>'
    document.querySelector('.green').addEventListener('click', () => {
      // es6 you don't need to create a self variable
      var str =
        'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  },
};
box6.clickMe();
//arrow functions should never be used as methods

//function constructor
function Person(name) {
  this.name = name;
}
//ES5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(
    function (e) {
      return this.name + ' is friends with ' + e;
    }.bind(this)
  ); //if you don't bind it this takes window --bind creates a copy
  console.log(arr);
};
var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
//ES6
Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map((e) => `${this.name} is friends with  ${e}`);
  console.log(arr);
};
new Person('Mike').myFriends6(friends);
```

### Destructuring

```javascript
//ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];
//ES6
const [name1, age1] = ['John', 26];
console.log(name1); // John
console.log(age1); // 26

const obj = {
  firstName1: 'John',
  lastName1: 'Smith',
};
const { firstName1, lastName1 } = obj;
console.log(firstName1); // John
console.log(lastName1); // Smith

const { firstName1: a, lastName1: b } = obj;
console.log(a); // John
console.log(b); // Smith

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(age); //age
console.log(retirement); // (65 - age)
```

### Arrays

```javascript
const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = 'red';
});
//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach((cur) => (cur.style.backgroundColor = 'red'));

//ES5
for (var jbox = 0; jbox < boxesArr5.length; jbox++) {
  if (boxesArr5[jbox].className === ' box blue') {
    continue;
  }
  boxesArr5[jbox].textContent = 'I am changed to blue';
}
//ES6
for (const current of boxesArr6) {
  if (current.className.includes('blue')) {
    continue;
  }
  current.textContent = 'I am changed to red';
}

var ages = [12, 17, 8, 21, 14, 11];
var full5 = ages.map(function (cur) {
  return cur >= 18;
});
console.log(full5); // [false, false, false, true, false, false]

//ES5
console.log(full5.indexOf(true)); // 3
console.log(ages[full5.indexOf(true)]); // 21
//ES6
console.log(ages.findIndex((cur) => cur >= 18)); // 3
console.log(ages.find((cur) => cur >= 18)); // 21
```

### Spread Operator

```javascript
//used in function
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1); //81

//ES5
//if we want to use an array we need apply in es5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2); //81
//ES6
//but in es6 we use spread (...)
const sum3 = addFourAges(...ages);
console.log(sum3); //81

const familySmith = ['John', 'Jane', 'Mike'];
const familyDoe = ['Nick', 'Mary'];
//ES5
var bigFamily = familySmith.concat('Lana').concat(familyDoe);
//ES6
const bigFamily = [...familySmith, 'Lana', ...familyDoe];

console.log(bigFamily); //[ "John", "Jane", "Mike", "Lana", "Nick", "Mary" ]

const h = document.querySelector('h1');
const boxes1 = document.querySelectorAll('.box'); //node-list
const all = [h, ...boxes1];
Array.from(all).forEach((cur) => (cur.style.color = 'orange'));
console.log('<---->');
```

### Rest Parameters

```javascript
/* if we don't know how many arguments are there gonna be
used in function declaration */

//ES5
function isFullAge5() {
  console.log(arguments); //similar to this variable
  //makes arguments an array
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function (cur) {
    console.log(2016 - cur >= 18);
  });
}
isFullAge5(1990, 1999, 1965);
//ES6
function isFullAge6(...years) {
  years.forEach((cur) => console.log(2016 - cur >= 18));
}
isFullAge6(1990, 1999, 1965);

//ES5
function isFullAge51(limit) {
  //starts cutting from position one
  var argsArr1 = Array.prototype.slice.call(arguments, 1);
  argsArr1.forEach(function (cur) {
    console.log(2016 - cur >= limit);
  });
}
isFullAge51(16, 1990, 1999, 1965);
//ES6
function isFullAge61(limit, ...years) {
  years.forEach((cur) => console.log(2016 - cur >= limit));
}
isFullAge61(16, 1990, 1999, 1965);
```

### Default Parameters

```javascript
//ES5
//function constructor
function Smith5(firstName, yearOfBirth, lastName, nationality) {
  //default lastName and nationality if not specified
  lastName === undefined ? (lastName = 'Smith') : (lastName = lastName);
  nationality === undefined
    ? (nationality = 'American')
    : (nationality = nationality);
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
//ES6
function Smith6(
  firstName,
  yearOfBirth,
  lastName = 'Smith',
  nationality = 'American'
) {
  //default lastName and nationality if not specified
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
var john = new Smith6('John', 1990);
console.log(john);
//{ firstName: "John", lastName: "Smith", yearOfBirth: 1990, nationality: "American" }

//last name and nationality changed
var emily = new Smith6('Emily', 1980, 'Diaz', 'Spanish');
console.log(emily);
// { firstName: "Emily", lastName: "Diaz", yearOfBirth: 1980, nationality: "Spanish" }
```

### Maps

```javascript
//new key value data structure
const question = new Map();
//in order to add data we use set method
question.set('question', 'What is the capitol?');
question.set(1, 'Brussels');
question.set(2, 'Washington');
question.set(3, 'Ankara');
question.set(4, 'Caracas');
//correct answer
question.set('correct', 2);
//if the answer is correct
question.set(true, 'Correct');
// if it is wrong
question.set(false, 'Wrong try again');
//get
console.log(question.get('question')); //What is the capitol?
//size of map
console.log(question.size); // 8

if (question.has(4)) {
  //checks if it has number 4
  question.delete(4); //4th answer is gone
}
//empty the map
question.clear();

// question.forEach((value, key) => console.log(`this is ${key}, and it's set to ${value}`));
for (let [key, value] of question.entries()) {
  //same as forEach method
  if (typeof key === 'number') {
    //if key is number then print
    console.log(`Answer ${key}: ${value}`);
  }
}
//convert to number
const ans = parseInt(prompt('Write the correct answer for capitol'));
console.log(question.get(ans === question.get('correct')));
```

### Classes

```javascript
//ES5
var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
};
var mioke5 = new Person5('Mioke', 1970, 'engineer');
//ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  //no need for ; or ,
  calculateAge() {
    //no need for prototype
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }
  static greeting() {
    //attached, not inherited
    console.log('Hey there I am Person6');
  }
}

const mioke6 = new Person6('Mioke', 1970, 'engineer');
Person6.greeting();
//Static methods won't work at instances
mioke6.greeting();
```

### Subclasses

```javascript
//ES5
//person5 superclass
var Person5s = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
Person5s.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};
//subclass
var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
  Person5s.call(this, name, yearOfBirth, job); //
  this.olympicGames = olympicGames;
  this.medals = medals;
};
Athlete5.prototype = Object.create(Person5s.prototype);
Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
};
var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge(); // 30
johnAthlete5.wonMedal(); // 11

//ES6
class Person6s {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}
//subclass
class Athlete6 extends Person6s {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.calculateAge(); // 30
johnAthlete6.wonMedal(); // 11
```

## Async

### Ajax

```javascript
//request and fetch (fetch is more modern)
function getWeather() {
  const url = 'some_url';
  fetch(url)
    .then((result) => {
      console.log(result);
      //converting json to javascript
      return result.json();
    })
    .then((data) => {
      //prints the json
      console.log(data);
      const today = data.consolidated_weather[0];
      console.log(`temperatures in ${data.title} stay between
      ${today.min_temp} and ${today.max_temp}.`);
    })
    .catch((error) => {
      console.log(error);
    });
}
getWeather(2487956);

//fetch with await/async
async function getWeatherAw() {
  const url = 'some_url';
  //tries if there is an error
  try {
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    alert(error);
  }
}
getWeatherAw();

let dataCity;
getWeatherAw(someNumber).then((data) => {
  dataCity = data;
  console.log(dataCity);
});
```

### Promises

```javascript
//async

const second = () => {
  setTimeout(() => {
    console.log('no there is Async');
  }, 2000);   //gives two seconds delay
};
const first = () => {
  console.log('First');
  second();
  console.log('the end');
};
first();


//async with callbacks (old way)
function getRecipe() {
  setTimeout(() => {
    const recipeId = [123, 281, 234, 12];
    console.log(recipeId);

    setTimeout(id => {
      const recipe = {
        title: 'Pizza',
        publisher: 'Damon'
      };
      console.log(`${id}: ${recipe.title}`);

      setTimeout(id => {
        const recipe2 = {
          title: 'Pasta',
          publisher: 'John'
        };
        console.log(`${id}: ${recipe2.title}, publisher: ${recipe2.publisher}`);
      }, 1500, recipeId[2]);
    }, 1000, recipeId[1]); //it ll be 2500 ms; third argument is parameter for the function
  }, 1500);
};
getRecipe();


//promises (es6)

const getIds = new Promise((resolve, reject) => {
  //setTimeout can not be failed
    setTimeout(()=>{
      resolve([123, 281, 234, 12]);
    }, 1500);
});

const getRecipe = recId => {
  return new Promise((resolve, reject) => {
    setTimeout(id => {
      const recipe = {
        title: 'Pasta',
        publisher: 'Damon'
      };
      resolve(`${id}: ${recipe.title}`);
    }, 1500, recId)
  });
};
const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(pub => {
      const recipe = {
        title: 'Pizza',
        publisher: 'John'
      };
      resolve(`${pub}: ${recipe.title}`);
    }, 1500, publisher);
  });
};
//then and catch
getIds
//this is for resolve
.then(ids => {
  //[123, 281, 234, 12]
  console.log(ids);
  return getRecipe(ids[2]);
})
.then(recipe => {
  //getRecipe 234:Pasta
  console.log(recipe);
  return getRelated('John');
})
.then(recipe => {
   //getRelated John: Pizza
  console.log(recipe);
})
.catch(error => {  //this is for reject
  console.log(error);
});
*/

//async-await
/*await can only be used with async function
  same thing as then catch on top */
async function getrecipesAw() {
  //first promise getIds
  const ids = await getIds;
  console.log(ids);
  const recipe = await getRecipe(ids[2]);
  console.log(recipe);
  const related = await getRelated('John');
  console.log(related);

  return recipe;
};
/*const rec = getrecipesAw(); // we'll get pending
console.log(rec);*/
getrecipesAw().then(result => { //but if you use then we ll get the result
  console.log(`${result} is the best ever!`);
});
```

## Array Methods

### Filter

```javascript
function filter(array, callback) {
  newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

arr.filter((value, index, array) => value > 2);
```

### forEach

```javascript
function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

arr.forEach((val, index, array) => console.log(val, index, array));
```

### map

```javascript
function map(arr, callback) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

arr.map((value, index, array) => value * 2);
```

### reduce

```javascript
function reduce(callback, initialState) {
  const hasInitialState = arguments.length > 1;
  let result = initialState;
  for (let i = 0; i < this.length; i++) {
    if (i === 0 && !hasInitialState) {
      result = this[i];
    } else {
      result = callback(result, this[i], i, this);
    }
  }
  return result;
}

arr.reduce(
  (accumulator, nextValue, index, array) => accumulator + nextValue,
  optionalSecondParameter
);
```

### some

```javascript
function some(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

arr.some((value, index, array) => value < 2);
```

### every

```javascript
function every(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === false) {
      return false;
    }
  }
  return true;
}

arr.every((value, index, array) => value < 2);
```

## Function Methods

### call

```javascript
var person = {
  firstName: 'Jason',
  sayHi: function () {
    return 'Hi ' + this.firstName;
  },
  determineContext: function () {
    return this === person;
  },
  dog: {
    sayHi: function () {
      return 'Hi ' + this.firstName;
    },
    determineContext: function () {
      return this === person; //false
    },
  },
};
person.dog.sayHi.call(person);
person.dog.determineContext.call(person); //now it is true

var damon = {
  firstName: 'Damon',
};
person.sayHi.call(damon);

function sayHello() {
  return 'Hello ' + this.firstName;
}
console.log(sayHello(damon)); //Hello undefined
console.log(sayHello.call(damon)); // Hello Damon

var divs = document.getElementByTagName('div');
divs.filter((val) => val); // undefined
var divsArray = [].slice.call(divs);
divsArray.filter(function (val) {
  return val.innerText === 'Hello';
}); //now you get a result
```

### apply

```javascript
function sayHi() {
  return 'Hi ' + this.firstName;
}
var damon = {
  firstName: 'Damon',
};
var jason = {
  firstName: 'Jason',
};
console.log(sayHi.call(damon));
console.log(sayHi.apply(jason)); //seems similar
//but with parameters
function addNumbers(a, b, c, d) {
  return this.firstName + ' just calculated ' + (a + b + c + d);
}
console.log(addNumbers.call(damon, 1, 2, 3, 4));
console.log(addNumbers.apply(jason, [1, 2, 3, 4])); //takes an array as a parameter

var nums = [5, 7, 1, 4, 2];
console.log(Math.max(nums)); //NaN because it doesn't take any arrays
console.log(Math.max.apply(this, nums));
function sumValues(a, b, c) {
  return a + b + c;
}
var values = [1, 2, 3];
console.log(sumValues(values)); // "1,2,3undefinedundefined"
console.log(sumValues.apply(this, values)); // you get the result
```

### bind

```javascript
//bind
function addNumbers(a, b, c, d) {
  return this.firstName + ' just calculated ' + (a + b + c + d);
}
var damon = {
  firstName: 'Damon',
};
//bind returns a new function with 'this' bound already
var damonCalc = addNumbers.bind(damon, 1, 2, 3, 4);
console.log(damonCalc());
var damonCalc2 = addNumbers.bind(damon, 1, 2);
console.log(damonCalc2()); //NaN
console.log(damonCalc2(3, 4)); //gives you the result it continues where bind left of

var jason = {
  firstName: 'Jason',
  sayHi: function () {
    setTimeout(
      function () {
        //this refers to window because setTimeout is window function
        console.log('Hi ' + this.firstName);
      }.bind(this),
      1000
    ); //this is how we fix it
  },
};
jason.sayHi();
```
