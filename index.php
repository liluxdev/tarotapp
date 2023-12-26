<html>
    <head>    
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-162544583-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());

            // gtag('config', 'UA-162544583-1');
            gtag('config', 'UA-162544583-1', {'anonymize_ip': true});

        </script>
        <script src="underscore.min.js?v=1"></script>
        <script src="jquery.min.js?v=2"></script>
                <script src="jquery.flip.js?v=2"></script>
                <script src="wSelect.min.js"></script>

        <script src="seedrandom.min.js?v=1"></script>
        <script src="main.js?v=10"></script>
        <style>
             @import url("wSelect.css");
             @import url("style.css?v=10");
        </style>
        <!-- Primary Meta Tags -->
<title>Online TAROT table - Tavolo dei Tarocchi online - FREE</title>
<meta name="title" content="Online TAROT table - Tavolo dei Tarocchi online - FREE">
<meta name="description" content="APP IN FASE DI SVIULUPPO - ANTEPRIMA ">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://esoterika.it/apps/tarot">
<meta property="og:title" content="Online TAROT table - Tavolo dei Tarocchi online - FREE">
<meta property="og:description" content="APP IN FASE DI SVIULUPPO - ANTEPRIMA ">
<meta property="og:image" content="https://esoterika.it/apps/tarot/og-graph1.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://esoterika.it/apps/tarot">
<meta property="twitter:title" content="Online TAROT table - Tavolo dei Tarocchi online - FREE">
<meta property="twitter:description" content="APP IN FASE DI SVIULUPPO - ANTEPRIMA ">
<meta property="twitter:image" content="https://esoterika.it/apps/tarot/og-graph1.png">
    </head>
    <body>

        <!--<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>-->
        <!-- esoterika -->
       <!-- <ins class="adsbygoogle first"
             style="display:block"
             data-ad-client="ca-pub-4746971679749461"
             data-ad-slot="6803195152"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        -->


   <div class="topoptions">
            <div class="faboptions">
            <select  onchange="location.href='https://'+location.hostname+location.pathname+'?deck='+this.value">
                <option value="">Select a deck / Seleziona un mazzo</option>
                <option <?php echo ($_GET["deck"]=="ananke") ? "selected":"";?>  value="ananke">The Path of Ananke Tarots (Kingu Havoc and Siria del Sublime)</option>
                <option <?php echo ($_GET["deck"]=="rwpop1910") ? "selected":"";?> value="rwpop1910">Raider Waite 1910</option>
                <option <?php echo ($_GET["deck"]=="rwbw") ? "selected":"";?>  value="rwbw">Raider Waite B/W</option>
                <option <?php echo ($_GET["deck"]=="marseilles") ? "selected":"";?>  value="marseilles">Marseille</option>
                <option <?php echo ($_GET["deck"]=="dva01") ? "selected":"";?>  value="dva01">Doren Virtue - Oracolo delle Risposte degli Angeli</option>
                           <option <?php echo ($_GET["deck"]=="dvamc") ? "selected":"";?>  value="dvamc">Doren Virtue - Arcangelo Michele</option>
 <option <?php echo ($_GET["deck"]=="iching") ? "selected":"";?>  value="iching">iChing - only numbers</option>
 <option <?php echo ($_GET["deck"]=="lotto") ? "selected":"";?>  value="lotto">Lotto - only numbers</option>
 <option <?php echo ($_GET["deck"]=="goddessguidance") ? "selected":"";?>  value="goddessguidance">Goddess guidance</option>
 <option <?php echo ($_GET["deck"]=="stedivination") ? "selected":"";?>  value="stedivination">Personal (ste)</option>

            </select>
            <br/>
          <!--  <button style=" font-size:2.3vh; height: 5vh;"
                    onClick="tarotDeck.pickOneCard();"
                    class="button">Estrai/Pick</button>-->
            <button style=" font-size:2.3vh; height: 5vh;"
                    onClick="tarotDeck.startShuffling();"
                    class="button shuffleBtn">Mischia/Shuffle</button>
                    <br/>
                       <button style=" font-size:2.3vh; height: 5vh;"
                    onClick="tarotDeck.discardMinor();"
                    class="button">Discard minor</button>
                    <br/>
                       <button style=" font-size:2.3vh; height: 5vh;"
                    onClick="tarotDeck.discardMajor();"
                    class="button">Discard major</button>
                    <br/>
            <button style=" font-size:2.3vh; height: 5vh;"
                    onClick="tarotDeck.cut();"
                    class="button">Spacca/Cut</button>
                    <br/>
            <button style="font-size:2.3vh; height: 5vh;"
                    onClick="tarotDeck.filpAllCards();"
                    class="button">Volta/Flip</button>
                    <br/>
                         <button style="font-size:2.3vh; height: 5vh;"
                    onClick="tarotDeck.redeck();"
                    class="button">Re-deck</button>
        </div>
        </div>
     

        <div class="tarotTable"></div>
        <div class="readingTable">drag cards here to read</div>

        <script>
    tarotDeck.currentDeck = "<?php echo $_GET["deck"];?>";        
    tarotDeck.initCards();
        </script>


     
    </body>
    
        <script>
        $('select').wSelect();
        </script>
</html>
