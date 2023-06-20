### API EL RECETARIO
##### CREATE USER
###### REQUEST

|              |                                               |
|--------------|-----------------------------------------------|
| endpoint     | https://api-el-recetario.vercel.app/api/users |
| http request | POST                                      |
| body(json)    
```json
{
	"name": "Nestor Chambi Chinche",
	"email": "nestor@gmail.com",
	"password": "123456"
}
```
###### RESPONSE
```json
{
	"message": "Usuario añadido correctamente",
	"body": {
		"name": "Nestor Chambi Chinche",
		"rol": "user",
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDkwODkzMDEyODhhOTBhNDc2NWVlYTYiLCJpYXQiOjE2ODcxOTM5MDQsImV4cCI6MTY4NzIwODMwNH0.Lko61rdMJ4qX0cZCHRlPMhe8otBusA-dT97YZeAB8dY"
	}
}
```

##### LOGIN
###### REQUEST

|              |                                               |
|--------------|-----------------------------------------------|
| endpoint     | https://api-el-recetario.vercel.app/api/auth |
| http request | POST                                      |
| body(json)    
```json
{
	"email": "nestor@gmail.com",
	"password": "123456"
}
```
###### RESPONSE
```json
{
	"message": "Loggeado correctamente",
	"body": {
		"name": "Nestor Chambi Chinche",
		"rol": "user",
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDkwODkzMDEyODhhOTBhNDc2NWVlYTYiLCJpYXQiOjE2ODcyMDMxNTUsImV4cCI6MTY4NzIxNzU1NX0.T3J4pUzfXnN3Wv-L00SuixZM3EZ6NA4f6IWvr_M4ryA"
	}
}
```

##### CREATE RECIPE
###### REQUEST

|              |                                               |
|--------------|-----------------------------------------------|
| endpoint     | https://api-el-recetario.vercel.app/api/recipes |
| http request | POST                                      |
| header       | xtoken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDkwODkzMDEyODhhOTBhNDc2NWVlYTYiLCJpYXQiOjE2ODcyMDMxNTUsImV4cCI6MTY4NzIxNzU1NX0.T3J4pUzfXnN3Wv-L00SuixZM3EZ6NA4f6IWvr_M4ryA'
| body(json)    
```json
{
	"name": "Silpancho",
	"image": "/img/carousel/platillos.jpg",
	"punctuation": 6,
	"favorite": false,
	"time": 3,
	"difficulty": 10,
	"recommended": false,
	"category": [
		"Comida típica","Segundo"
	],
	"ingredients": [
		"carne","huevo","papa","arroz"
	],
	"process": [
		"Hervir el arroz",
		"Freir carne y huevo",
		"Servir"
	]
}
```
###### RESPONSE
