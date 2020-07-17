<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <title>quiz</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
     <meta http-equiv="refresh" content="2; URL=https://rpg.house/quiz/index.php">
    <link href="https://fonts.googleapis.com/css?family=Rancho&display=swap" rel="stylesheet">
		<link rel="icon" href="img/favicon.png">
    <style>

      body {
        background-color: #ffffff;
        font-family: 'Rancho', cursive;
        color: #405060;
      }

      div.paper {
        width: 260px;
        position: fixed;
        margin: 0 auto;
        padding-bottom: 20px;
        border: 5px solid #534675;
        background-color: #ffffff;
      }

      span.titulo {
        font-size: 2.2em;
        text-align: center;
        width: 100%;
        display: block;
        margin-top: 10px;
      }

      div.box {
        margin: 10px auto 0 auto;
        width: 200px;
        font-size: 1.8em;
      }

      div.box::after {
        content: '';
        clear: both;
        height: 0;
        display: block;
      }

      div.box span.numero {
        background-color: #ddddff;
        width: 30%;
        display: block;
        float: left;
        text-align: center;
      }

      div.box span.valor {
        background-color: #eeeeff;
        color: #303090;
        margin-left: 2px;
        width: 65%;
        float: left;
        padding: 0 0 0 5px;
      }

    </style>
  </head>
  <body>

    

      <?php

        error_reporting(E_ERROR | E_PARSE);
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

        $conexao = new mysqli('127.0.0.1','linuc318_sir','linuX321','linuc318_sirlockee_db');
        mysqli_set_charset($conexao, "utf8");

        $query = $conexao->prepare("select codigo, datetime, usuario, valor, corte from posts where codigo = (select max(codigo) from posts where corte = 1)");
        $query->execute();
        $query->store_result();
        $query->bind_result($codigo, $datetime, $usuario, $valor, $corte);
        $query->fetch();

        if ($query->num_rows == 0) {
          $codigo = 0;
          $datetime = '2016-06-23 09:07:21.2-07:00';
          $usuario = 'sirlockee';
          $valor = '#1';
          $corte = 1;
        }
        $query->close();
        
        $titulo = $valor;

        $query = $conexao->prepare("select codigo, datetime, usuario, valor, corte from posts where codigo > ? order by codigo");
        $query->bind_param('i',$codigo);
        $query->execute();
        $query->store_result();
        $query->bind_result($codigo, $datetime, $usuario, $valor, $corte);

        $posts = array();
        $contador = array(
          "#1" => 0,
          "#2" => 0,
          "#3" => 0,
          "#4" => 0,
          "#5" => 0
        );

        if ($query->num_rows > 0) {
            while ($query->fetch()) {

                $post = array(
                  "codigo" => $codigo,
                  "datetime" => $datetime,
                  "usuario" => $usuario,
                  "valor" => $valor,
                  "corte" => $corte
                );

                if (array_key_exists($post["valor"], $contador)) {
                  $contador[$post["valor"]] = $contador[$post["valor"]] + 1;
                }
                
                array_push($posts,$post);

            }
        }
        
        $query->close();

        ?>

    <div class="paper">

      <span class="titulo">Cena <?= $titulo ?></span>
      <div class="box">
        <span class="numero">#1</span>
        <span class="valor"><?= $contador["#1"] ?></span>
      </div>
      <div class="box">
        <span class="numero">#2</span>
        <span class="valor"><?= $contador["#2"] ?></span>
      </div>
      <div class="box">
        <span class="numero">#3</span>
        <span class="valor"><?= $contador["#3"] ?></span>
      </div>
      <div class="box">
        <span class="numero">#4</span>
        <span class="valor"><?= $contador["#4"] ?></span>
      </div>
      <div class="box">
        <span class="numero">#5</span>
        <span class="valor"><?= $contador["#5"] ?></span>
      </div>
      
    </div>

    <script>
    </script>

  </body>
</html>
