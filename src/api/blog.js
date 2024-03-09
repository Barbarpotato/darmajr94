/**
 * Fetches all blogs from the specified URL using basic authentication.
 *
 * @return {Promise} A promise that resolves to the JSON representation of the response.
 */
export const getAllBlogs = async () => {

    const username = import.meta.env.VITE_USERNAME;
    const password = import.meta.env.VITE_PASSWORD;
    const url = `${import.meta.env.VITE_INFERNO_ENDPOINT}/blogs/all`;

    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

    const response = await fetch(url, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

/**
 * Send a contact message using the provided request body.
 *
 * @param {Object} reqBody - The request body for the message -> {name, email, message}
 * @return {Promise<Object>} A promise that resolves to the JSON response from the server
 */
export const sendContactMessage = async (reqBody) => {

    const url = `${import.meta.env.VITE_INFERNO_ENDPOINT}/form/contact_us`;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}