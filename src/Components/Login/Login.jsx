import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';
import { EyeSlashIcon } from '@heroicons/react/24/outline';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-gray-900 p-10 rounded-lg shadow-lg flex flex-col md:flex-row md:space-x-10">
        {/* Login Form */}
        <div className="text-white space-y-4 w-full">
          <h2 className="text-3xl font-bold">Logowanie</h2>
          <p className="text-blue-400 text-sm">ZALOGUJ SIĘ Z UŻYCIEM NAZWY KONTA</p>
          <input
            type="text"
            placeholder="Nazwa konta"
            className="w-full p-2 bg-gray-700 rounded text-white focus:outline-none"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Hasło"
              className="w-full p-2 bg-gray-700 rounded text-white focus:outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200 focus:outline-none"
            >
              {showPassword ? (
                <EyeIcon className="w-6 h-6" />
              ) : (
                <EyeSlashIcon className="w-6 h-6" />
              )}
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="rememberMe" className="h-4 w-4 mb-6" />
            <label htmlFor="rememberMe" className="text-sm mb-6">Zapamiętaj mnie</label>
          </div>
          <button className="bg-blue-600 w-full py-2 rounded-lg text-white hover:bg-blue-700 transition duration-200 mb-1">Zaloguj się</button>
          <div className="">
            <a href="#" className="text-blue-400 text-sm">Pomocy, nie mogę się zalogować</a>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="text-center mt-2">
          <p className="text-blue-400 w-full mb-4">ZALOGUJ SIĘ Z UŻYCIEM KODU QR</p>
          <div className="bg-white rounded-lg shadow-md w-60 mx-auto p-3 mt-4">
            <div className="flex justify-center">
              <img src={require('../images/qr.png')} alt="QR Code" className="h-50 w-50" />
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4">Użyj aplikacji mobilnej Steam, aby zalogować się za pomocą kodu QR.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
