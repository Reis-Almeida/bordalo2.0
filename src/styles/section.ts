import theme from './theme';
import { createGlobalStyle } from 'styled-components'

const SectionStyle = createGlobalStyle`

.newsArea {
    background-color: #f9f9f9;
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.container,
.containerList {
    max-width: 1170px;
    width: 100%;
}

.containerStaticPage {
    margin-top: 80px;
    padding: 1.4rem;
    background-color: #fff;    
    min-height: 60vh;
}

.containerStaticPage {
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.containerNews {
    max-width: 1200px;
    margin-bottom: 6rem;
}

.containerNews h2 {
    font-size: 24px;
    line-height: 32px;
    margin: 0 0 10px;
    font-weight: 500;
}

.containerNews img {
    height: auto;
}

.containerNews > div:first-child {
    text-align: center;
}

.imageContainer {
    width: 100%;
    margin: 1rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.imageContainer img {
    width: 100%;
}

.imageContainer p {
    font-size: .8rem;
}

.servicesBanner {
    padding: 55px 0; 
    text-align: center;
    font-size: 24px;
    line-height: 32px;
    margin: 0 0 10px;
    font-weight: 500;
    text-transform: inherit;
}

.serviceContainerOne,
.serviceContainerTwo,
.serviceContainerThree,
.serviceContainerFour,
.serviceContainerFive,
.serviceContainerSix,
.serviceContainerSeven,
.serviceContainerEight {
    padding: 2rem;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.serviceContainerOne,
.serviceContainerThree,
.serviceContainerFive,
.serviceContainerSeven {
    display: flex;
    justify-content: flex-end;
}

.serviceContainerOne {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/1.jpg);
}

.serviceContainerTwo {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/2.jpg);
}

.serviceContainerThree {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/3.jpg);
}

.serviceContainerFour {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/4.jpg);
}

.serviceContainerFive{
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/5.jpg);
}

.serviceContainerSix {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/6.jpg);
}

.serviceContainerSeven {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/7.jpg);
}

.serviceContainerEight {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/8.jpg);
}


.serviceInfoContainer {
    max-width: 635px;
    font-weight: 700;
    color: #262626;
}

.serviceInfoContainer h2 {
    text-align: center;
}

.noMargin {
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.containerStaticPage > h1,
.containerStaticPage > div {
    width: 100%;
}

.pageError {
    text-align: center;
    width: 100%;
    font-size: 2rem;
    font-weight: 500;
    color: #707070;
}

.bannerText {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.bannerText > h1 {
    font-size: 43px;
    line-height: 43px;
    margin: 0 0 10px;
    font-weight: 400;
}

.bannerText > h3 {
    font-size: 24px;
    line-height: 24px;
    margin: 0 0 10px;
    font-weight: 300;
    display: block;
    color: #fff;
}

.bannerText h1 {
    color: #fff;
    font-size: 3rem;
}

.contactsContainer,
.companyContent,
.announceContent {
    background-color: #fff;
    padding: 2rem;
}

.companyContent {
    text-align: initial;
    font-size: 1.2rem;
    font-weight: 300;
}

.announceContent {
    text-align: center;
}

.tutorialContainer {
    background-color: #e5e5e5 !important;
    border-radius: 10px !important;
    padding: .8rem;
    display: block;
    text-align: left;
    color: #333;
}

.tutorialContainer p {
    padding-left: 1rem;
}

.servicesContent {
    margin: 0 auto;
    max-width: 1366px;
    padding: 2rem;
    text-align: center;
}

.containerStaticMargin {
    margin-top: 130px;
}

.servicesContent > h2,
.containerStaticMargin > h2 {
    font-weight: 500;
    font-size: 1.6rem;
    padding: 1.8rem 0;
    text-align: center;
}

.servicesContainer {
    margin-bottom: 1.2rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 30px;
}


.service {
    display: flex;
}

.service > div:first-child {
    min-width: 80px;
    text-align: left;
    display: table-cell;
    vertical-align: top;
    padding: 0 20px 0 0;
    font-size: 40px;
}

.serviceDescription {
    text-align: left;
    max-width: 190px;
}


.serviceDescription h3 {
    margin: 0;
    padding-bottom: .6rem;
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
}

.serviceDescription p {
    font-size: 16px;
    line-height: 22px;
    margin: 0 0 10px;
    font-weight: 300;
    text-transform: inherit;
    text-align: inherit;
}

.serviceDescription a {
    color: #0093d1;
}

.containerStatic,
.containerStaticMargin {
    background-color: #f9f9f9;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.containerStatic > .contactPage {
    max-width: 1170px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.lineLinksItem {
    padding: 1rem 0;
}

.lineLinks span,
.lineLinksItem span {
    padding: 0 .2rem;
}

.lineLinks a {
  margin-left: 3px;
  ${theme.anchors.primaryFont}

}
.lineLinksItem a {
  margin-left: 3px;

    ${theme.colors.primary}
}

.successMessage,
.errorMessage {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: .4rem;
}

.errorMessage {
    color: rgb(172, 0, 34);
}

.successMessage {
    color: rgb(0, 167, 28);
}

.infoContainer {
    margin-top: 3rem;
}

.infoContainer > div {
    margin: 2rem 0;
}

.infoTitle {
    color: #333;
    font-size: 16px;
    font-weight: 400;
    line-height: 12px;
    margin: 0;
    text-transform: none;
    display: flex;
    align-items: center;
}

.infoTitle > svg {
    margin: 0 .4rem;
    margin-top: .2rem;
}

.infoTitle a{
  ${theme.anchors.primaryFont}
}

.TeamContentFull,
.EmployeeContentFull {
    padding: 3rem 0 2rem 0;
    margin-bottom: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1170px;
    width: 100%;
}

.EmployeeContentFull {
    text-align: initial;
    align-items: flex-start;
    margin-top: 95px;
}

.EmployeeContentFull > div:nth-child(2) {
    min-height: 372px;
    width: 100%;
}

.employeeContainer {
    padding: 40px;
    background-color: #fff;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.employeeContainer img {
    max-width: 200px;
    width: 100%;
    height: auto;
    display: flex;
}

.employeeContainer > div:first-child {
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.employeeContainer > div:nth-child(2) {
    width: 350px;
    height: 100%;
}

.employeeContainer p {
    margin: 0 0 .4rem;
}

.employeeContainer > div > p:first-child {
    margin: 0;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    text-transform: inherit;
}

.employeeContainer p,
.employeeContainer li {
    text-align: center;
}

.employeeContainer > div > p:nth-child(2) {
    font-size: 14px;
    line-height: 20px;
    margin: 0 0 23px;
    font-weight: 300;
    text-transform: inherit;
    color: #9b9b9b;
}

.employeeListInfo {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
}

.employeeListInfo span {
  text-transform: uppercase;
  
}

.employeeListInfo a {
  ${theme.colors.primary}
}

.lineLinks {
    max-width: 1600px;
}

@media (max-width: 1366px) {
    .bannerText h1 {
        padding: 0 1.4rem;
    }
}

@media (min-width: 1024px) {
  .containerList {
        margin-top: 140px;
  }

  .tutorialContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
  }

  .servicesContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 100px;
    }
}

@media (min-width: 640px) and (max-width: 1024px) {

  .servicesContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      row-gap: 100px;
  }
}

@media (min-width: 860px) {
    .contactstInfo {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 30px;
    }

    .infoContainer {
        margin-top: 0;
    }

    .employeeContainer {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .employeeContainer > div:first-child {        
        display: inline-block;
    }

    .employeeContainer p,
    .employeeContainer li {
        text-align: inherit;
    }

    .noMargin {
        margin: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 0;
        column-gap: 0;
    }

}

.banner,
.bannerCompany {
    background-color: #f6f6f6;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: scroll;
    background-size: cover;
    border-bottom: 0 solid #d8d8d8;
    border-top: 0 solid #d8d8d8;
    padding: 0;
    height: 400px;
}

.banner {
    background-image: url(https://allmateste.com.br/site-next/public/images/tt.jpg);
}

.bannerCompany {
    background-image: url(https://bordaloimob.com.br/Content/imgs/slide-3.jpg);
}
`

export default SectionStyle