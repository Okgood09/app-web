import * as Yup from 'yup'

export const ValidateCreateUser = Yup.object().shape({
    name: Yup.string()
        .required('Nome é obrigatório!'),

    email: Yup.string()
        .required('E-mail é obrigatório!')
        .test(
            'emailIsValid',
            'E-mail com formato inválido.',
            value => {
                if (!value) return
                return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(value)
            }),

    password: Yup.string()
        .min(8, 'Mínimo de 8 caracteres.')
        .required('Senha é obrigatória!')
        .test(
            'passwordIsValid',
            'Senha com formato inválido.',
            value => {
                if (!value) return
                return (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/).test(value)
            }),

    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'A senhas são incompatíveis!')
        .required('Confirmação de senha é obrigatório!')

})