import React, {useState, useEffect} from "react";
import {Container, Row, Col, Card, CardGroup, ListGroup, ListGroupItem, Dropdown} from 'react-bootstrap';

const statuses=[
  'Новый',
  'Оплачен',
  'Собирается',
  'Собран',
  'В пути',
  'Доставлен',
]

function Orders() {
  const [data, setData] = useState([]);

  const getData = async() => {
    let res = await fetch(`http://localhost:5000/getorderslist`, {method: 'GET'})
                    .then(res=>res.json())
                    .then(res=>res) 
    setData(res);
  }

  useEffect(() => {
    getData();
  }, [])

  const setOrderStatus = async(id, status) => {
    await fetch(`http://localhost:5000/setorderstatus`, {method:'POST',body: JSON.stringify({id:id,status:status})})
    getData();   
  }

  return (
    <>
      <Container>
        
		
          {data.map((item, i) => {
            return (



                  <Card>
                    <Card.Body>
					
					<table class="iksweb" width="100%">
	<tbody>
		<tr>
			<td width="10%"><img style={{width: '100px'}} src={require(`../${item.image_url}`)}/></td>
			<td width="10%"><b>Письмо:</b> <br/><span style={{color: '#0d6efd'}}>{item.order_unique_id}</span></td>
			<td width="10%"><b>Статус: <br/><span style={{color: '#198754'}}>{item.status}</span></b></td>
			<td width="10%"><b>Получатель:</b> <br/>{item.fio}</td>
			<td width="10%"><b>Контактный телефон:</b> <br/>{item.phone}</td>
			<td width="10%"><b>Тип заказа:</b> <br/>{item.type}</td>
			<td width="10%"><b>Дата:</b> <br/>{item.date}</td>
			<td width="10%"><b>Время:</b> <br/>{item.time}</td>
			<td>
			<Dropdown onChange={(e)=>console.log(e)}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Изменить статус
                        </Dropdown.Toggle>
                        <Dropdown.Menu value={item.order_unique_id}>
                          {statuses.map((a, i)=>
                            <Dropdown.Item key={i} value={a} onClick={(e)=>setOrderStatus(item.order_unique_id, e.target.text)}>{a}</Dropdown.Item>
                          )}
                        </Dropdown.Menu>
						</Dropdown>
						</td>
		</tr>
	</tbody>
</table>

						


                      <Card.Subtitle></Card.Subtitle>
                    </Card.Body>
                  </Card>
              
   
            ) 
          })}
        

      </Container>
    </>
  );
}

export default Orders;
