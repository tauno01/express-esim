# express-esim

<pre>
create database studentdb;
use studentdb;
create table student(
    id_student int primary key,
    firstName varchar(45),
    lastName varchar(45)
);
insert into student values(1, 'Joku', 'Taalasmaa');
insert into student values(1, 'Joku1', 'Taalasmaa1');

create user studentAdmin@'localhost' identified by 'studentPass';
grant all on studentdb.* to studentAdmin@'localhost';
</pre>