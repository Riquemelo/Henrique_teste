<div class="tipoTela" id="div-PageMotorista">  

    <h2 align="center">Motoristas</h2>
    <div align="center">
      <br>
      <!-- Opções na tela -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#adicionarMotorista">
        Adicionar Motorista
      </button>
      <button type="button" id="deleteButtonMotorista" class="btn btn-danger">
        Excluir selecionados
      </button>
    </div>
        
    <!--Tabela de consulta dos Motoristas-->
    <div id="container-TabelaMotorista" class="container">
      <div id="mensagemCadastro"><!--Mensagem de cadastro concluido--></div>
      <table id="tabelaMotorista" style="width:100%">
      <thead>
        <tr>
          <th id="table-idMotorista"></th>
          <th id="table-nomeMotorista">Nome</th>
          <th id="table-nascimentoMotorista">Data de Nasc.</th>
          <th id="table-cpfMotorista">CPF</th>
          <th id="table-modeloCarroMotorista">Modelo do Carro</th>
          <th id="table-sexoMotorista">Sexo</th>
          <th id="table-statusMotorista">Status</th>
        </tr>
        </thead>
      </table>
    </div>
  </div>