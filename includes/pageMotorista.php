<div class="tipoTela" id="div-PageMotorista">
    <h2 align="center">Motoristas</h2>
    <div align="center">
      <br>
      <!-- Opções na tela -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#adicionarMotorista">
        Adicionar Motorista
      </button>
      <button type="button" class="btn btn-danger">Excluir selecionados</button>
    </div>

    <?php include "../includes/modalMotorista.php"?>
        
    <!--Tabela de consulta dos Motoristas-->
    <div id="container-TabelaMotorista" class="container">
      <div id="mensagemCadastro"></div>
      <table id="tabelaMotorista" style="width:100%">
      <thead>
        <tr>
          <th>Excluir</th>
          <th>Nome</th>
          <th>Data de Nasc.</th>
          <th>CPF</th>
          <th>Modelo do Carro</th>
          <th>Sexo</th>
          <th>Status</th>
        </tr>
        </thead>
      </table>
    </div>
  </div>