const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbze482FfMYgT0MbDllysEZDwNmpp0gzWYUgmpAm2GCtiJaFiLbCG1apy6vX_x_rOSVBpQ/exec";

export async function submitEnquiry(payload) {
  if (
    !APPS_SCRIPT_URL ||
    APPS_SCRIPT_URL === "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"
  ) {
    throw new Error("Google Apps Script URL is not configured yet.");
  }

  const response = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      ...payload,
      submittedAt: new Date().toISOString(),
    }),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || result?.success === false) {
    throw new Error(result?.error || "Unable to submit enquiry right now.");
  }

  return result;
}
