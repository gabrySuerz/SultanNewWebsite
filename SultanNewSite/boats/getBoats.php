<?

    $oldFile = $_PUT['oldfile'];
    $newFile = $_PUT['newfile'];

    updateInternationalBoats($oldFile, $newFile);

    function updateInternationalBoats($oldFile, $newFile) {
        file_put_contents($oldFile, $newFile);
    }

?>
