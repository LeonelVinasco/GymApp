# Models
npx sequelize-cli model:generate --name User --attributes id:numeric,name:string,password:string,admin:boolean,email:string,gym:numeric

npx sequelize-cli model:generate --name Gym --attributes id:numeric,name:string,city:numeric

npx sequelize-cli model:generate --name City --attributes cod:numeric,name:string

create database gymdb_development;
drop database gymdb_development
drop database gymdb_test
select * from Users;
select * from Cities;
select * from Gyms;
use gymdb_test;
use gymdb_development;