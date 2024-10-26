// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="py-8 text-center text-sm text-gray-500">
        <div className="space-x-6">
          <a href="#terms" className="hover:underline">Terms of use</a>
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
        </div>
        <p className="mt-4">&copy; 2024 Quizland.app</p>
      </footer>
    );
  }
  