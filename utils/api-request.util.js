import axios from 'axios';

const updateWhatsappStatus = async (phone, whatsappConnected) => {
    try {
        const url = `${process.env.BASE_URL}/user/updateWhatsappConnectionStatus`;
        console.log('updateWhatsappStatus is running ... : ' + url)
        await axios.post(url, {
            phone,
            whatsappConnected
        }, {
            headers: { Authorization: process.env.API_KEY }
        })

    } catch (error) {
        console.log(error.message)
        throw error;
    }
}


export { updateWhatsappStatus }
