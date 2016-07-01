<?
    $connessione_db='mysql:host=localhost;dbname=sultan';
    try{
            $db = new PDO($connessione_al_server, 'root','');
        }
        catch(PDOException $e){
            echo 'Errore nella creazione della PDO';
        }
        return json_encode();
?>
