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

	$retorno = array(
	  "titulo" => $titulo,
	  "contador" => $contador
	);
	
	header('Content-Type: application/json');
        echo json_encode($retorno, JSON_UNESCAPED_UNICODE);