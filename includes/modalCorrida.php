<div class="modal fade" id="adicionarCorrida" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
        <!--Formulário para Adicionar Corrida-->
        <form id="formCorrida">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Adicionar Corrida</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span>Insira os dados da corrida abaixo:</span>
            <br/>
            <br/>
            <div id="formContainer" class="container">
              <div class="row">
                <div class="col-sm-6">
                <select class="formCadastro">
                  <option value="">--Nome do Motorista--</option> 
                    <div id="formNomeMotoristaCorrida">      
                      <!--Valores puxados do banco-->
                    </div> 
                </select>
                R$<input type="text" class="formCadastro money" id="formValorCorrida" placeholder="Valor">
                </div>
                <div class="col-sm-6">
                <select class="formCadastro" id="formNomePassageiroCorrida" >
                  <option value="">--Nome do Passageiro--</option> 
                    <div id="formNomePassageiroCorrida">      
                      <!--Valores puxados do banco-->
                    </div> 
                </select>
                    
                  <br>
                </div>
              </div>
            </div>
            <div id="mensagemValidacaoCorrida"><!--Elementos com o campo incorreto--></div>
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