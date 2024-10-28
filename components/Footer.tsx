// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#101827] text-white py-8">
      <div className="max-w-[1090px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-400">&copy; 2024 Quizland. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <Link href="/terms-and-conditions" className="font-outfit font-semibold text-base hover:text-gray-300">
            Terms of Use
          </Link>
          <Link href="/privacy-policy" className="font-outfit font-semibold text-base hover:text-gray-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
