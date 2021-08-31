import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body {
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: none;
}

body,
body > div {
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
  transition: all .3s
}

input[type="button"] {
    border: none;
    outline: none;
}


.page-item-actived > a {
  background-color: #fa2e2e!important;
}

.subscribe-container > h3,
.subscribe-container > form > input[type="submit"] {
  color: #fff;
}

.subscribe-container > form > input[type="submit"] {
  background-color: #f15455;
  border-radius: 0 5px 5px 0;
  padding: .8rem;
  font-weight: 600;
}

.subscribe-container > form > input[type="text"] {
  padding: .8rem 1rem;
  border-radius: 5px 0px 0px  5px;

}

.subscribe-container > form > input[type="text"],
.subscribe-container > form > input[type="submit"] {
    border: none;
    outline:none;
    font-size: 16px;
}

.other-pages > ul {
  list-style: none;
  margin: 0;
}

.other-pages > ul li a {
  display: flex;
  align-items: center;
}

.other-pages > ul li span{
  margin: .3rem .5rem;
}

.other-pages > p {
  font-size: 1.2rem;
  font-weight: 600;
}

.other-pages > a {
  margin-right: 1rem;
}

.NavAnimation-enter {
  opacity: 0;
  transform: scale(0.5);
}

.NavAnimation-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 350ms, transform 350ms;
}

.NavAnimation-exit {
  opacity: 1;
}

.NavAnimation-exit-active {
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 350ms, transform 350ms;
}

.current-page {
  font-size: 1.5rem;
  vertical-align: middle;
}

.current-page {
  line-height: 1;
}

.thumb {
  height: auto;
}

.gallery {
  width: 100%;
  padding: 2rem;
  max-height: 95vh;
  height: 100%;
}

.gallery .carousel.carousel-slider,
.gallery .carousel .slider-wrapper,
.gallery .carousel .slider-wrapper.axis-horizontal .slider,
.sectionGallery .carousel.carousel-slider,
.sectionGallery .carousel .slider-wrapper,
.sectionGallery .carousel .slider-wrapper.axis-horizontal .slider{
  height: 100%;
}

.gallery .carousel .slide img {
    max-width: 100%;
    height: auto;
    max-height: 100%;
    width: auto!important;
    vertical-align: top;
    border: 0;
}

.gallery .testimonial-gallery .carousel .slide {
  background: none!important;
}

/* Classes Alert */

.alert-enter {
  opacity: 0;
  transform: scale(0.9);
}
.alert-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms, transform 300ms;
}
.alert-exit {
  opacity: 1;
}
.alert-exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 300ms, transform 300ms;
}

.mapboxgl-map .atlas-map {
  min-height: 340px;
}


.return-top-container {
  height: 100vh;
  width: 100%;
  position: fixed;
}

.sectionGallery {
  height: 840px;
  width: 100%;
  position: absolute;
  top: 0;
}



.return-top-container > button:hover {
  background-color: #0093d1;
}

.fixed-btn .top-screen {
  opacity: 0;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 977;
}

.modal {
  max-width: 760px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  z-index: 9999;
}

.modal input[type=submit] {
  padding: .5rem 1rem;
  font-size: 1.2rem;
  transition: all .3s;
  border: none;
  color: white;
  text-transform: uppercase;
}

.modal h3 {
  color: #444;
}

.sectionDiv {
    max-width: 1366px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 1024px) {

  .sectionGallery {
    height: 100%;
  }

}



/* FeatureCard, ListCardMobile ---------------------------------------------------------------------------------------------------------- */

.cardFooterContainer {
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    padding: 14px 12px!important;
    color: #9b9b9b;

    font-size: 12px!important;
    line-height: 20px!important;
    margin: 0!important;
    font-weight: 300!important;

    display: flex;
    justify-content: space-between;
}

.cardFooterContainer > div {
    display: flex;
    align-items: center;
}

/* FeatureCard, ListCardMobile, ListCard, PropertyContainer ----------------------------------------------------------------------------- */

.toolTip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  transition: all .3s;
}

