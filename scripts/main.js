$(function () {
    var telaSelecionada = $("#navbarButton-Inicio");
    var gridMotorista;

    AlterarTela(telaSelecionada);

    $(".nav-item").click(function () {
        telaSelecionada = $(this);
        AlterarTela(telaSelecionada);
    });
    $('#formMotorista').submit(function (event) {
        createMotorista();
        event.preventDefault(); //Prevent the default submit
    });

    CarregarGridMotorista();

});

function AlterarTela(novaTelaSelecionada) {
    var novaTela;
    $(".nav-item").removeClass('active');
    novaTelaSelecionada.addClass('active');

    switch (novaTelaSelecionada.attr('id')) {
        default:
        case 'navbarButton-Inicio':
            novaTela = "#div-PageInicial";
            break;

        case 'navbarButton-Motorista':
            novaTela = "#div-PageMotorista";
            gridMotorista.ajax.reload(false);
            break;
        case 'navbarButton-Passageiro':
            novaTela = "#div-PagePassageiro";
            break;
        case 'navbarButton-Corrida':
            novaTela = "#div-PageCorrida";
            break;
    }
    $(".tipoTela").hide();
    $(novaTela).show();
}

function CarregarGridMotorista() {
    gridMotorista = $("#tabelaMotorista").DataTable({
        "lengthChange": false,
        "info": false,
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "../includes/selectMotorista.php",
            "type": "POST",
            "dataType": "JSON"
        },
        "columns": [
            {
                "render": function () {
                    return '<input class="checkboxExclusao" type="checkbox">';
                }
            },
            { "data": "nm_nome_motorista" },
            { "data": "cd_data_nascimento_motorista" },
            { "data": "cd_cpf_motorista" },
            { "data": "nm_modelo_carro_motorista" },
            { "data": "ic_sexo_masculino_feminino_motorista" },
            {
                "data": "ic_status_ativo_inativo_motorista", "render": function (value) {
                    if (value === "Ativo")
                        return '<label class="switch"><input type="checkbox" checked="checked"><span class="slider round"></span></label>';
                    else
                        return '<label class="switch"><input type="checkbox"><span class="slider round"></span></label>';
                }
            }
        ],
        "drawCallback": function () {
            $('.switch').click(function () {
                debugger;
                //alert($(this).rows('.selected').data);
            });
        }
    });
}

function createMotorista() {
    //Variaveis do motorista
    var motorista = {
        'Nome': $("#formNomeMotorista").val(),
        'Nascimento': $("#formNascMotorista").val(),
        'Cpf': $("#formCpfMotorista").val(),
        'ModeloCarro': $("#formCarroMotorista").val(),
        'Sexo': $("#formSexoMotorista").val(),
        'Status': $("#formStatusMotorista").val()
    };
    //Variavel de controle para apresentação de Erro
    motorista.MensagemError = "";
    motorista.ContadorError = 0;
    motorista.SubmitOK = "true";
    //Validação dos dados
    if (motorista.Nome == "") {
        if (motorista.ContadorError == 0) { motorista.MensagemError += "nome"; motorista.ContadorError++ }
        else { motorista.MensagemError += ", nome"; motorista.ContadorError++ }

        motorista.SubmitOK = "false";
    }

    if (motorista.Nascimento == "" || parseInt(motorista.Nascimento.substr(0, 2)) > 31 ||
        parseInt(motorista.Nascimento.substr(2, 2)) > 12 || parseInt(motorista.Nascimento.substr(4, 4)) > 2018 ||
        motorista.Nascimento.length != 8) {
        if (motorista.ContadorError == 0) { motorista.MensagemError += "data de nascimento"; motorista.ContadorError++ }
        else { motorista.MensagemError += ", data de nascimento"; motorista.ContadorError++ }
        motorista.SubmitOK = "false";
    }

    if (motorista.Cpf == "") {
        if (motorista.ContadorError == 0) { motorista.MensagemError += "CPF"; motorista.ContadorError++ }
        else { motorista.MensagemError += ", CPF"; motorista.ContadorError++ }
        motorista.SubmitOK = "false";
    }

    if (motorista.ModeloCarro == "") {
        if (motorista.ContadorError == 0) { motorista.MensagemError += "modelo do carro"; motorista.ContadorError++ }
        else { motorista.MensagemError += ", modelo do carro"; motorista.ContadorError++ }
        motorista.SubmitOK = "false";
    }

    if (motorista.Sexo != "Masculino" && motorista.Sexo != "Feminino") {
        if (motorista.ContadorError == 0) { motorista.MensagemError += "sexo"; motorista.ContadorError++ }
        else { motorista.MensagemError += ", sexo"; motorista.ContadorError++ }
        motorista.SubmitOK = "false";
    }

    if (motorista.Status != "Ativo" && motorista.Status != "Inativo") {
        if (motorista.ContadorError == 0) { motorista.MensagemError += "status"; motorista.ContadorError++ }
        else { motorista.MensagemError += ", status"; motorista.ContadorError++ }
        motorista.SubmitOK = "false";
    }
    if (motorista.SubmitOK == "false") {
        if (motorista.ContadorError == 1) {
            $("#mensagemValidacao").html('<span> Por favor, preencha corretamente o campo ' + motorista.MensagemError + '.</span>')
        }
        else {
            $("#mensagemValidacao").html('<span> Por favor, preencha corretamente o campo ' + motorista.MensagemError + '.</span>')
        }
        return false;

    } else {
        // motorista.Table = document.getElementById("tabelaMotorista");
        // motorista.Row = motorista.Table.insertRow(motorista.Table.getElementsByTagName("tr").length - 1);
        // cells = [
        //     motorista.Row.insertCell(0),
        //     motorista.Row.insertCell(1),
        //     motorista.Row.insertCell(2),
        //     motorista.Row.insertCell(3),
        //     motorista.Row.insertCell(4),
        //     motorista.Row.insertCell(5)
        // ];

        // cells[0].innerHTML = motorista.Nome;
        // cells[1].innerHTML = motorista.Nascimento.substr(0, 2) + "/" + motorista.Nascimento.substr(2, 2) + "/" + motorista.Nascimento.substr(4, 4);
        // cells[2].innerHTML = motorista.Cpf.substr(0, 3) + "." + motorista.Cpf.substr(3, 3) + "." + motorista.Cpf.substr(6, 3) + "-" + motorista.Cpf.substr(9, 2);
        // cells[3].innerHTML = motorista.ModeloCarro;
        // cells[4].innerHTML = motorista.Sexo;
        // cells[5].innerHTML = motorista.Status;

        $.ajax({
            type: "POST",
            url: "../includes/cadastroMotorista.php",
            data: motorista,
            success: function () {
            }
        });

    }

    $('#adicionarMotorista').modal('toggle');
}

