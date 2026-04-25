const axios = require('axios');

// GitHub Actions will start the PHP server on port 8000
const API_URL = 'http://127.0.0.1:8000';

describe('LAMP API Integration Tests', () => {
    test('Login API - Invalid Credentials should return error', async () => {
        const response = await axios.post(`${API_URL}/Login.php`, {
            login: 'wronguser',
            password: 'wrongpassword'
        });

        // The PHP script always returns a 200 HTTP status, so we check the JSON payload
        expect(response.status).toBe(200);
        expect(response.data.error).toBe("No Records Found");
    });

    test('Login API - Valid Credentials should return user info', async () => {
        const response = await axios.post(`${API_URL}/Login.php`, {
            login: 'testuser',
            password: 'testpass' // Checked against plaintext since code.js currently has MD5 commented out
        });

        expect(response.status).toBe(200);
        expect(response.data.error).toBe("");
        expect(response.data.firstName).toBe("Test");
    });
});