.toolTip .toolTipText {
    visibility: hidden;
    width: 100px;
    font-size: .7rem;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: -5px;
    right: 110%;
    transition: all .3s;
  }
  
  
  .toolTip .toolTipText::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    transition: all .3s;
    border-color: transparent transparent transparent black;
  }
  
  .toolTip:hover .toolTipText {
    visibility: visible;
  }
  

/* FeatureCard, ListCardMobile, ListCard ---------------------------------------------------------------------------------------------- */

.cardFeaturesContainer a,
.cardFeaturesContainerMobile a {
    outline: 0!important;
    display: flex;
    align-items: center;
    margin-bottom: 0;
    font-weight: 500;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 11px 15px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.cardFeaturesContainerMobile > div:nth-child(2),
.cardFeaturesContainerMobile > div:first-child{
    padding: .4rem 0;
}

.cardFeaturesContainer,
.cardFeaturesContainerMobile {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    margin: .6rem 0;
}


.imageCardContainer > a:hover {
    background:rgb(0, 0, 0, .4);
    opacity: 1;
}

.imageCardContainer > a:hover {
    background:rgba(255, 255, 255, 0.4);
}

.imageCardContainer {
    position: relative;
    height: 280px;
}

.imageCardContainer > a {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all .3s;
    padding: .8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    opacity: 1;
}

.imageCardContainer > a > div {
    transition: all .3s;
    display: flex;
    justify-content: space-between;
    color: #fff;
    opacity: 1;
}

.imageCardContainer > a > div > span {
    display: inline-block;
    padding: 0 .3rem;
    font-weight: 500;
    border-radius: 3px;
    font-size: 0.6rem;
    text-transform: uppercase;
}

.imageCardContainer > a > div > span:nth-child(2) {
    background-color: #333;
}

.imageCardContainer > img {
    width: 100%;
    height: 100%;
}

@media screen and (min-width: 960px) {

  .imageCardContainer {
      max-height: 275px;
      height: 100%;
      width: 100%;
  }
}


.priceCardContainer > span {
    background: none;
    font-size: 1.1rem!important;
    line-height: 18px;
    margin: 0;
    font-weight: 500;
    text-transform: inherit;
    text-align: inherit;
}

.priceCardContainer > span:nth-child(2) {
    display: inline-block;
    border-radius: 4px;
    background-color: #000;
    opacity: .6;
    filter: alpha(opacity=60);
    padding: 0.3rem .4rem;
}

.priceCardContainer > span:nth-child(2):hover {
    opacity: 1;
}


.cardInfo > div > h3 {
    font-weight: 500;
    line-height: 20px;
    margin: 0 0 7px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-transform: inherit;
    text-align: inherit;
    font-size: 1rem;
    color: #333;
    display: block;
}

.cardInfo {
    padding: .6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.cardInfo > div > span,
.features {
    font-weight: 300;
    line-height: 13px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-transform: inherit;
    text-align: inherit;
    font-size: 0.8rem;
    color: #9b9b9b;
    display: block;
}

.cardInfo > p {
        font-size: 1.4rem;
}


.features {
    font-size: 13px;
    line-height: 16px;
    margin: 0 0 5px;
    text-transform: inherit;
    text-align: inherit;
    color: #333;
}

.features > span {
    margin-right: 15px;
}

.arrowButton {
    margin: 3px 0 0 3px;
}

  



/* PropertyContainer, ListCard ---------------------------------------------------------------------------------------------------------- */

.thumbProperty {
    width: 100%;
    max-height: 600px;
    /* height: 100%; */
    position: absolute;
}

.align {
    display: flex;
    align-items: center;
}

.align svg {
    margin-right: 7px;
}

.propertyOfferInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .6rem;
}

.propertyOfferInfo > span:first-child {
    display: inline-block;
    padding: 0 .2rem;
    font-weight: 500;
    border-radius: 3px;
    font-size: 0.6rem;
    text-transform: uppercase;
    background-color: #333;
    color: #fff;
}

.propertyOfferInfo > span:nth-child(2) {
    font-weight: 500;
    font-size: 1.1rem;
}
`

export default GlobalStyle