function createMotorista(){
//Variaveis do motorista
var motorista = {};
        motorista.Nome = $("#formNomeM").val();
        motorista.Nascimento = $("#formNascM").val();
        motorista.Cpf = $("#formCpfM").val();
        motorista.ModeloCarro = $("#formCarroM").val();
        motorista.Sexo = $("#formSexoM").val();
        motorista.Status = $("#formStatusM").val();
//Variavel de controle para apresentação de Erro
        motorista.MensagemError = "";
        motorista.ContadorError = 0;
        motorista.SubmitOK = "true";
//Validação dos dados
        if (motorista.Nome == "") {
            if(motorista.ContadorError == 0) {motorista.MensagemError += "nome"; motorista.ContadorError++}
            else {motorista.MensagemError += ", nome"; motorista.ContadorError++}
             
            submitOK = "false";
        }
        
        if (motorista.Nascimento == "" || parseInt(motorista.Nascimento.substr(0,2)) > 31 || 
        parseInt(N.substr(2,2)) > 12 || parseInt(motorista.Nascimento.substr(4,4)) > 2018 ||
        motorista.Nascimento.length != 8) {
            if(motorista.ContadorError == 0) {error += "data de nascimento"; motorista.ContadorError++}
            else {motorista.MensagemError += ", data de nascimento"; motorista.ContadorError++}
            submitOK = "false";
            }

        if (motorista.Cpf == "") {
            if(motorista.ContadorError == 0) {motorista.MensagemError += "CPF"; motorista.ContadorError++}
            else {motorista.MensagemError += ", CPF"; motorista.ContadorError++}
            submitOK = "false";
        }

        if (motorista.ModeloCarro == "") {
            if(motorista.ContadorError == 0) {motorista.MensagemError += "modelo do carro"; motorista.ContadorError++}
            else {motorista.MensagemError += ", modelo do carro"; motorista.ContadorError++}
            submitOK = "false";
        }
        
        if (motorista.Sexo != "Masculino" && motorista.Sexo != "Feminino") {
            if(motorista.ContadorError == 0) {motorista.MensagemError += "sexo"; motorista.ContadorError++}
            else {motorista.MensagemError += ", sexo"; motorista.ContadorError++}
            submitOK = "false";
        }

        if (motorista.Status != "Ativo" && motorista.Status != "Inativo") {
            if(motorista.ContadorError == 0) {motorista.MensagemError += "status"; motorista.ContadorError++}
            else {motorista.MensagemError += ", status"; motorista.ContadorError++}
            submitOK = "false";
        }
        if (submitOK == "false") {
            if(motorista.ContadorError == 1){
                $("#mensagemValidacao").html('<span> Por favor, preencha corretamente o campo '+ motorista.MensagemError +'.</span>')
            }
            else{
                $("#mensagemValidacao").html('<span> Por favor, preencha corretamente o campo '+ motorista.MensagemError +'.</span>')
            }
            return false;

        }else{
            motorista.Table = document.getElementById("tabelaMotorista");
            motorista.Row = motorista.Table.insertRow(motorista.Table.getElementsByTagName("tr").length - 1);
            cells = [
                motorista.Row.insertCell(0),
                motorista.Row.insertCell(1),
                motorista.Row.insertCell(2),
                motorista.Row.insertCell(3),
                motorista.Row.insertCell(4),
                motorista.Row.insertCell(5)
            ];

            cells[0].innerHTML = motorista.Nome;
            cells[1].innerHTML = motorista.Nascimento.substr(0,2) + "/" + motorista.Nascimento.substr(2,2) + "/" + motorista.Nascimento.substr(4,4); 
            cells[2].innerHTML = motorista.Cpf.substr(0,3) + "." + motorista.Cpf.substr(3,3) + "." + motorista.Cpf.substr(6,3) + "-" + motorista.Cpf.substr(9,2);
            cells[3].innerHTML = motorista.ModeloCarro;
            cells[4].innerHTML = motorista.Sexo;
            cells[5].innerHTML = motorista.Status;
        }
        $('#adicionarMotorista').modal('toggle');
        
}
function createPassageiro(){
//Variaveis do passageiro
passageiro = {};
            passageiro.Nome = $("#formNomeP").val();
            passageiro.Nascimento = $("#formNascP").val();
            passageiro.Cpf = $("#formCpfP").val();
            passageiro.Sexo = $("#formSexoP").val();
//Variavel de controle para apresentação de Erro
            passageiro.MensagemError = "";
            passageiro.ContadorError = 0;
            passageiro.SubmitOK = "true";
//Validação dos dados
            if (passageiro.Nome == "") {
                if(passageiro.ContadorError == 0) {passageiro.MensagemError += "nome"; passageiro.ContadorError++}
                else {passageiro.MensagemError += ", nome"; passageiro.ContadorError++}
                 
                passageiro.SubmitOK = "false";
            }
            
            if (passageiro.Nascimento == "" || parseInt(passageiro.Nascimento.substr(0,2)) > 31 || 
            parseInt(passageiro.Nascimento.substr(2,2)) > 12 || parseInt(passageiro.Nascimento.substr(4,4)) > 2018 ||
            passageiro.Nascimento.length != 8) {
                if(passageiro.ContadorError == 0) {passageiro.MensagemError += "data de nascimento"; passageiro.ContadorError++}
                else {passageiro.MensagemError += ", data de nascimento"; passageiro.ContadorError++}
                passageiro.SubmitOK = "false";
                }
    
            if (passageiro.Cpf == "") {
                if(passageiro.ContadorError == 0) {passageiro.MensagemError += "CPF"; passageiro.ContadorError++}
                else {passageiro.MensagemError += ", CPF"; passageiro.ContadorError++}
                passageiro.SubmitOK = "false";
            }
            
            if (passageiro.Sexo != "Masculino" && passageiro.Sexo != "Feminino") {
                if(passageiro.ContadorError == 0) {passageiro.MensagemError += "sexo"; passageiro.ContadorError++}
                else {passageiro.MensagemError += ", sexo"; passageiro.ContadorError++}
                passageiro.SubmitOK = "false";
            }
//Mensagem de Erro    
            if (passageiro.SubmitOK == "false") {
                if(passageiro.ContadorError == 1){
                    $("#mensagemValidacao").html('<span> Por favor, preencha corretamente o campo '+ passageiro.MensagemError +'.</span>');
                }
                else{
                    $("#mensagemValidacao").html('<span> Por favor, preencha corretamente o campo '+ passageiro.MensagemError +'.</span>');
                }
                return false;
    
            }else{
                passageiro.Table = document.getElementById("tabelaPassageiro");
                passageiro.Row = passageiro.Table.insertRow(passageiro.Table.getElementsByTagName("tr").length - 1);
                cells = [
                    row.insertCell(0),
                    row.insertCell(1),
                    row.insertCell(2),
                    row.insertCell(3),
                    row.insertCell(4),
                    row.insertCell(5)
                ];
    
                cells[0].innerHTML = passageiro.Nome;
                cells[1].innerHTML = passageiro.Nascimento.substr(0,2) + "/" + passageiro.Nascimento.substr(2,2) + "/" + passageiro.Nascimento.substr(4,4); 
                cells[2].innerHTML = passageiro.Cpf.substr(0,3) + "." + passageiro.Cpf.substr(3,3) + "." + passageiro.Cpf.substr(6,3) + "-" + passageiro.Cpf.substr(9,2);
                cells[3].innerHTML = passageiro.ModeloCarro;
                cells[4].innerHTML = passageiro.Sexo;
                cells[5].innerHTML = passageiro.Status;
            }
            $('#adicionarPassageiro').modal('toggle');
            
    }
    
