<div class="tipoTela" id="div-PageCorrida">
    <h2 align="center">Corridas</h2>
    <div align="center">
      <br>
      <!-- Opções na tela -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#adicionarCorrida">
        Adicionar Corrida
      </button>
      <button type="button" id="deleteButtonCorrida" class="btn btn-danger">
        Excluir selecionada(s)
      </button>
    </div>
    <!--Tabela de consulta dos Corridas-->
    <div id="container-TabelaCorrida" class="container">
      <div id="mensagemCadastro"><!--Mensagem de cadastro concluido--></div>
      <table id="tabelaCorrida" style="width: 100%">
      <thead>
        <tr>
          <th id="table-idCorrida"></th>
          <th id="table-nomeMotoristaCorrida">Nome do Motorista</th>
          <th id="table-nomePassageiroCorrida">Nome do Passgeiro</th>
          <th id="table-valorCorrida">Valor</th>
        </tr>
      </thead>
      </table>
    </div>
  </div>