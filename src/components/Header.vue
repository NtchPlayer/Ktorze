<template>
  <nav>
    <ol>
      <li><router-link to="/">L'équipe</router-link></li>
      <li><router-link to="/">Notre projet</router-link></li>
      <li><router-link :to="{name: 'home'}">Les fonctionnalités</router-link></li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
#app{
  nav{
    height: 80px;
    position: absolute;
    width: 100%;
    z-index: 1;
    margin-top: 50px;
    ol{
      display: flex;
      justify-content: center;
      gap: 100px;
      align-items: center;
      height: 100%;
      li{
        list-style: none;
        position: relative;
        a{
          font-size: 1.8rem;
          color:var(--green-color);
          font-weight: 600;
          &::before{
            position: absolute;
            top: -4px;
            left: -80px;
            content: url("data:image/svg+xml,%3Csvg width='65' height='10' viewBox='0 0 65 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline y1='4.5' x2='65' y2='4.5' stroke='%2300704E'/%3E%3Ccircle cx='60' cy='5' r='5' fill='%2300704E'/%3E%3C/svg%3E%0A");
  
          }
        }
        &:first-child{
          a{
            &::before{
              position: absolute;
              top: -75px;
              left: -80px;
              content: url("data:image/svg+xml,%3Csvg width='69' height='95' viewBox='0 0 69 95' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline y1='89.5' x2='65' y2='89.5' stroke='%2300704E'/%3E%3Ccircle cx='64' cy='90' r='5' fill='%2300704E'/%3E%3Cline x1='0.5' y1='90' x2='0.499996' y2='-5' stroke='%2300704E'/%3E%3C/svg%3E%0A");

            }
          }
        }
        &:last-child{
          a{
            &::after{
              position: absolute;
              top: 14px;
              right: -115px;
              content: url("data:image/svg+xml,%3Csvg width='238' height='255' viewBox='0 0 238 255' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='250' r='5' fill='%2300704E'/%3E%3Cline x1='136' y1='1.5' x2='236' y2='1.5' stroke='%2300704E'/%3E%3Cpath d='M236.5 0.998047L236.5 251' stroke='%2300704E'/%3E%3Cline x1='236' y1='250.5' x2='3' y2='250.5' stroke='%2300704E'/%3E%3C/svg%3E%0A");
            }
          }
        }
      }
    }
  }
}
</style>
