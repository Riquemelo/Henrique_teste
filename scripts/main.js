$(function () {
    var telaSelecionada = $("#navbarButton-Inicio");
    var gridMotorista;
    var gridPassageiro;
    var gridCorrida;

    CarregarGridMotorista();
    CarregarGridPassageiro();
    CarregarGridCorrida();
    SelectNomeMotoristaToCorrida();
    SelectNomePassageiroToCorrida();
    
    $('.maskDate').mask('00/00/0000');
    $('.maskCpf').mask('000.000.000-00', { reverse: true });
    $('.money').mask('000.000.000.000.000,00', {reverse: true});

    AlterarTela(telaSelecionada);
    
    $(".nav-item").click(function () {
        telaSelecionada = $(this);
        AlterarTela(telaSelecionada);
    });

    $('#formMotorista').submit(function (event) {
        CreateMotorista();
        event.preventDefault();
    });
    $('#formPassageiro').submit(function (event) {
        CreatePassageiro();
        event.preventDefault();
    });
    $('#formCorrida').submit(function (event) {
        CreateCorrida();
        event.preventDefault();
    });

    $("#deleteButtonMotorista").click(function () {
        if($(".checkboxExclusaoMotorista").is(":checked")){
            $('#deletarMotorista').modal('toggle');
            ConfirmarDeleteMotoristaSelecionado();
        }else{
            alert('Ops! É necessário selecionar algum campo da tabela antes');
        }
    });
    $("#deleteButtonPassageiro").click(function () {
        if($(".checkboxExclusaoPassageiro").is(":checked")){
            $('#deletarPassageiro').modal('toggle');
            ConfirmarDeletePassageiroSelecionado();
        }else{
            alert('Ops! É necessário selecionar algum campo da tabela antes');
        }
    });
    
});

//Função de Alterar Tela
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
            gridPassageiro.ajax.reload(false);
            break;
        case 'navbarButton-Corrida':
            novaTela = "#div-PageCorrida";
            gridCorrida.ajax.reload(false);
            SelectNomeMotoristaToCorrida();
            SelectNomePassageiroToCorrida();
            break;
    }
    $(".tipoTela").hide();
    $(novaTela).show();
}

//Funçoes de Select com DataTables
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
                "data": "cd_id_motorista", "render": function (value) {
                    return '<input class="checkboxExclusaoMotorista" value=' + value + ' type="checkbox">';
                }
            },
            { "data": "nm_nome_motorista" },
            { "data": "cd_data_nascimento_motorista" },
            { "data": "cd_cpf_motorista" },
            { "data": "nm_modelo_carro_motorista" },
            {
                "data": "ic_sexo_masculino_feminino_motorista", "render": function (value) {
                    if (value === "0")
                        return "Masculino";
                    else
                        return "Feminino";
                }

            },
            {
                "data": "ic_status_ativo_inativo_motorista", "render": function (value) {
                    if (value === "1")
                        return '<span class="label-StatusCheckbox">Inativo</span><label class="switch"><input type="checkbox" checked="checked" value="1"><span class="slider round"></span></label><span class="label-StatusCheckbox">Ativo</span>';
                    else
                        return '<span class="label-StatusCheckbox">Inativo</span><label class="switch"><input type="checkbox" value="0"><span class="slider round"></span></label><span class="label-StatusCheckbox">Ativo</span>';
                },
            }
        ],
        "drawCallback": function () {
            $('.switch').click(function () {
                var status = $(this).children(':first-child').val();
                var linha = $(this).parents('tr').children(':first-child').children(':first-child');
                var idLinha = linha.val();
                AlterarStatusMotorista(idLinha, status);

            });
        }
    });
}

function CarregarGridPassageiro() {
    gridPassageiro = $("#tabelaPassageiro").DataTable({
        "lengthChange": false,
        "info": false,
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "../includes/selectPassageiro.php",
            "type": "POST",
            "dataType": "JSON"
        },
        "columns": [
            {
                "data": "cd_id_passageiro", "render": function (value) {
                    return '<input class="checkboxExclusaoPassageiro" value=' + value + ' type="checkbox">';
                }
            },
            { "data": "nm_nome_passageiro" },
            { "data": "cd_data_nascimento_passageiro" },
            { "data": "cd_cpf_passageiro" },
            {
                "data": "ic_sexo_masculino_feminino_passageiro", "render": function (value) {
                    if (value === "0")
                        return "Masculino";
                    else
                        return "Feminino";
                }
            }
        ],
    });
}

