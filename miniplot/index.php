<!DOCTYPE html>
<html lang="pt-BR">
   <head>
       <meta charset="UTF-8">
       <title>rpg.house</title>
       <link rel="stylesheet" type="text/css" href="../css/style.css">
       <link rel="shortcut icon" href="../img/favicon.png">
       <link rel="icon" href="../img/favicon.png">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link href="https://fonts.googleapis.com/css?family=Wendy+One" rel="stylesheet">
   </head>
<body class="miniplot">

   <header>
       <img class="logo" src="../img/miniplot-logo.png" />
   </header>

   <main>
       <!-- https://meublogderpg.wordpress.com/2014/07/14/ficha-de-personagem-dd-5e-em-portugues/ -->
       <span>Ficha D&D 5ª edição em Português</span>
       <p>
           <a href="ficha_dnd5_portugues.pdf">Download da ficha D&D 5ªed (em Português)</a>
           <br />
           Este ficha foi criada por Johny Robert, disponível no blog <a href="https://meublogderpg.wordpress.com/2014/07/14/ficha-de-personagem-dd-5e-em-portugues/">meublogderpg</a>.
       </p>

       <span>Ficha Tormenta 20</span>
       <p>
           <a href="https://rpg.house/tormenta.pdf">Download da ficha Tormenta 20 (PDF editável)</a>
           <br />
           PDF editável da ficha do jogador baseada no Playtest 1.1 do Tormenta 20.
       </p>

       <span>Fichas dos personagens</span>
       <table>
           <tr>
               <th>Descrição</th>
               <th>Sistema</th>
               <th>Ficha</th>
           </tr>
           <?php
                // Belqueder, Meio-orc, Fighter Lv1 | D&D 5ªed.pdf
                $arquivos = array_diff(scandir("fichas"), array('..', '.', '.DS_Store'));
                foreach ($arquivos as $key => $nome_completo) {
                    $nome = explode (".", $nome_completo)[0];
                    $trechos = explode ("|", $nome);
                    echo "<tr>";
                    echo "<td>" . trim($trechos[0]) . "</td>";
                    echo "<td>" . trim($trechos[1]) . "</td>";                    
                    echo "<td><a href=\"fichas/$nome_completo\" target=\"_blank\"><img src=\"../img/icon-download.png\" alt=\"Download\" /></a></td>";
                    echo "</tr>";
                }
           ?>
       </table>
   </main>

   <footer>
       <img src="../img/sirlockee.png"/>
   </footer>

</body>
</html>
