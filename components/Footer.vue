<template>
  <footer>
    <div class="footerMain">
      <figure class="ftOutdoor desktop">
        <h4 class="ftTitle">
          A propos
        </h4>
        <p><strong>Balise 360</strong> est un concept pour les randonneurs engagés pour l’environnement.</p>
        <p>Aidez dès maintenant à contribuer au patrimoine français en créant votre compte.</p>
      </figure>
      <figure class="ftAddress">
        <h4 class="ftTitle">
          Nous contacter
        </h4>
        <p>Notre service après ventes :<br>+33 00 00 00 00 00</p>
      </figure>
      <figure class="ftSocialM">
        <h4 class="ftTitle">
          Nos réseaux
        </h4>
        <p>
          <a class="link" href="https://www.facebook.com/groups/444668887091380" target="_blank">
            Facebook
          </a>
        </p>
        <p>
          <a class="link" href="https://www.instagram.com/balise360/" target="_blank">
            Instagram
          </a>
        </p>
        <p>
          <a class="link" href="https://www.pinterest.fr/balise360/" target="_blank">
            Pinterest
          </a>
        </p>
        <p>
          <a class="link" href="https://web.tunecore.fr/dashboard" target="_blank">
            Spotify
          </a>
        </p>
      </figure>
    </div>
    <img class="-home-img" src="@/assets/decos/topo-bottom-left.png" alt="decoration">
    <img class="-home-img" src="@/assets/decos/topo-bottom-right.png" alt="decoration">
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
footer{
  height: 382px;
  background-color: var(--green-color);
}

.footerMain{
  height: 314px;
  display: flex;
  justify-content: space-around;
  padding-top: 60px;
  font-family: 'Apfel',serif;
  color: var(--background-color);

  .ftTitle{
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--blue-color);
    text-transform: uppercase;
    font-family: 'Apfel-bold',serif;
    margin-bottom: 10px;
  }
}

.ftOutdoor, .ftAddress{
  max-width: 250px;
  p{
    line-height: 29px;
  }
  p~p{
      margin-top: 30px;
  }
}
.ftSocialM{
  line-height: 29px;
  p{
    margin-bottom: 15px;
  }
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
