import React from "react";

const sizeClasses = {
  txtMontserratItalicRegular30: "font-montserrat font-normal italic",
  txtMontserratRomanBold28: "font-bold font-montserrat",
  txtPublicSansMedium16: "font-medium font-publicsans",
  txtMontserratRomanBold48Black900: "font-bold font-montserrat",
  txtMontserratRomanBold100: "font-bold font-montserrat",
  txtMontserratRomanBold48: "font-bold font-montserrat",
  txtPublicSansSemiBold14: "font-publicsans font-semibold",
  txtManropeBold40: "font-bold font-manrope",
  txtMontserratRomanBold48Indigo500: "font-bold font-montserrat",
  txtMontserratRomanBold64: "font-bold font-montserrat",
  txtSignikaNegativeSemiBold16Black900: "font-semibold font-signikanegative",
  txtManropeRegular20: "font-manrope font-normal",
  txtMontserratRomanBold40: "font-bold font-montserrat",
  txtSignikaNegativeRegular16Black900: "font-normal font-signikanegative",
  txtSignikaLight14: "font-light font-signika",
  txtManropeMedium24: "font-manrope font-medium",
  txtMontserratRomanRegular20Gray100: "font-montserrat font-normal",
  txtSignikaNegativeMedium13: "font-medium font-signikanegative",
  txtMontserratRomanRegular20: "font-montserrat font-normal",
  txtPublicSansRegular12: "font-normal font-publicsans",
  txtPublicSansRegular14: "font-normal font-publicsans",
  txtPublicSansRegular14Gray900: "font-normal font-publicsans",
  txtMontserratRomanSemiBold24: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold22: "font-montserrat font-semibold",
  txtSignikaNegativeRegular16Gray800: "font-normal font-signikanegative",
  txtSignikaNegativeSemiBold16Gray800: "font-semibold font-signikanegative",
  txtSignikaNegativeSemiBold16: "font-semibold font-signikanegative",
  txtMontserratRomanRegular20Indigo900: "font-montserrat font-normal",
  txtSignikaNegativeRegular16Gray400: "font-normal font-signikanegative",
  txtPublicSansRegular14Bluegray300: "font-normal font-publicsans",
  txtSignikaLight14Gray400: "font-light font-signika",
  txtMontserratRomanBold64Black900: "font-bold font-montserrat",
  txtSignikaNegativeRegular16: "font-normal font-signikanegative",
  txtPublicSansRegular14Bluegray600: "font-normal font-publicsans",
  txtPublicSansSemiBold14Blue500: "font-publicsans font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
