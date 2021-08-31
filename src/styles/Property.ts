import theme from './theme';
import { createGlobalStyle } from 'styled-components'

const PropertyStyle = createGlobalStyle`

.comment > textarea,
.announceForm textarea,
.comment > div > input {
    width: 100%;
    padding: .4rem;
    margin: .4rem 0;
}


.comment textarea,
.comment input {
    display: block;
    width: 100%;
    height: 42px;
    padding: 6px 15px;
    font-size: 14px;
    line-height: 1.42857;
    color: #959595;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    width: 100%;
}

.comment textarea {
    height: 250px;
}

.comment > div > input,
.comment > textarea {
    padding: 1rem;
}

.comment button {
    padding: 1rem;
    margin-top: 1rem;
    transition: all .3s;
    color: #eee;
    border: none;
    outline: none;
    font-size: 1.1rem;
}

.formButton {
    display: flex;
    align-items: center;
}

.formButton button {
    ${theme.buttons.primary}
}

.formButton svg {
    margin: 1rem 0 0 1rem;
}

.skeletonAuthor {
    height: 230px;
}

.skeletonFilter {
    height: 530px;
}

.skeletonOther {
    height: 530px;
}

.contentReverse {
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;
    margin-top: 3rem;
}

.emptyProperty {
    min-height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.emptyProperty div {
    font-size: 4rem;
    color: #707070;
}

.emptyProperty h3 {
    font-size: 1rem;
    color: #707070;
}

.skeletonImage {
    height: 530px;
}

.skeletonBody {
    height: 700px;
}

.skeletonMessage {
    height: 420px;
}

.skeleton {
    height: 530px;
    margin-top: 3rem;
    border-radius: 0!important;
}


@media screen and (min-width: 960px) {

  .skeleton {
      height: 280px;
      margin-top: 3rem;
  }

  .skeletonContainer > span > span:first-child {
      margin-top: 0;
  }

  .emptyProperty div {
      font-size: 7rem;
  }

  .emptyProperty h3 {
      font-size: 3rem;
  }


}

@media (min-width: 1200px) {
    .contentReverse,
    .content {
        display: grid;
        grid-template-columns: 360px auto;
        column-gap: 35px;
    }   
}

@media (min-width: 960px) and (max-width: 1200px) {

    .contentReverse,
    .content {
        display: grid;
        grid-template-columns: 1fr 3fr;
        column-gap: 25px;
    }
    
}

@media (min-width: 640px) and (max-width: 960px) {
    .contentReverse,
    .content {
        display: grid;
        grid-template-columns: 1fr 2fr;
        column-gap: 25px;
    }

    .filterList > div,
    .filterList > div select {
        font-size: .8rem;
    }
    
}
`

export default PropertyStyle