<div class="modal fade" id="adicionarMotorista" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
        <!--Formulário para Adicionar Motorista-->
        <form id="formMotorista">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Adicionar Motorista</h5>
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
                  <input type="text" class="formCadastro" id="formNomeMotorista" placeholder="Nome">
                  <input type="text" class="formCadastro" id="formNascMotorista" placeholder="Data de Nascimento">
                  <input type="text" class="formCadastro" id="formCpfMotorista" placeholder="CPF">
                </div>
                <div class="col-sm-6">
                  <input type="text" class="formCadastro" id="formCarroMotorista" placeholder="Modelo do Carro">
                  <select class="formCadastro formSelect" id="formSexoMotorista" name="sexo">
                    <option value="">--Sexo--</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                  </select>
                  <br>
                  <select class="formCadastro formSelect" id="formStatusMotorista" name="status" aria-placeholder="Status">
                    <option value="">--Status--</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </select>
                </div>
              </div>
            </div>
            <div id="mensagemValidacao">

            </div>
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