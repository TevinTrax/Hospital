function Home() {
    return(
        <section className="border border-red-500 p-4 pt-16 bg-linear-to-br from-blue-100 via-blue-50 to-blue-100 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-blue-500">
                <div className="border border-blue-500 p-4">
                    <div className="mt-20 mb-4 border border-blue-500 rounded-full px-4 py-2">
                        <h1 className="text-sm text-center font-bold text-gray-800 mb-4">Welcome to Manilla Hospital</h1>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-6xl font-bold text-gray-800">Your Health,<span className="text-blue-500">Our Priority</span></h2>
                        <p className="max-w-2xl text-gray-600 mt-4 text-lg">
                            Experience fast, digital, and reliable healthcare. Book consultations, access lab results, manage prescriptions, and connect with top specialists — all in one premium platform.
                        </p>
                    </div>
                    <div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-transform hover:scale-105 text-md font-bold cursor-pointer">Book Appointment</button>
                        <button className="ml-4 bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded-lg transition-transform hover:scale-105 text-md font-bold cursor-pointer">Get Started</button>
                    </div>
                </div>
                <div className="border border-blue-500 p-4">Content 2</div>
            </div>
        </section>
    );
}

export default Home;