export default function Footer() {
    return (
        <footer className="bg-secondary-green text-gray-200 text-dark-green pb-20 rounded-t-3xl">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Top Section */}
                <div className="flex flex-wrap justify-between items-start">
                    {/* Logo and Description */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">iloveplants</h2>
                        <p className="text-sm">Your trusted partner in delivering top-notch services and products.</p>
                    </div>

                    {/* Links */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-start md:justify-start">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:underline">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="w-full md:w-1/3 flex justify-start md:justify-end space-x-4">
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-green hover:bg-primary-green"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f text-white"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-green hover:bg-primary-green"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter text-white"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-green hover:bg-primary-green"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram text-white"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-green hover:bg-primary-green"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in text-white"></i>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-black/20 border-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <p className="text-sm text-primary-green/80">&copy; 2025 FIREBIT.in. All rights reserved.</p>
                    <ul className="flex space-x-6 text-sm text-primary-green-400">
                        <li>
                            <a href="#" className="hover:text-gray-100">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-100">
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
