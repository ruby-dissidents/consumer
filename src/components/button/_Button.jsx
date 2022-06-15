import "./_button.styles.css"

export const Button = ({
  children,
  iconRight,
  link = false,
  className,
  ...otherProps
}) => {
  const buttonClassName = link ? "d_button d_button_link" : "d_button"

  return (
    <button className={`${buttonClassName} ${className}`} {...otherProps}>
      {children}
      {typeof iconRight !== "undefined" && iconRight}
    </button>
  )
}
