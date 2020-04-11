
### QueryParams
Ex `users?name=nome do usuário`
```Js
  .get('/users/', (request, response) => {
    const data = request.query
    return response.json({})
  });
```

### PathParams (Route Params)
Ex `/user/1`

```Js
  .get('/users/:id',(request, response) => {
    const data = request.params
    return response.json({})
  });
```

### Body Request

```Js
  .post('/users', (request, response) => {
    const data = request.body
    return response.json({})
  });
```
