import "./App.css"
// import { PeoplePage } from "./example"
import { FormLogin } from "./example/login/form-login"
import { FormRegistrasi } from "./example/register/form-registrasi"

export default function App() {

  return (
    <main style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Form Login</h1>
      <FormLogin />
      <h1>Form Registrasi</h1>
      <FormRegistrasi />


      {/* <PeoplePage /> */}
    </main>
  )
}