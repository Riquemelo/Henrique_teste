function create(){
//Variaveis do motorista
        var nome = $("#formNome").val();
        var nasc = $("#formNasc").val();
        var cpf = $("#formCpf").val();
        var carro = $("#formCarro").val();
        var sexo = $("#formSexo").val();
        var status = $("#formStatus").val();
//Variavel de controle para apresentação de Erro
        var error = "";
        var cerr = 0;
        submitOK = "true";
//Validação dos dados
        if (nome == "") {
            if(cerr == 0) {error += "nome"; cerr++}
            else {error += ", nome"; cerr++}
             
            submitOK = "false";
        }
        
        if (nasc == "" || parseInt(nasc.substr(0,2)) > 31 || 
        parseInt(nasc.substr(2,2)) > 12 || parseInt(nasc.substr(4,4)) > 2018) {
            if(cerr == 0) {error += "data de nascimento"; cerr++}
            else {error += ", data de nascimento"; cerr++}
            submitOK = "false";
            }

        if (cpf == "") {
            if(cerr == 0) {error += "CPF"; cerr++}
            else {error += ", CPF"; cerr++}
            submitOK = "false";
        }

        if (carro == "") {
            if(cerr == 0) {error += "modelo do carro"; cerr++}
            else {error += ", modelo do carro"; cerr++}
            submitOK = "false";
        }
        
        if (sexo != "Masculino" && sexo != "Feminino") {
            if(cerr == 0) {error += "sexo"; cerr++}
            else {error += ", sexo"; cerr++}
            submitOK = "false";
        }

        if (status != "Ativo" && status != "Inativo") {
            if(cerr == 0) {error += "status"; cerr++}
            else {error += ", status"; cerr++}
            submitOK = "false";
        }
        if (submitOK == "false") {
            if(cerr == 1){$("#formContainer").append('<span style="color: red"> Por favor, preencha corretamente o campo '+ error +'.</span>')}
            else{$("#formContainer").append('<span style="color: red"> Por favor, preencha corretamente o campo '+ error +'.</span>')}
            return false;

        }else{
            var table = document.getElementById("tabela");
            var row = table.insertRow(table.getElementsByTagName("tr").length - 1);
            cells = [
                row.insertCell(0),
                row.insertCell(1),
                row.insertCell(2),
                row.insertCell(3),
                row.insertCell(4),
                row.insertCell(5)
            ];

            cells[0].innerHTML = nome;
            cells[1].innerHTML = nasc.substr(0,2) + "/" + nasc.substr(2,2) + "/" + nasc.substr(4,4); 
            cells[2].innerHTML = cpf.substr(0,3) + "." + cpf.substr(3,3) + "." + cpf.substr(6,3) + "-" + cpf.substr(9,2);
            cells[3].innerHTML = carro;
            cells[4].innerHTML = sexo;
            cells[5].innerHTML = status;
        }
        $('#adicionarMotorista').modal('toggle');
        
}