function CarregarGridCorrida() { 
    gridCorrida = $("#tabelaCorrida").DataTable({
        "lengthChange": false,
        "info": false,
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "../includes/selectCorrida.php",
            "type": "POST",
            "dataType": "JSON"
        },
        "columns": [
            { "data": "nm_nome_motorista" },
            { "data": "nm_nome_passageiro" },
            {   
                "data": "vl_valor_corrida", "render": function (value){
                     return '<span class="money">R$ ' + parseFloat(value).toFixed(2) + '</span>';
                } 
            }
        ],
    });
}

//Funções de Select para Corrida
function SelectNomeMotoristaToCorrida() {
    var optionMotorista = "<option value=''>--Nome do Motorista--</option>";
    $.ajax({
        type: "POST",
        url: "../includes/selectNomeMotorista.php",
        data: "",
        dataType: 'json',
        success: function (data) {
            var nome;
            for (nome in data) {
                optionMotorista += '<option value="' + data[nome] + '">' + data[nome] + '</option>';
            }
            $('#formNomeMotoristaCorrida').html(optionMotorista);
        }
    });            
    
}

function SelectNomePassageiroToCorrida(){
    var optionPassageiro = "<option value=''>--Nome do Passageiro--</option>";
    $.ajax({
        type: "POST",
        url: "../includes/selectNomePassageiro.php",
        data: "",
        dataType: 'json',
        success: function (data) {
            var nome;
            for (nome in data) {
                optionPassageiro += '<option value="' + data[nome] + '">' + data[nome] + '</option>';
            }
            $('#formNomePassageiroCorrida').html(optionPassageiro);
        }
    });
}

//Funções de Create
function CreateMotorista() {
    //Variaveis do motorista
    var motorista = {
        'Nome': $("#formNomeMotorista").val(),
        'Nascimento': $("#formNascMotorista").val(),
        'Cpf': $("#formCpfMotorista").val(),
        'ModeloCarro': $("#formCarroMotorista").val(),
        'Sexo': parseInt($("#formSexoMotorista").val()),
        'Status': parseInt($("#formStatusMotorista").val())
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
        parseInt(motorista.Nascimento.substr(3, 2)) > 12 || parseInt(motorista.Nascimento.substr(6, 4)) > 2018 ||
        motorista.Nascimento.length != 10) {
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

    if (motorista.Sexo != 0 && motorista.Sexo != 1) {
        if (motorista.ContadorError == 0) { motorista.MensagemError += "sexo"; motorista.ContadorError++ }
        else { motorista.MensagemError += ", sexo"; motorista.ContadorError++ }
        motorista.SubmitOK = "false";
    }

    if (motorista.Status != 0 && motorista.Status != 1) {
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
        $.ajax({
            type: "POST",
            url: "../includes/cadastroMotorista.php",
            data: motorista,
            success: function () {
                $("#mensagemCadastro").html('<span style="color: green"> Dados de motorista inseridos com sucesso!</span>');
                gridMotorista.ajax.reload(false);
            }
        });

    }

    $('#adicionarMotorista').modal('toggle');

}

function CreatePassageiro() {
    //Variaveis do passageiro
    var passageiro = {
        'Nome': $("#formNomePassageiro").val(),
        'Nascimento' : $("#formNascPassageiro").val(),
        'Cpf' : $("#formCpfPassageiro").val(),
        'Sexo' : $("#formSexoPassageiro").val(),
    };
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
        parseInt(passageiro.Nascimento.substr(3, 2)) > 12 || parseInt(passageiro.Nascimento.substr(6, 4)) > 2018 ||
        passageiro.Nascimento.length != 10) {
        if (passageiro.ContadorError == 0) { passageiro.MensagemError += "data de nascimento"; passageiro.ContadorError++ }
        else { passageiro.MensagemError += ", data de nascimento"; passageiro.ContadorError++ }
        passageiro.SubmitOK = "false";
    }

    if (passageiro.Cpf == "") {
        if (passageiro.ContadorError == 0) { passageiro.MensagemError += "CPF"; passageiro.ContadorError++ }
        else { passageiro.MensagemError += ", CPF"; passageiro.ContadorError++ }
        passageiro.SubmitOK = "false";
    }

    if (passageiro.Sexo != 0 && passageiro.Sexo != 1) {
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
        $.ajax({
            type: "POST",
            url: "../includes/cadastroPassageiro.php",
            data: passageiro,
            success: function () {
                $("#mensagemCadastro").html('<span style="color: green"> Dados de passageiro inseridos com sucesso!</span>');
                gridPassageiro.ajax.reload(false);
            }
        });
        
    }

    $('#adicionarPassageiro').modal('toggle');

}

