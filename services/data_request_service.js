const http = require('./httpRequest_service');
const get = http.get;
const post = http.post;
const axios = require('axios');
const {getError} = require('../utilities/errorHandler');
const { response } = require('express');
const fileName = 'data_request_service';

const Get_building_info_by_building_id = async (buildingId) =>{
    try{
        let params = {
            buildingId:buildingId
        }
        let result = await get('http://localhost:8081/inner/data/get_building_info_by_building_id', params)
        return result;
    }catch(e){
        return getError(e,e.code,fileName, 'get_building_info_by_building_id');
    }
}

const Get_rooms_by_building_id = async (buildingId) =>{
    try{
        let params = {
            buildingId:buildingId
        }
        const response = await get('http://localhost:8081/inner/data/get_rooms_by_building_id', params);
        return response;
    }catch(e){
        console.log(e)
        return getError(e,e.code,fileName, 'get_rooms_by_building_id');
    }
}

const Get_sensors_by_building_id = async (buildingId) =>{
    try{
        let params={
            buildingId:buildingId
        }
        const response = await get('http://localhost:8081/inner/data/get_sensors_by_building_id',params);
        return response;
    }catch(e){
        return getError(e,e.code, fileName, 'get_data_by_sensor_code');
    }
}

const Get_sensors_by_room_id = async (buildingId, roomId) =>{
    try{
        let params={
            buildingId:buildingId,
            roomId:roomId
        }
        const response = await get('http://localhost:8081/inner/data/get_sensors_by_building_id',params);
        return response
    }catch(e){
        return getError(e,e.codem, fileName, 'get_data_by_sensor_code');
    }
}

const Get_room = async (buildingId, roomId) =>{
    try{
        let params = {
            buildingId: buildingId,
            roomId: roomId
        }
        const response = await get('http://localhost:8081/inner/data/get_room', params);
        return response;
    }catch(e){
        return getError(e,e.code, fileName, 'get_data_by_sensor_code');
    }
}

module.exports = {
    Get_building_info_by_building_id,
    Get_rooms_by_building_id,
    Get_sensors_by_building_id,
    Get_sensors_by_room_id,
    Get_room
}