$(document).ready(function () {
  $("#tel").mask("(00) 0 0000-0000", {
    placeholder: "(51) 9 9999-9999",
  });

  $("#form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
      },
      tel: {
        required: true,
      },
    },

    submitHandler: function (form) {
      alert("Mensagem Enviada!");
      form.reset();
    },

    invalidHandler: function (form, validator) {
      alert("Por favor, preencha os campos para prosseguir!");
    },
  });
});
