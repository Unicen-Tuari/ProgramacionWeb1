<?php
include_once 'controller/tarea_controller.php';
include_once 'config/config_app.php';


$controller = new TareaController();
if(!array_key_exists(ConfigApp::$ACTION, $_REQUEST) ||
$_REQUEST[ConfigApp::$ACTION] == ConfigApp::$ACTION_HOME){
  $controller->home();
}
else {
  switch ($_REQUEST[ConfigApp::$ACTION]) {
    case ConfigApp::$ACTION_ADD_TAREA:
      $controller->addTarea();
      break;
    case ConfigApp::$ACTION_DELETE_TAREA:
      $controller->deleteTarea();
      break;
    default:
      echo 'Pagina no esiste';
      break;
  }
}

?>
