const express = require('express')
const router = express.Router();

router.get('/get_data_by_building_code', (req,res) =>{
    res.send('showing data by building code');
})

router.get('/get_data_by_room_code',(req,res) =>{
    res.send('showing data by room code');
})

router.get('/get_data_by_sensor_code',(req,res) =>{
    res.send('showing data by sensor code');
})

module.exports = router;