function createPassageiro() {
    //Variaveis do passageiro
    passageiro = {};
    passageiro.Nome = $("#formNomePassageiro").val();
    passageiro.Nascimento = $("#formNascPassageiro").val();
    passageiro.Cpf = $("#formCpfPassageiro").val();
    passageiro.Sexo = $("#formSexoPassageiro").val();
    //Variavel de controle para apresentação de Erro
    passageiro.MensagemError = "";
    passageiro.ContadorError = 0;
    passageiro.SubmitOK = "true";
    //Validação dos dados
    if (passageiro.Nome == "") {
        if (passageiro.ContadorError == 0) { passageiro.MensagemError += "nome"; passageiro.ContadorError++ }
        else { passageiro.MensagemError += ", nome"; passageiro.ContadorError++ }

        passageiro.SubmitOK = "false";
    }

    if (passageiro.Nascimento == "" || parseInt(passageiro.Nascimento.substr(0, 2)) > 31 ||
        parseInt(passageiro.Nascimento.substr(2, 2)) > 12 || parseInt(passageiro.Nascimento.substr(4, 4)) > 2018 ||
        passageiro.Nascimento.length != 8) {
        if (passageiro.ContadorError == 0) { passageiro.MensagemError += "data de nascimento"; passageiro.ContadorError++ }
        else { passageiro.MensagemError += ", data de nascimento"; passageiro.ContadorError++ }
        passageiro.SubmitOK = "false";
    }

    if (passageiro.Cpf == "") {
        if (passageiro.ContadorError == 0) { passageiro.MensagemError += "CPF"; passageiro.ContadorError++ }
        else { passageiro.MensagemError += ", CPF"; passageiro.ContadorError++ }
        passageiro.SubmitOK = "false";
    }

    if (passageiro.Sexo != "Masculino" && passageiro.Sexo != "Feminino") {
        if (passageiro.ContadorError == 0) { passageiro.MensagemError += "sexo"; passageiro.ContadorError++ }
        else { passageiro.MensagemError += ", sexo"; passageiro.ContadorError++ }
        passageiro.SubmitOK = "false";
    }
    //Mensagem de Erro    
    if (passageiro.SubmitOK == "false") {
        if (passageiro.ContadorError == 1) {
            $("#mensagemValidacao").html('<span> Por favor, preencha corretamente o campo ' + passageiro.MensagemError + '.</span>');
        }
        else {
            $("#mensagemValidacao").html('<span> Por favor, preencha corretamente o campo ' + passageiro.MensagemError + '.</span>');
        }
        return false;

    } else {
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
        cells[1].innerHTML = passageiro.Nascimento.substr(0, 2) + "/" + passageiro.Nascimento.substr(2, 2) + "/" + passageiro.Nascimento.substr(4, 4);
        cells[2].innerHTML = passageiro.Cpf.substr(0, 3) + "." + passageiro.Cpf.substr(3, 3) + "." + passageiro.Cpf.substr(6, 3) + "-" + passageiro.Cpf.substr(9, 2);
        cells[3].innerHTML = passageiro.ModeloCarro;
        cells[4].innerHTML = passageiro.Sexo;
        cells[5].innerHTML = passageiro.Status;
    }

    $('#adicionarPassageiro').modal('toggle');

}
function salvarDados(nomeMotorista, dataNascimentoMotorista, cpfMotorista, modeloCarroMotorista, sexoMotorista, statusMotorista) {

}