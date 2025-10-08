import React from 'react';
import './Button.css';

function Button({ 
    children,
    variant = 'primary',
    size = 'medium',
    onClick = null,
    disabled = false,
    loading = false,
    icon = null,
    iconPosition = 'left',
    fullWidth = false,
    className = '',
    type = 'button',
    ...props
}) {
    const handleClick = (e) => {
        if (disabled || loading) return;
        if (onClick) onClick(e);
    };

    const baseClasses = `btn-custom btn-${variant} btn-${size}`;
    const widthClass = fullWidth ? 'btn-full-width' : '';
    const loadingClass = loading ? 'btn-loading' : '';
    const disabledClass = disabled ? 'btn-disabled' : '';
    
    const buttonClasses = [
        baseClasses,
        widthClass,
        loadingClass,
        disabledClass,
        className
    ].filter(Boolean).join(' ');

    const renderIcon = () => {
        if (!icon) return null;
        
        return (
            <span className={`btn-icon btn-icon-${iconPosition}`}>
                {icon}
            </span>
        );
    };

    const renderLoadingSpinner = () => {
        if (!loading) return null;
        
        return (
            <span className="btn-spinner">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeDasharray="31.416" 
                        strokeDashoffset="31.416"
                        className="spinner-circle"
                    />
                </svg>
            </span>
        );
    };

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={handleClick}
            disabled={disabled || loading}
            {...props}
        >
            {iconPosition === 'left' && renderIcon()}
            {renderLoadingSpinner()}
            
            <span className="btn-content">
                {children}
            </span>
            
            {iconPosition === 'right' && renderIcon()}
        </button>
    );
}

export default Button;
