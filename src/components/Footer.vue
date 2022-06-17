<template>
    <footer>
        <div class="footerMain">
            <figure class="ftLogo">
                <p>Site crée par l'agence</p>
                <img src="@/assets/footerLogo.png" alt="">
            </figure>
            
            <figure class="ftOutdoor">

                <h4 class="ftTitle">Outdoor</h4>

                <p>L'équipe</p>
                <p> Notre projet</p>
                <p>Les fonctionnalités</p>

            </figure>
            
            <figure class="ftAdress">

                <h4 class="ftTitle">Notre adresse</h4>

                <p>3 Rte d'Opme</p>
                <p>63450 Chanonat</p>
                <p>France</p>

            </figure>
            
            <figure class="ftSocialM">
                <img src="@/assets/fb.png" alt="">
                <img src="@/assets/insta.png" alt="">
                <img src="@/assets/you.png" alt="">

                <h4></h4>

            </figure>

        </div>
        
        <div class="footerCopyright">
            <h4>©2022 GrounDesk. All right reserved</h4>
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

    .footerMain{
        height: 314px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #F9F9F9;

        .ftTitle{
            font-weight: bold;
        }

        .ftLogo{
            width: 190px;
            height: 170px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between ;
        }

        .ftOutdoor, .ftAdress{
            width: 150px;
            height: 168px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: column;
        }

    }

    .footerCopyright{
        height: 68px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}


</style>