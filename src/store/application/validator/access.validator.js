import * as Yup from 'yup'

export const ValidateAccess = Yup.object().shape({
    email: Yup.string()
        .required('E-mail é obrigatório!')
        .test('emailIsValid', 'E-mail com formato inválido.', value => {
            if (!value) {
                return
            }
            return (/\S+@\S+\.\S+/).test(value)
        }),
    password: Yup.string()
        .min(8, 'Mínimo de 8 caracteres.')
        .required('Senha é obrigatória!')
        .test('passwordIsValid', 'Senha com formato inválido.', value => {
            if (!value) {
                return
            }
            return (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/).test(value)
        })
})