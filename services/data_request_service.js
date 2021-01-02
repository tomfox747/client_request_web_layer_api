const http = require('./httpRequest_service');
const get = http.get;
const post = http.post;
const {getError} = require('../utilities/errorHandler')
const fileName = 'data_request_service';

const get_data_by_building_code = async () =>{
    try{
        const response = await get('http://localhost:8081/inner/data/get_data_by_building_code')
        return response;
    }catch(e){
        return getError(e,e.code,fileName, 'get_data_by_building_code');
    }
}

const get_data_by_room_code = async () =>{
    try{
        const response = await get('http://localhost:8081/inner/data/get_data_by_room_code')
        return response;
    }catch(e){
        return getError(e,e.code,fileName, 'get_data_by_room_code');
    }
}

const get_data_by_sensor_code = async () =>{
    try{
        const response = await get('http://localhost:8081/inner/data/get_data_by_sensor_code')
        return response;
    }catch(e){
        return getError(e,e.code, fileName, 'get_data_by_sensor_code');
    }
}

module.exports = {
    Get_data_by_building_code: get_data_by_building_code,
    Get_data_by_room_code: get_data_by_room_code,
    Get_data_by_sensor_code: get_data_by_sensor_code
}