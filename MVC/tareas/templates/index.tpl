<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  </head>

  <body>
    <div class="container">
      <div class="page-header">
        <h1>Lista de Tareas</h1>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label class="control-label" for="nombre">Tarea</label>
          <ul class="list-group">
            {foreach $tareas as $tarea}
              <li>{$tarea}
              <a class="glyphicon glyphicon-trash" href="index.php?action=delete_tarea&task={$tarea}"></a>
              </li>
            {/foreach}
          </ul>
        </div>
      </div>
      <form method="POST" action="index.php?action=add_tarea">
        <div class="form-group">
          <label for="task">Tarea</label>
          <input type="text" class="form-control" id="task" name="task" placeholder="Tarea">
        </div>
        <button type="submit" class="btn btn-default">Agregar</button>
      </form>
    </div>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
