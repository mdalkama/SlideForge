import { BASE_URL } from "../constants";
/**
 * API functions to interact with the backend for generating presentations and rendering slides.
 * Uses the Fetch API to make requests to the backend server.
 */
async function postJSON(url, body) {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) {
    // Throw an error with backend message if available
    const msg = data?.message || res.statusText;
    const error = new Error(msg);
    error.status = res.status;
    error.details = data;
    throw error;
  }
  return data;
}

export function generatePresentationPlan(payload) {
  return postJSON('/presentation/generate-presentation-plan', payload);
}

export function renderSlides(payload) {
  return postJSON('/slide/render-slides', payload);
}
