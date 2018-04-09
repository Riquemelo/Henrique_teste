<div class="tipoTela" id="div-PagePassageiro">
    <h2 align="center">Passageiros</h2>
    <div align="center">
      <br>
      <!-- Opções na tela -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#adicionarPassageiro">
        Adicionar Passageiro
      </button>
      <button type="button" id="deleteButtonPassageiro" class="btn btn-danger">
        Excluir selecionados
      </button>
    </div>
    <!--Tabela de consulta dos Passageiros-->
    <div id="container-TabelaPassageiro" class="container">
      <div id="mensagemCadastro"><!--Mensagem de cadastro concluido--></div>
      <table id="tabelaPassageiro" style="width: 100%">
      <thead>
        <tr>
          <th id="table-idPassageiro"></th>
          <th id="table-nomePassageiro">Nome</th>
          <th id="table-dataNascimentoPassageiro">Data de Nascimento</th>
          <th id="table-cpfPassageiro">CPF</th>
          <th id="table-sexoPassageiro">Sexo</th>
        </tr>
      </thead>
      </table>
    </div>
  </div>