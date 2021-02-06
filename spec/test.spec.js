const request = require("request")
const {get, post} = require("../services/httpRequest_service")

describe("get data requests --- ", () =>{
    let get_building_info_by_building_id = {}
    let get_rooms_by_building_id = {}
    let get_sensors_by_building_id = {}
    let get_room = {}
 
    beforeAll((done) =>{
        request.get("http://localhost:8080/web/data/get_building_info_by_building_id",(error,response,body) =>{
            get_building_info_by_building_id.status = response.statusCode
            done()
        })
    })
    it("get building info by building id", () =>{
        expect(get_building_info_by_building_id.status).toBe(200)
    })


    beforeAll((done) =>{
        request.get("http://localhost:8080/web/data/get_rooms_by_building_id",(error,response,body) =>{
            get_rooms_by_building_id.status = response.statusCode
            done()
        })
    })
    it("get rooms by building id", () =>{
        expect(get_rooms_by_building_id.status).toBe(200)
    })


    beforeAll((done) =>{
        request.get("http://localhost:8080/web/data/get_sensors_by_building_id",(error,response,body) =>{
            get_sensors_by_building_id.status = response.statusCode
            done()
        })
    })
    it("get sensors by building id", () =>{
        expect(get_sensors_by_building_id.status).toBe(200)
    })

    beforeAll((done) =>{
        request.get("http://localhost:8080/web/data/get_room",(error,response,body) =>{
            get_room.status = response.statusCode
            done()
        })
    })
    it("get room",() =>{
        expect(get_room.status).toBe(200)
    })
})