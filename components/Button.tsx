interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export function Button({ 
  children, 
  onClick, 
  href, 
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseStyles = "bg-[#182236] text-white px-4 py-3 rounded-lg flex items-center justify-center border border-[#748098] transition-all duration-300 hover:bg-[#2E394E] hover:border-[#8A90A0] disabled:opacity-50 disabled:cursor-not-allowed";
  
  if (href) {
    return (
      <a 
        href={href}
        className={`${baseStyles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  );
}
