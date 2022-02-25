import swal from 'sweetalert';

export const successModal = (title = 'Enviado!', message = 'Se ha enviado tu mensaje') => {
    swal({
        title: title,
        text: message,
        icon: "success",
        button: "Aceptar",
        timer: 2000,
        closeOnEsc: true,
        className: 'modal'
    });
}

export const errorModal = (title = 'Lo sentimos!', message = 'No se ha podido enviar tu mensaje') => {
    swal({
        title: title,
        text: message,
        icon: "error",
        button: "Aceptar",
        timer: 2000,
        closeOnEsc: true,
        className: 'modal'
    });
}

export const errorModalServiceUnavailable = (title = 'Error!', message = 'Ha ocurrido un error inesperado, disculpa') => {
    swal({
        title: title,
        text: message,
        icon: "error",
        button: "Aceptar",
        timer: 2000,
        closeOnEsc: true,
        className: 'modal'
    });
}