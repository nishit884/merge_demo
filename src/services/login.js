async function checkLogin (username,password){
    var requestBody = {
        "apiType": "login",
        "password": password,
        "username": username
    }
    try {
        const res = await fetch('https://stockzai.com/api/user/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });
        const result = await res.json();
        return result;
    }
    catch (error) {
        return error;
    }
}
export {checkLogin};