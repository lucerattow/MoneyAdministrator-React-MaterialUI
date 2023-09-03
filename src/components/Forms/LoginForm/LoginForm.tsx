import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup'
// recursos locales
import { routeHome } from "@/routes"
import { useAppContext } from '@/hooks'
import { userLogin } from "@/api"
// componentes
import { LoadingButton } from "@mui/lab"
import { InputText, InputPassword } from "@/components"
// logica del componente
import { LoginFormInput, validationSchema } from "./LoginForm.Validations"

export const LoginForm = () => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const navigate = useNavigate()
  const { setUser } = useAppContext()
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormInput>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    setLoading(true)
    const loggedUser = await userLogin(data.email, data.password)
    if (loggedUser) {
      setUser(loggedUser)
      navigate(routeHome)
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        name="email"
        label="Correo Electrónico"
        control={control}
        errors={errors}
        autoComplete="email"
        autoFocus
      />
      <InputPassword
        name="password"
        label="Contraseña"
        control={control}
        errors={errors}
        autoComplete="current-password"
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        loading={loading}
        style={{ marginTop: '20px' }}
      >
        Iniciar sesión
      </LoadingButton>
    </form>
  )
}

export default LoginForm
