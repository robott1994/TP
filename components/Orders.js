import React, {useState} from "react";
import {Container, Row, Col, Form, Button, Card, CardGroup, ListGroup, ListGroupItem, Dropdown} from 'react-bootstrap';

function Orders() {
  const [id, setId] = useState('');
  const [data, setData] = useState([]);

  const getData = async() => {
    if (id !== '') {
      let res = await fetch(`http://localhost:5000/getorder`, {
                        method: 'POST',
                        body: JSON.stringify({
                          id: id,
                        })
                      })
                      .then(res=>res.json())
                      .then(res=>res) 
      setData(res);
    }
  }

  return (
    <>
      <Container>
        <Form style={{marginTop: '30px'}}>
          <Row>
            <Col md={{span: 3, offset: 4}}>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Введите номер отправления" value={id} onChange={(e)=>setId(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={{span: 1}}>
              <Button onClick={()=>getData()}>Проверить</Button>
            </Col>
          </Row>
        </Form>

        {data.map((item, i) => {
          return i === 0 ? (
              <Card>
                    <Card.Body>
					
					<table class="iksweb" width="100%">
	<tbody>
		<tr>
			<td width="10%"><img style={{width: '100px'}} src={require(`../${item.image_url}`)}/></td>
			<td width="10%"><b>Письмо:</b> <br/><span style={{color: '#0d6efd'}}>#{item.order_unique_id}</span></td>
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
                        
						</Dropdown>
						</td>
		</tr>
	</tbody>
</table>

						


                      <Card.Subtitle></Card.Subtitle>
                    </Card.Body>
                  </Card>
          ) : null
        })}

      </Container>
    </>
  );
}

export default Orders;
