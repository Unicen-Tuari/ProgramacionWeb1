<?php
include_once 'view/tarea_view.php';
include_once 'model/tarea_model.php';

class TareaController {
  private $view;
  private $model;

  function __construct(){
   $this->model = new TareaModel();
   $this->view = new TareaView();
  }

  function home(){
   $this->view->mostrar($this->model->getTareas());
  }

  function addTarea(){
    if(isset($_REQUEST['task'])){
      if(substr_count(strtoupper($_REQUEST['task']),"ME GUSTARIA") == 0){
        $this->model->addTarea($_REQUEST['task']);
      }
    }
    $this->home();
  }

  function deleteTarea(){
    if(isset($_REQUEST['task'])){
      $this->model->deleteTarea($_REQUEST['task']);
    }
    $this->home();
  }


}
?>
