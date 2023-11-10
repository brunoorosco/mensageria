## Mensageria usando kafka no servidor da Upstash

### Requirements

- Node.js: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/brunoorosco/mensageria.git
   ```

2. **Install dependencies:**

   ```bash
   cd mensageria/cliente
   npm install

   cd mensageria/pedido
   npm install

   cd mensageria/produto
   npm install
   ```

3. **Created .env file:**

   Set up environment variables:

   Create a .env file in the project's root directory and configure the necessary environment variables. For example:

   - Cliente

   ```bash
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/cliente?schema=public
   ```

   - Pedido

   ```bash
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/pedido?schema=public
   ```

   - Produto

   ```bash
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/produto?schema=public
   ```

4. **Execute migrations:**
   Create migrations file in the root directory /cliente, /produto and /pedido

   ```bash
   npx yarn migrate dev
   ```

- curl for create new client

```bash
curl --request POST \
  --url http://localhost:3001/customers \
  --header 'Content-Type: application/json' \
  --data '{
	"name":"User Teste",
	"email":"email@email.com",
	"phone":"(11)98997-9879",
	"password": "123456"
}'
```
