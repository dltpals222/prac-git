const data = {
  "EVSE 1": [
      {
          "charger_type": "급속",
          "connector_id": 1,
          "set_flow": 10,
          "connector_type": "DC콤보",
          "charger_status": "사용 가능"
      },
      {
          "charger_type": "급속",
          "connector_id": 1,
          "set_flow": 10,
          "connector_type": "DC차데모",
          "charger_status": "사용 가능"
      }
  ],
  "EVSE 2": [
      {
          "charger_type": "완속",
          "connector_id": 2,
          "set_flow": 20,
          "connector_type": "AC단상",
          "charger_status": "사용 가능"
      },
      {
          "charger_type": "완속",
          "connector_id": 2,
          "set_flow": 40,
          "connector_type": "AC단상",
          "charger_status": "사용 가능"
      }
  ],
  "EVSE 3": [
      {
          "charger_type": "완속",
          "connector_id": 2,
          "set_flow": 20,
          "connector_type": "cCCS1",
          "charger_status": "사용 가능"
      },
      {
          "charger_type": "완속",
          "connector_id": 2,
          "set_flow": 40,
          "connector_type": "cCCS2",
          "charger_status": "사용 가능"
      }
  ]
}

function createTr(evse_data){
  let result = '';
  if(typeof evse_data === 'object'){
    let evse_num = Object.keys(evse_data)
    let data = Object.values(evse_data)
      for(let evse_idx = 0; evse_idx < data.length; evse_idx++){
          for(let conn_idx = 0; conn_idx < data[evse_idx].length; conn_idx++){
              const {charger_status, charger_type, connector_id, connector_type, set_flow} = data[evse_idx][conn_idx];
              if(evse_idx === 1){
                  result += `1`
              }
          }
      }
  }
  return result
}

const test = createTr(data)

console.log(test)