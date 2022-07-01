<template>
  <footer>
    <div class="max-width footer-container">
      <section class="footer-col desktop">
        <h4 class="footer-title">
          A propos
        </h4>
        <p><strong>Balise 360</strong> est un concept pour les randonneurs engagés pour l’environnement.</p>
        <p>Aidez dès maintenant à contribuer au patrimoine français en créant votre compte.</p>
      </section>
      <section class="footer-col">
        <div>
          <h4 class="footer-title">
            Nous contacter
          </h4>
          <p>Notre service après ventes :<br>+33 00 00 00 00 00</p>
        </div>
        <div>
          <h4 class="footer-title">
            Réglementation
          </h4>
          <ul class="footer-list">
            <li class="footer-list-item">Les Cookies</li>
            <li class="footer-list-item">La RGPD</li>
          </ul>
        </div>
      </section>
      <section class="footer-col">
        <h4 class="footer-title">
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
            <a class="link" href="https://web.tunecore.fr/dashboard" target="_blank">Spotify</a>
          </li>
        </ul>
      </section>
    </div>
    <!--<img class="-home-img" src="@/assets/decos/topo-bottom-left.png" alt="decoration">-->
    <!--<img class="-home-img" src="@/assets/decos/topo-bottom-right.png" alt="decoration">-->
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
  color: var(--background-color);
  padding-top: 80px;
  padding-bottom: 60px;
}

.footer-container{
  display: flex;
  justify-content: space-between;
}

.footer-title{
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--blue-color);
  text-transform: uppercase;
  margin-bottom: 10px;
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

@media (min-width: 0px) and (max-width: 768px){
  footer{
    height: 450px;
  }
  .footerMain{
    height: 450px;
    flex-direction: column;
    padding: 50px 70px;
  }
  .ftOutdoor,.ftAddress, .ftSocialM{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ftTitle{
      font-size: 1.5rem;
    }
    p{
      text-align: left;
    }
  }
}
</style>
