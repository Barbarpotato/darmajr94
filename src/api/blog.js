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