function CreateCorrida() { 
     //Variaveis da corrida
     var corrida = {
        'NomeMotorista': $("#formNomeMotoristaCorrida").val(),
        'NomePassageiro' : $("#formNomePassageiroCorrida").val(),
        'Valor' : $("#formValorCorrida").val().toString().replace(",", ".")
    };
    //Variavel de controle para apresentação de Erro
    corrida.MensagemError = "";
    corrida.ContadorError = 0;
    corrida.SubmitOK = "true";
    //Validação dos dados
    if (corrida.NomeMotorista == "") {
        if (corrida.ContadorError == 0) { corrida.MensagemError += "nome do motorista"; corrida.ContadorError++ }
        else { corrida.MensagemError += ", nome do motorista"; corrida.ContadorError++ }
        corrida.SubmitOK = "false";
    }

    if (corrida.NomePassageiro == "") {
        if (corrida.ContadorError == 0) { corrida.MensagemError += "nome do passageiro"; corrida.ContadorError++ }
        else { corrida.MensagemError += ", nome do passageiro"; corrida.ContadorError++ }
        corrida.SubmitOK = "false";
    }

    if (corrida.Valor == "") {
        if (corrida.ContadorError == 0) { corrida.MensagemError += "valor"; corrida.ContadorError++ }
        else { corrida.MensagemError += ", valor"; corrida.ContadorError++ }
        corrida.SubmitOK = "false";
    }
    //Mensagem de Erro    
    if (corrida.SubmitOK == "false") {
        if (corrida.ContadorError == 1) {
            $("#mensagemValidacaoCorrida").html('<span> Por favor, preencha corretamente o campo ' + corrida.MensagemError + '.</span>');
        }
        else {
            $("#mensagemValidacaoCorrida").html('<span> Por favor, preencha corretamente o campo ' + corrida.MensagemError + '.</span>');
        }
        return false;

    } else {
        $.ajax({
            type: "POST",
            url: "../includes/cadastroCorrida.php",
            data: corrida,
            success: function () {
                $("#mensagemCadastroCorrida").html('<span style="color: green"> Corrida inserida com sucesso!</span>');
                gridCorrida.ajax.reload(false);
            }
        });
        
    }

    $('#adicionarCorrida').modal('toggle');
}

//Função de Update
function AlterarStatusMotorista(idMotorista, statusMotorista) {
    $.ajax({
        type: "POST",
        url: "../includes/alterarMotorista.php",
        data: {
            idMotorista, statusMotorista
        },
        success: function () {
            gridMotorista.ajax.reload(false);
        }
    });
}


function ConfirmarDeleteMotoristaSelecionado() {
    var confirmarDelete = "";
    var formHidden = "";
    $('.checkboxExclusaoMotorista:checked').each(function () {
        confirmarDelete += "<span> -> " + $(this).parent('td').next().text() + "</span></br>";
        formHidden += "<input type='hidden' class='formHiddenDelete' value='"+ $(this).val() +"'/></br>";
    });
    $("#mensagemDelete").html(confirmarDelete);
    $("#div-formDeleteMotorista").html(formHidden);
    

    $("#formDeleteMotorista").submit(function(event) {
        $('.formHiddenDelete').each(function () {
            DeletarMotoristaSelecionado($(this).val());
        });
        $('#deletarMotorista').modal('toggle');
        event.preventDefault();
    });

}

function ConfirmarDeletePassageiroSelecionado(){
    var confirmarDelete = "";
    var formHidden = "";
    $('.checkboxExclusaoPassageiro:checked').each(function () {
        confirmarDelete += "<span> -> " + $(this).parent('td').next().text() + "</span></br>";
        formHidden += "<input type='hidden' class='formHiddenDelete' value='"+ $(this).val() +"'/></br>";
    });
    $("#mensagemDeletePassageiro").html(confirmarDelete);
    $("#div-formDeletePassageiro").html(formHidden);
    

    $("#formDeletePassageiro").submit(function(event) {
        $('.formHiddenDelete').each(function () {
            DeletarPassageiroSelecionado($(this).val());
        });
        $('#deletarPassageiro').modal('toggle');
        event.preventDefault();
    });
}

//Funções de Delete
function DeletarMotoristaSelecionado(idMotorista) {
    $.ajax({
        type: "POST",
        url: "../includes/deletarMotorista.php",
        data: {
            idMotorista
        },
        success: function () {
            gridMotorista.ajax.reload(false);
        }
    });
}

function DeletarPassageiroSelecionado(idPassageiro){
    $.ajax({
        type: "POST",
        url: "../includes/deletarPassageiro.php",
        data: {
            idPassageiro
        },
        success: function () {
            gridPassageiro.ajax.reload(false);
        }
    });
}