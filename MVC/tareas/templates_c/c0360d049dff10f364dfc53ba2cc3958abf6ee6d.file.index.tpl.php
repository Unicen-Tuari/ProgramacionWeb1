<?php /* Smarty version Smarty-3.1.14, created on 2015-08-27 01:07:14
         compiled from "./templates/index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:55136894055de373547e535-95485489%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c0360d049dff10f364dfc53ba2cc3958abf6ee6d' => 
    array (
      0 => './templates/index.tpl',
      1 => 1440630431,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '55136894055de373547e535-95485489',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_55de37354b3cf7_71683646',
  'variables' => 
  array (
    'tareas' => 0,
    'tarea' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_55de37354b3cf7_71683646')) {function content_55de37354b3cf7_71683646($_smarty_tpl) {?><!DOCTYPE html>
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
            <?php  $_smarty_tpl->tpl_vars['tarea'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['tarea']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['tareas']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['tarea']->key => $_smarty_tpl->tpl_vars['tarea']->value){
$_smarty_tpl->tpl_vars['tarea']->_loop = true;
?>
              <li><?php echo $_smarty_tpl->tpl_vars['tarea']->value;?>

              <a class="glyphicon glyphicon-trash" href="index.php?action=delete_tarea&task=<?php echo $_smarty_tpl->tpl_vars['tarea']->value;?>
"></a>
              </li>
            <?php } ?>
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
<?php }} ?>