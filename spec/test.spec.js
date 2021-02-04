const request = require("request")

describe("get data requests", () =>{
    let get_data_by_building_code = {}
    let get_data_by_room_code = {}
    let get_data_by_sensor_code = {}
    

    beforeAll((done) =>{
        request.get("http://localhost:8080/web/data/get_data_by_building_code",(error,response,body) =>{
            get_data_by_building_code.status = response.statusCode
            done()
        })
    })
    it("status 200", () =>{
        expect(get_data_by_building_code.status).toBe(200)
    })


    beforeAll((done) =>{
        request.get("http://localhost:8080/web/data/get_data_by_room_code",(error,response,body) =>{
            get_data_by_room_code.status = response.statusCode
            done()
        })
    })
    it("status 200", () =>{
        expect(get_data_by_room_code.status).toBe(200)
    })


    beforeAll((done) =>{
        request.get("http://localhost:8080/web/data/get_data_by_sensor_code",(error,response,body) =>{
            get_data_by_sensor_code.status = response.statusCode
            done()
        })
    })
    it("status 200", () =>{
        expect(get_data_by_sensor_code.status).toBe(200)
    })
})