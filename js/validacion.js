function validacionUsuario(){
    Swal.fire({
            title: 'Ingrese su nombre de usuario',
            input: 'text',
            inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Debe ingresar su usuario!: ${error}`
              )
            })
        }
    })
}

validacionUsuario();
