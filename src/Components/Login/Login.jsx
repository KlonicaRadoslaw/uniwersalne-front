import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-gray-900 p-10 rounded-lg shadow-lg flex flex-col md:flex-row md:space-x-10">
        {/* Login Form */}
        <div className="text-white space-y-4 w-64">
          <h2 className="text-3xl font-bold">Logowanie</h2>
          <p className="text-blue-400">ZALOGUJ SIĘ Z UŻYCIEM NAZWY KONTA</p>
          <input
            type="text"
            placeholder="Nazwa konta"
            className="w-full p-2 bg-gray-700 rounded text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Hasło"
            className="w-full p-2 bg-gray-700 rounded text-white focus:outline-none"
          />
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="rememberMe" className="h-4 w-4" />
            <label htmlFor="rememberMe" className="text-sm">Zapamiętaj mnie</label>
          </div>
          <button className="bg-blue-600 w-full py-2 rounded-lg text-white hover:bg-blue-700 transition duration-200">Zaloguj się</button>
          <a href="#" className="text-blue-400 text-sm">Pomocy, nie mogę się zalogować</a>
        </div>

        {/* QR Code Section */}
        <div className="text-center mt-8 md:mt-0">
          <p className="text-blue-400">LUB ZALOGUJ SIĘ Z UŻYCIEM KODU QR</p>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="path/to/qr-code.png" alt="QR Code" className="h-32 w-32" />
          </div>
          <p className="text-gray-400 text-sm mt-2">Użyj aplikacji mobilnej Steam, aby zalogować się za pomocą kodu QR.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
