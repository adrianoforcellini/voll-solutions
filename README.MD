### Chat em Tempo Real!!!
<img src="gif.gif" alt="imagem_signup_for_free" width="1400"/>


### ReactJS + MySQL + NodeJS + Socket.io

### Como funciona?

#### A primeira coisa importante , é criar o banco de dados que iremos usar, e um usuario com privilégios, caso não o tenha.
#### Utilize os comandos abaixo em seu mysql para gerar o usuário.
#### CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'senha';
#### GRANT ALL PRIVILEGES ON * . * TO 'usuario'@'localhost';
#### FLUSH PRIVILEGES;

#### Agora, criarenis o banco de dados e tabela:
#### CREATE DATABASE Voll_soChatIo;
#### USE Voll_soChatIo;

#### CREATE TABLE messages (id INT AUTO_INCREMENT, client VARCHAR(20), message VARCHAR(250), time VARCHAR(10), PRIMARY KEY (id));

<br></br>
#### Feito isso, podemos dar inicio. Abre seu terminal e baixe essa aplicação com o comando:
#### git clone https://github.com/adrianoforcellini/voll-solutions.git
#### Entre na pasta do projeto com o comando :
#### cd voll-solutions
#### Agora adicionaremos o arquivo de configuração com o Nome do usuario MySQL e o password MySQL
#### Navegue até a pasta back end com o comando:
#### cd back-end 
#### , modifique o arquivo modelo.env trocando "usuario_mysql" pelo seu usuario e "sua_senha" pela senha que você criou.
#### Modifique então o nome do arquivo para apenas .env

#### Agora vamos instalar as dependências e iniciar o servidor:
#### npm i && npm start

####  Em outro terminal, navegue até a pasta do front ( partindo da mesma pasta onde foi baixado o projeto ),
####  e instale também as dependencias e inicie o servidor :
####  cd voll-solutions/front-end/voll-solutions/ && npm i && npm start

### Agora basta acessar http://localhost:3000/ e poderá utilizar o chat á vontade!!! Enjoy it!!!! ;D
