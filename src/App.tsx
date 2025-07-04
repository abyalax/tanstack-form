import "./App.css"
// import { FormLogin as FormLoginC } from "./context-pattern/example/login/form-login"
// import { FormRegistrasi as FormRegistrasiC } from "./context-pattern/example/register/form-registrasi"

import { FormLogin } from "./factory-pattern/example/login/form-login"

// import { FormPage } from "./from-docs"

export default function App() {

  return (
    <main style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

      <h1>Factory Pattern</h1>
      <h2>Form Login</h2>
      <FormLogin />

      {/* <h1>Context Pattern</h1>
      <h2>Form Login</h2>
      <FormLoginC />
      <h2>Form Registrasi</h2>
      <FormRegistrasiC /> */}

      {/* <FormPage /> */}
    </main>
  )
}