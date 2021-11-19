import Vue from "vue";

//let apiUrl = process.env.VUE_APP_API_URL;

export default {
  /* fetchYoutubeData(body) {
        console.log("BODY",body)
        
        let headers = {
            "Content-Type": "application/json",
        };
        return Vue.http
            .post(`${apiUrl}/channel/search/` , body, {
                headers: headers
            })
            .then(
                response => {
                    console.log("API service response 1",response)
                    return response.data;
                },
                response => {
                    console.log("API service response 2",response)
                    return response.data.error;
                }
            );
    }, */

   fetchYoutubeData(body){
       console.log("BODYYYYY",body)
        
        return Vue.http
            .post(`http://168.120.9.113:5001/channel/search/`, body)
            
            .then(
                response => {
                    let obj = {
                        body: response.data,
                        status: response.status
                    }
                    console.log("Response 1",response)
                    return obj;
                },
                response => {
                    let obj = {
                        body: response.data,
                        status: response.status
                    }
                    console.log("Response 2",response)
                    return obj;
                }
            );
    }, 

};
