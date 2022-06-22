<template>
    <footer>
        <div class="footerMain">
            <figure class="ftOutdoor">

                <h4 class="ftTitle">A propos</h4>

                <p><strong>Outdoor</strong> est une application pour les randonneurs.</p>
                <p>Voyez par vous même en créant votre <router-link class="link" :to="{name: 'home'}">compte gratuit</router-link> pour constater les résultats.</p>

            </figure>
            
            <figure class="ftAdress">

                <h4 class="ftTitle">Nos locaux</h4>

                <p>2905 Place Louis R Renaud<br>Laval QC H7V 0A3 </p>
                <p>+1 (866) 661-1331</p>

            </figure>
            
            <figure class="ftSocialM">

                <h4 class="ftTitle">Réseaux Sociaux</h4>
                <p>
                    <router-link class="link" :to="{name: 'home'}">Twitter</router-link>
                </p>
                <p>
                    <router-link class="link" :to="{name: 'home'}">Facebook</router-link>
                </p>
                <p>
                    <router-link class="link" :to="{name: 'home'}">Youtube</router-link>
                </p>
                <p>
                    <router-link class="link" :to="{name: 'home'}">Linkedin</router-link>
                </p>

            </figure>

        </div>
        
        <div class="footerCopyright">
            <h4>Copyright @ Outdoor 2022. Tous droits réservés.</h4>
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
        height: 382px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F9F9F9;
    }

    .footerMain{
        height: 314px;
        display: flex;
        justify-content: space-around;
        padding-top: 60px;
        background-color: #F9F9F9;

        .ftTitle{
            font-weight: bold;
            height: 40px;
        }

    }
    
    .ftOutdoor, .ftAdress{
        max-width: 240px;
        
        p{
            line-height: 29px;
        } 
    
        p~p{
                margin-top: 30px;
            }
    }

    .ftSocialM{
        line-height: 29px;
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