export function FormLogin() {
    return (
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
                <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Login</h1>
                </div>

                <div className="mt-5">

                    <form>
                        <div className="grid gap-y-4">

                            {/* Campo de e-mail */}
                            <div>
                                <label className="block text-sm mb-2 dark:text-white">E-mail</label>
                                <div className="relative">
                                    <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error"></input>
                                </div>
                            </div>

                            {/* Campo de senha */}
                            <div>
                                <div className="flex justify-between items-center">
                                    <label className="block text-sm mb-2 dark:text-white">Senha</label>
                                    <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/recover-account.html">Esqueceu a senha?</a>
                                </div>
                                <div className="relative">
                                    <input type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="password-error"></input>
                                </div>
                            </div>

                            {/* Botão de submit */}
                            <button type="submit" className="w-full mt-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Entrar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}