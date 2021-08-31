import theme from './theme';
import { createGlobalStyle } from 'styled-components'

const HomeStyle = createGlobalStyle`

.announceContainer {
  z-index: 20;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.announceContainer h2 {
  text-shadow: 2px 2px 10px #000;
  font-size: 24px;
  line-height: 32px;
  margin: 0 0 10px;
  color: #ffffff;
}

.announceContainer a {
  color: #fff;    
  border-radius: 5px;
  font-size: x-large;
  padding: 8px 25px;

  ${theme.anchors.primary}
}

.bodyContainer {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
}

.bodyContainer > section {
  max-width: 1200px;
  width: 100%;
}

.recentPropertiesContainer,
.partners {
  padding: 1rem 0.5rem;
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.recentPropertiesContainer > h1,
.recentPropertiesContainer > p {
  text-align: center;
}

.recentPropertiesContainer > h1:first-child,
.partners > h1:first-child{
  margin: 0;
  margin-top: 3.2rem;
  font-weight: 700;
  font-size: 1.5rem;
  font-weight: 600;
}

.recentPropertiesContainer > div:nth-child(2) {
  margin-top: 1rem;
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
}

@media (max-width: 600px) {
  .recentPropertiesContainer > h1:first-child {
    font-size: 1.8rem;    
  }
}
  
`

export default HomeStyle