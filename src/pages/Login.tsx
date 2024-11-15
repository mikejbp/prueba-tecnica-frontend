import { type ChangeEvent, useState } from 'react';
import { axiosPost } from '../api';
import { type ErrorsList, type HelperText, type UserData } from '../app/interfaces/login.interface';
import { validateInputs, toastRender, handleBlur } from '../app/utils';

export function Login() {
  const [loading, setLoading] = useState(false);
  const [helperText, setHelperText] = useState<HelperText>({
    key: '',
    message: '',
  });
  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<ErrorsList>({
    isValid: true,
    errorsList: {},
    errorMessages: {},
  });

  /**
   * Handles the change event for user data input fields.
   * Updates the user data state with the new value from the input field.
   * @param {ChangeEvent<HTMLInputElement>} e - The change event from the input field.
   */
  const handleUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const objBody = {
        email: userData.email,
        password: userData.password,
      };

      const { isValid, errorsList, errorMessages } = validateInputs(userData);

      if (!isValid) {
        Object.keys(errorsList).forEach((key) => {
          if (errorsList[key as keyof typeof errorsList]) {
            toastRender('warning', errorMessages[key as keyof typeof errorMessages]);
          }
        });

        return;
      }

      const response = await axiosPost('/login', objBody);
      console.log(response.data);
      toastRender('success', 'Inicio de sesión exitoso.');
    } catch (error) {
      console.log(error);
      toastRender('error', 'Error al iniciar sesión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="login"
      className="bg-white min-h-screen w-screen flex items-center justify-between"
    >
      <aside className="hidden lg:flex lg:w-[50vw] 2xl:w-[45vw] min-h-screen bg-red-light relative overflow-hidden">
        <div className="absolute inset-0">
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full"
          >
            <path
              d="M0,160L80,200C160,240,320,320,480,320C640,320,800,240,960,160C1120,80,1280,0,1440,0L1440,320L0,320Z"
              fill="white"
              className="opacity-10"
            />
            <path
              d="M0,120L60,160C120,200,240,280,360,280C480,280,600,200,720,120C840,40,960,0,1080,0C1200,0,1320,40,1380,60L1440,80L1440,320L0,320Z"
              fill="white"
              className="opacity-20"
            />
            <path
              d="M0,80L40,120C80,160,160,240,240,240C320,240,400,160,480,80C560,0,640,0,720,0C800,0,880,40,960,80C1040,120,1120,160,1200,160C1280,160,1360,120,1400,100L1440,80L1440,320L0,320Z"
              fill="white"
              className="opacity-30"
            />
          </svg>
        </div>
        <div className="absolute bg-white rounded-full p-14 left-1/2 2xl:left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/logo.svg" alt="Decorative" className="w-40 h-40" />
        </div>
      </aside>

      <aside className="mx-auto max-w-lg px-5 sm:px-10 w-full">
        <div className="flex h-fit flex-col gap-8 justify-center">
          <div className="flex items-center gap-5">
            <div className="bg-red-light w-2 h-10" />
            <h1 className="text-[25px] font-gibson font-semibold text-gray-darker uppercase">
              Bienvenido
            </h1>
          </div>

          <div className="flex gap-2 flex-col">
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              onChange={handleUserData}
              onBlur={(e) => handleBlur(e, userData, setErrors, setHelperText)}
              className="w-full h-12 px-5 text-gray-dark bg-white rounded shadow-md border-0 focus:ring-2 focus:ring-red-light"
            />
            {helperText.key.includes('email') && (
              <p className="text-red-light text-md leading-5">{helperText.message}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="CONTRASEÑA"
              onChange={handleUserData}
              onBlur={(e) => handleBlur(e, userData, setErrors, setHelperText)}
              className="w-full h-12 px-5 text-gray-dark bg-white rounded shadow-md border-0 focus:ring-2 focus:ring-red-light"
            />
            {helperText.key.includes('password') && (
              <p className="text-red-light text-md leading-5">{helperText.message}</p>
            )}
          </div>

          <div className="flex justify-end">
            <button className="text-sm text-gray-600 hover:text-red-light">
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <div className="flex justify-center mx-auto">
            <button
              onClick={handleLogin}
              disabled={loading || !errors.isValid}
              className="bg-blue disabled:bg-blue-lightest uppercase rounded-full font-openSans w-96 max-w-48 h-14 shadow-[0px_3px_6px] shadow-blue-light text-lightWhite font-bold"
            >
              {loading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
          </div>

          <div className="flex justify-center mx-auto">
            <p className="text-gray-darkest font-openSans text-sm uppercase">
              Aún no tengo cuenta <button className="text-blue-dark uppercase">Registrarse</button>
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}
