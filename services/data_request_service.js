const http = require('./httpRequest_service');
const get = http.get;
const post = http.post;

const get_data_by_building_code = async () =>{
    const response = await get('http://localhost:8081/inner/data/get_data_by_building_code')
    return response;
}

const get_data_by_room_code = async () =>{
    const response = await get('http://localhost:8081/inner/data/get_data_by_room_code')
    return response;
}

const get_data_by_sensor_code = async () =>{
    const response = await get('http://localhost:8081/inner/data/get_data_by_sensor_code')
    return response;
}

module.exports = {
    Get_data_by_building_code: get_data_by_building_code,
    Get_data_by_room_code: get_data_by_room_code,
    Get_data_by_sensor_code: get_data_by_sensor_code
}