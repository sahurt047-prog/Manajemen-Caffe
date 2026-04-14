declare module "react-google-recaptcha" {
  import type { ComponentType } from "react";

  type ReCAPTCHAProps = {
    sitekey: string;
    onChange?: (token: string | null) => void;
    theme?: "light" | "dark";
  };

  const ReCAPTCHA: ComponentType<ReCAPTCHAProps>;
  export default ReCAPTCHA;
}
