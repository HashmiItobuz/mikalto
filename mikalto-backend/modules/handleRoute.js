import fs from 'fs';
const data = JSON.parse(fs.readFileSync("./dataBase/apiData.json"));
import { getFormDetails } from './getFormDetails.js';

export const handleRoutes = (request) => {
    try {
        if (request.url === '/') {
            return JSON.stringify({
                text: "Sucessfull"
            });
        } else if (request.url === '/pageBanner') {
            return JSON.stringify({
                data: data.heroSection,
                message:"Hero Section Data",
                success:true
            })
        } else if (request.url === '/welcome') {
            return JSON.stringify({
                data: data.welcomeSection,
                message:"Welcome Section Data",
                success:true
            });
        } else if (request.url === '/showRooms') {
            return JSON.stringify({
                data: data.roomSection,
                message: "Showrooms Section Data",
                success:true
            });
        } else if (request.url === '/activities') {
            return JSON.stringify({
                data: data.activiteSection,
                message:"Activities Section Data",
                success:true
            });
        } else if (request.url === "/experience") {
            return JSON.stringify({
                data: data.experienceSection,
                message: "Experience Section Data",
                success: true
            });
        } else if (request.url === "/hello") {
            return JSON.stringify({
                data: data.helloSection,
                message: "Hello Section Data",
                success: true
            });
        } else if (request.url === "/review") {
            return JSON.stringify({
                data: data.reviewSection,
                message: "Review Section Data",
                success: true
            });
        } else if (request.url === "/wellness") {
            return JSON.stringify({
                data: data.wellnessSection,
                message:"Wellness Section Data",
                success:true
            });
        } else if (request.url === "/formData") {
            getFormDetails(request);
        } else {
            return JSON.stringify({
                data: null,
                message: "Page not found!",
                success: false
            });
        }
    } catch (error) {
        console.log(error);
    }
}