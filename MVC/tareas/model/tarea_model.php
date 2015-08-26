<?php

class TareaModel {
  private $tareas;

  function __construct(){
    $this->tareas = array('Tarea 1', 'Tarea 2', 'Tarea 3');
  }

  function getTareas(){
    return $this->tareas;
  }

  function addTarea($tarea){
    array_push($this->tareas, $tarea);
  }

  function deleteTarea($tarea){
    foreach ($this->tareas as $indice => $value) {
      if($tarea == $value){
        unset($this->tareas[$indice]);
      }
    }
  }
}



?>
