<template>
    <footer>
        <div class="footerMain">
            <figure class="ftOutdoor">

                <h4 class="ftTitle">A propos</h4>

                <p><strong>Balise 360</strong> est un concept pour les randonneurs engagés pour l’environnement.</p>
                <p>Aidez dès maintenant à contribuer au patrimoine français en créant votre compte.</p>

            </figure>
            
            <figure class="ftAdress">

                <h4 class="ftTitle">Nous contacter</h4>

                <p>Notre service après ventes :<br>+33 00 00 00 00 00</p>

            </figure>
            
            <figure class="ftSocialM">

                <h4 class="ftTitle">Réseaux Sociaux</h4>
                <p>
                    <router-link class="link" :to="{name: 'home'}">Facebook</router-link>
                </p>
                <p>
                    <router-link class="link" :to="{name: 'home'}">Instagram</router-link>
                </p>
                <p>
                    <router-link class="link" :to="{name: 'home'}">Pinterest</router-link>
                </p>
                <p>
                    <router-link class="link" :to="{name: 'home'}">Spotify</router-link>
                </p>

            </figure>

        </div>
        
        <!-- <div class="footerCopyright">
            <h4>Copyright @ K-Torze 2022. Tous droits réservés.</h4>
        </div> -->

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
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--green-color);
    }

    .footerMain{
        height: 314px;
        display: flex;
        justify-content: space-around;
        padding-top: 60px;
        .ftTitle{
            font-weight: bold;
            font-size: 1.5rem;
            height: 40px;
            color: var(--pale-color);
            font-size: 1.3125rem;
            text-transform: uppercase;

        }

    }
    
    .ftOutdoor, .ftAdress{
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
            line-height: 2.5rem;
        }
    }

    .footerCopyright{
        height: 68px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 0px) and (max-width: 768px){

        footer{
            height: 900px;
        }
        
        .footerMain{
            height: 771px;
            align-items: center;
            flex-direction: column;
        }

        .ftOutdoor,.ftAdress, .ftSocialM{
            display: flex;
            flex-direction: column;
            align-items: center;

            .ftTitle{
                font-size: 21px;

            }

            p{
                text-align: center;
            }

        }
    }





</style>