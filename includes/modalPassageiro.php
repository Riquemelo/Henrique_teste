<div class="modal fade" id="adicionarPassageiro" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
        <!--Formulário para Adicionar Passageiro-->
        <form id="formPassageiro">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Adicionar Passageiro</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span>Insira os dados do passageiro abaixo:</span>
            <br/>
            <br/>
            <div id="formContainer" class="container">
              <div class="row">
                <div class="col-sm-6">
                  <input type="text" class="formCadastro" id="formNomePassageiro" placeholder="Nome">
                  <input type="text" class="formCadastro maskDate" id="formNascPassageiro" placeholder="Data de Nascimento">
                </div>
                <div class="col-sm-6">
                  <input type="text" class="formCadastro maskCpf" id="formCpfPassageiro" placeholder="CPF">
                  <select class="formCadastro formSelect" id="formSexoPassageiro" name="sexo">
                    <option value="">--Sexo--</option>
                    <option value="0">Masculino</option>
                    <option value="1">Feminino</option>
                  </select>
                  <br>
                </div>
              </div>
            </div>
            <div id="mensagemValidacao"><!--Elementos com o campo incorreto--></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="submit" class="btn btn-primary">Confirmar</button>
          </div>
        </form>
      </div>
      </div>
    </div>
    <br/>