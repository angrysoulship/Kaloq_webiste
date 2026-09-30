// Temporary distribution-channel switch.
// To restore signup, set this to true and change CARD_SIGNUP_HREF back to
// the card.kaloq.com HTTPS URL.
export const CARD_SIGNUP_ENABLED = false;

export const CARD_SIGNUP_HREF = "#card-signup-disabled";

export function isCardSignupHref(href: string) {
  return href === "#card-signup-disabled";
}
