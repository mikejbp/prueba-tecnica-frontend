import { type ChangeEvent, useState, type FocusEvent } from 'react';
import { axiosPost } from '../api';
import { toast } from 'sonner';

interface UserData {
  email: string;
  password: string;
}

interface ErrorsList {
  isValid: boolean;
  errorsList: Record<string, boolean>;
  errorMessages: Record<string, string>;
}

export function Login() {
  const [loading, setLoading] = useState(false);
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

  /**
   * Validates the user input fields for email and password.
   * The email is considered valid if it matches the regular expression pattern for a standard email format.
   * The password is considered valid if it contains at least one letter, one number, and is at least 8 characters long.
   * @returns {ErrorsList} - Returns an object containing a boolean indicating if the inputs are valid, a list of errors, and corresponding error messages.
   */
  const validateInputs = (): ErrorsList => {
    const errorsList = {
      emailEmpty: userData.email.trim().length === 0,
      emailInvalid:
        userData.email.trim().length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email),
      passwordEmpty: userData.password.trim().length === 0,
      passwordInvalid:
        userData.password.trim().length > 0 &&
        !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userData.password),
    };

    const errorMessages = {
      emailEmpty: 'El email no puede estar vacío.',
      emailInvalid: 'El email no es válido.',
      passwordEmpty: 'La contraseña no puede estar vacía.',
      passwordInvalid:
        'La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número.',
    };

    return {
      isValid: Object.values(errorsList).every((error) => !error),
      errorsList,
      errorMessages,
    };
  };

  /**
   * Handles the blur event for user data input fields.
   * Validates the input fields and sets the error state if there are any errors.
   * @param {FocusEvent<HTMLInputElement>} e - The blur event from the input field.
   */
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const validation = validateInputs();
    setErrors(validation);

    const { name } = e.target;
    if (name === 'email') {
      if (validation.errorsList.emailEmpty) {
        toast.warning(validation.errorMessages.emailEmpty);
      } else if (validation.errorsList.emailInvalid) {
        toast.warning(validation.errorMessages.emailInvalid);
      }
    } else if (name === 'password') {
      if (validation.errorsList.passwordEmpty) {
        toast.warning(validation.errorMessages.passwordEmpty);
      } else if (validation.errorsList.passwordInvalid) {
        toast.warning(validation.errorMessages.passwordInvalid);
      }
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const objBody = {
        email: userData.email,
        password: userData.password,
      };

      const { isValid, errorsList, errorMessages } = validateInputs();

      if (!isValid) {
        Object.keys(errorsList).forEach((key) => {
          if (errorsList[key as keyof typeof errorsList]) {
            toast.warning(errorMessages[key as keyof typeof errorMessages]);
          }
        });

        return;
      }

      const response = await axiosPost('/login', objBody, {});
      console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error('Error al iniciar sesión. Inténtalo de nuevo.');
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
              onBlur={handleBlur}
              className="w-full h-12 px-5 text-gray-dark bg-white rounded shadow-md border-0 focus:ring-2 focus:ring-red-light"
            />
            <input
              type="password"
              name="password"
              placeholder="CONTRASEÑA"
              onChange={handleUserData}
              onBlur={handleBlur}
              className="w-full h-12 px-5 text-gray-dark bg-white rounded shadow-md border-0 focus:ring-2 focus:ring-red-light"
            />
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
