<!--Conteudo Page Passageiro-->
<div class="tipoTela" id="div-PagePassageiro">
    <h2 align="center">Passageiros</h2>
    <div align="center">
      <br>
      <!-- Opções na tela -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#adicionarPassageiro">
        Adicionar Passageiro
      </button>
      <button type="button" class="btn btn-danger">Excluir selecionados</button>
    </div>
    <!-- Modal para Adicionar Passageiro-->
    <div class="modal fade" id="adicionarPassageiro" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
        <!--Formulário para Adicionar Passageiro-->
        <form>
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Adicionar Passageiro</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span>Insira os dados do motorista abaixo:</span>
            <br/>
            <br/>

            <div id="formContainer" class="container">
              <div class="row">
                <div class="col-sm-6">
                  <input type="text" class="formCadastro" id="formNomePassageiro" placeholder="Nome">
                  <input type="text" class="formCadastro" id="formNascPassageiro" placeholder="Data de Nascimento">
                </div>
                <div class="col-sm-6">
                  <input type="text" class="formCadastro" id="formCpfPassageiro" placeholder="CPF">
                  <select class="formCadastro formSelect" id="formSexoPassageiro" name="sexo">
                    <option value="">--Sexo--</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                  </select>
                  <br>
                </div>
              </div>
            </div>
            <div id="mensagemValidacao">

            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" onclick="createPassageiro()">Confirmar</button>
          </div>
        </form>
      </div>
      </div>
    </div>
    <br/>
    <!--Tabela de consulta dos Passageiros-->
    <table id="tabelaPassageiro" border="1" align="center">
      <tr>
        <th>Nome</th>
        <th>Data de Nasc.</th>
        <th>CPF</th>
        <th>Sexo</th>
      </tr>
      <tr>
        <td>saduhsaudhas</td>
        <td>00/11/2222</td>
        <td>222.333.444-55</td>
        <td>Masculino</td>
      </tr>
    </table>
  </div>