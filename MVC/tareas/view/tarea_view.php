<?php
include_once 'libs/Smarty.class.php';

class TareaView {

  private $smarty;

  function __construct(){
    $this->smarty = new Smarty();
  }

  function mostrar($tareas){
    $this->smarty->assign('tareas', $tareas);
    $this->smarty->display('index.tpl');
  }

}
 ?>
