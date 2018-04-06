function create(){

        var nome = document.getElementById("formNome").value;
        var nasc = document.getElementById("formNasc").value;
        var cpf = document.getElementById("formCpf").value;
        var carro = document.getElementById("formCarro").value;
        var sexo = document.getElementById("formSexo").value;
        var status = document.getElementById("formStatus").value;
        //alert(document.querySelectorAll("input")[0].value);
        //alert(document.getElementById("formCadastro formNome").id);

        submitOK = "true";

        if (nome == "") {
            alert("campo Nome não pode ficar vazio");
            submitOK = "false";
        }
        
        if (nasc == "" || parseInt(nasc.substr(0,2)) > 31 || 
        parseInt(nasc.substr(2,2)) > 12 || parseInt(nasc.substr(4,4)) > 2018) {
            alert("campo Data de Nascimento inválido");
            submitOK = "false";
            }

        if (cpf == "") {
            alert("campo CPF inválido");
            submitOK = "false";
        }

        if (carro == "") {
            alert("campo Modelo do Carro inválido");
            submitOK = "false";
        }
        
        if (sexo != "Masculino" && sexo != "Feminino") {
            alert("campo Sexo inválido");
            submitOK = "false";
        }

        if (status != "Ativo" && status != "Inativo") {
            alert("campo status inválido");
            submitOK = "false";
        }
        if (submitOK == "false") {
            
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

            document.getElementById("formNome").value = "";
            document.getElementById("formNasc").value = "";
            document.getElementById("formCpf").value = "";
            document.getElementById("formCarro").value = "";
            document.getElementById("formSexo").value = "";
            document.getElementById("formStatus").value = "";
        }
        
}

$("#exampleModal").modal(show);
