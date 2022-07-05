<template>
  <main class="max-width">
    <section class="rgpd">
      <button @click.self="back">
        &lt; Retourner à la page précédente
      </button>

      <h1 class="fotorama-title">
        Politique de<br>confidentialité
      </h1>

      <div class="rgpd-content">
        <h2 class="main-title">
          Généralités
        </h2>

        <h3 class="second-title">
          L’éditeur
        </h3>

        <p>Le site internet app.balise360.fr est créé et géré par l'agence K-Torze et présente une solution d’aide à la randonnée. Cette page internet à pour objectif de fournir aux utilisateurs l'ensemble des informations concernant la solution “Balise 360”. Les utilisateurs ont également la possibilité de renseigner leur adresse e-mail afin de recevoir par mail des offres et des actualités liées à Balise 360 et à la randonnée en général .</p>

        <h3 class="second-title">
          Lois applicables
        </h3>

        <p>Conformément au Règlement général sur la protection des données (RGPD), notre politique de confidentialité est conforme au règlement suivant.</p>
        <p>Les données à caractère personnel doivent être :</p>

        <ul>
          <li>Traitées de manière licite, loyale et transparente au regard de la personne concernée.</li>
          <li>Collectées pour des finalités déterminées, explicites et légitimes, et ne pas être traitées ultérieurement d'une manière incompatible avec ces finalités.</li>
          <li>Adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées,exactes et, si nécessaire, tenues à jour,</li>
          <li>Conservées sous une forme permettant l'identification des personnes concernées pendant une durée n'excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées.</li>
          <li>Traitées de facon à garantir une sécurité appropriée des données à caractère personnel, y compris la protection contre le traitement non autorisé ou illicite.</li>
        </ul>

        <h3 class="second-title">
          Consentement
        </h3>

        <p>En utilisant app.balise360.fr vous consentez à accepter les conditions énoncées dans la présente politique de confidentialité ainsi qu'accepter la collecte, l’utilisation et la conservation des données énumérées dans la présente politique.</p>

        <h3 class="second-title">
          Modifications
        </h3>

        <p>Cette politique de confidentialité peut être modifiée afin de maintenir la conformité avec la loi et de tenir compte de tout changement à notre processus de collecte de données. Nous vous recommandons de vérifier notre politique de confidentialité régulièrement afin d'être informé de ces dernières mise à jour.</p>

        <h2 class="main-title">
          Conditions générales d’utilisation
        </h2>

        <h3 class="second-title">
          Propriété intellectuelle
        </h3>

        <p>L'ensemble du contenu écrit, présent sur app.balise360.fr est soumis au droit d'auteur. Vous devez demander l'autorisation des éditeurs du site avant toutes, publication ou copie de ces différents contenus. Toute utilisation du contenu écrit à des fins commerciales et publicitaires est strictement interdite.</p>
        <p>Toute représentation totale ou partielle du site web app.balise360.fr par quelque procédé que ce soit, sans l’autorisation expresse de ces éditeurs constituerait une contrefaçon et est donc strictement interdites.</p>
        <p>Les illustrations et images utilisées appartiennent chacunes à leur propriétaire respectif.</p>

        <h3 class="second-title">
          Responsabilité
        </h3>

        <p> Les sources des informations diffusées sur le siteapp.balise360.fr sont fiables, mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions. Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle.</p>
        <p>Les éditeurs du site app.balise360.fr ne peuvent être tenus pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’internaute, suite à une utilisation, à l’accès, ou au téléchargement d'un fichier provenant de ce site.</p>

        <h2 class="main-title">
          Données personnelles
        </h2>

        <h3 class="second-title">
          Collecte
        </h3>

        <ul>
          <li>Si vous décidez de vous inscrire à la newsletter mise en place sur app.balise360.fr vous consentez à fournir une adresse e-mail valide. Veuillez noter que nous collectons uniquement les données nécessaires à l'inscription de notre newsletter.</li>
          <li>D’autres données sont collectées automatiquement par des services tiers lors de ce site internet. Ce sont avant tout des données techniques. La collecte de ces données est automatique dès que vous entrez sur notre site.</li>
        </ul>
        <p>Nous ne recueillerons pas de données supplémentaires sans vous en informer au préalable.</p>

        <h3 class="second-title">
          Partage
        </h3>

        <p>Nous nous engageons à ne pas vendre ou partager vos données avec des tiers, sauf dans les cas suivants :</p>
        <ul>
          <li>Si la loi l'exige,</li>
          <li>Si elle est requise pour toute procédure judiciaire,</li>
          <li>Pour prouver ou protéger nos droits légaux.</li>
        </ul>
        <p>Si vous suivez des hyperliens depuis app.balise360.fr vers d'autres sites, veuillez noter que nous ne sommes pas responsables et n’avons pas de contrôle sur leurs politiques et pratiques de confidentialité.</p>

        <h3 class="second-title">
          Protection
        </h3>

        <p>Le RGPD précise que les personnes de moins de 15 ans sont considérées comme des mineurs aux fins de la collecte de données. Les mineurs doivent avoir le consentement d’un représentant légal pour que leurs données soient recueillies, traitées et utilisées.</p>

        <h3 class="second-title">
          Mineurs
        </h3>

        <p>Le RGPD précise que les personnes de moins de 15 ans sont considérées comme des mineurs aux fins de la collecte de données. Les mineurs doivent avoir le consentement d’un représentant légal pour que leurs données soient recueillies, traitées et utilisées.</p>

        <h3 class="second-title">
          Suppression
        </h3>

        <p>Vous pouvez à tout moment nous contacter au numéro indiqué en bas de page afin de demander la suppression de vos informations personnelles.</p>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  name: 'RGPD',
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
  .rgpd{
    padding: 200px 0 280px 0;
    .fotorama-title{
      margin-bottom: 125px;
    }
    button{
      margin-bottom: 35px;
      color: var(--pale-color);
      font-size: 1.5rem;
    }
    &-content{
      max-width: 555px;
      margin: auto;
      p, li{
        line-height: 25.6px;
      }
      ul{
        margin-left: 30px;
        list-style: outside;
      }
      p ~ p, p ~ ul{
        margin-top: 25px;
      }
      li ~ li{
        margin-top: 0;
      }
      p ~ h2{
        margin-top: 120px;
      }
      p ~ h3{
        margin-top: 75px;
      }
      h2{
        margin-bottom: 75px;
        text-align: left;
      }
      .second-title{
        margin-bottom: 35px;
      }
    }
  }
</style>
