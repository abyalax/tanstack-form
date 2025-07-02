import "./App.css"
import { FormLogin } from "./example/form-login"
import { FormRegistrasi } from "./example/form-registrasi"

export default function App() {

  return (
    <main style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>Form Login</h1>
      <FormLogin />
      <h1>Form Registrasi</h1>
      <FormRegistrasi />
    </main>
  )
}