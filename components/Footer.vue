<template>
  <footer>
    <div class="max-width footer-container">
      <section class="footer-col">
        <h4 class="second-title upper-case color-blue">
          A propos
        </h4>
        <p><strong>Balise 360</strong> est un concept pour les randonneurs engagés pour l’environnement.</p>
        <p>Aidez dès maintenant à contribuer au patrimoine français en créant votre compte.</p>
      </section>
      <section class="footer-col">
        <div>
          <h4 class="second-title upper-case color-blue">
            Nous contacter
          </h4>
          <p>Notre service après ventes :<br>+33 00 00 00 00 00</p>
        </div>
        <div class="footer-col-policy">
          <h4 class="second-title upper-case color-blue">
            Réglementation
          </h4>
          <ul class="footer-list">
            <li class="footer-list-item">
              Les Cookies
            </li>
            <li class="footer-list-item">
              <a class="link" href="/rgpd">La RGPD</a>
            </li>
          </ul>
        </div>
      </section>
      <section class="footer-col">
        <h4 class="second-title upper-case color-blue">
          Nos réseaux
        </h4>
        <ul class="footer-list">
          <li class="footer-list-item">
            <a class="link" href="https://www.facebook.com/groups/444668887091380" target="_blank">Facebook</a>
          </li>
          <li class="footer-list-item">
            <a class="link" href="https://www.instagram.com/balise360/" target="_blank">Instagram</a>
          </li>
          <li class="footer-list-item">
            <a class="link" href="https://www.pinterest.fr/balise360/" target="_blank">Pinterest</a>
          </li>
          <li class="footer-list-item">
            <a class="link" href="https://podcast.ausha.co/murmures-de-la-nature" target="_blank">Ausha</a>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
footer{
  background-color: var(--green-color);
  font-family: 'Apfel',serif;
  color: var(--white-color);
  padding-top: 80px;
  padding-bottom: 60px;
}

.footer-container{
  display: flex;
  justify-content: space-between;
}

.footer-col{
  max-width: 250px;
  &:first-child p{
    line-height: 29px;
  }
  > div:nth-child(2){
    margin-top: 40px;
  }
  p~p{
      margin-top: 30px;
  }
}

.footer-list-item{
  margin: 20px 0;
}

@media screen and (max-width: 970px){
  footer{
    padding: 50px 0;
  }
  .footer-col:first-child{
    display: none;
  }
}

@media screen and (max-width: 768px) {
  footer{
    margin-top: 50px;
  }
}

@media screen and (max-width: 530px) {
  .footer-container{
    display: block;
    .footer-col{
      margin-bottom: 40px;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
  .footer-col-policy{
    display: none;
  }
}
</style>
