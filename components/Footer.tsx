// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#101827] text-white py-6">
      <div className="px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-400">&copy; 2024 Quizland. All rights reserved.</p>
        </div>
        <div className="flex space-x-12">
          <Link href="/terms-and-conditions" className="font-outfit font-semibold text-base hover:text-gray-300 transition-colors duration-200">
            Terms and Conditions
          </Link>
          <Link href="/privacy-policy" className="font-outfit font-semibold text-base hover:text-gray-300 transition-colors duration-200">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
