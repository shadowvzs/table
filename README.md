# table
Angular 6 - My first mini app

Used:
**image based on ubuntu**
- docker-ce 
- apache
- php 7.2
- nodejs 8+
- npm 3+
- angular cli 6+
- mc
- nano
- ssh

:)



# How to test it?

First of all i advice read this:
- what is docker? https://www.docker.com/what-docker
- when and why use it? https://www.linode.com/docs/applications/containers/when-and-why-to-use-docker/
- Why this demo is in docker image? Because you can test in exactly same enviroment like me.
- What is Docker Volumes with external folder (only optional) https://docs.docker.com/storage/volumes/

## Download
Docker image, bash file, source file (docker volume only optional), everything what needed is there.
- https://drive.google.com/open?id=1Wis33I5xsvzHDuYKjEieWLqkdpsV7WtP



##Description
_main read me you can see the read me in google drive so i talk a bit about the structure_
- at me default docker ip was 172.17.0.2 and docker foward port 80 and 4200
_if you use dockerip/db.php you access apache, if you use dockerip:4200/home then it is angular_
- project is in /home/shadowvzs/table folder 
_here was inited the angular cli/node etc_
- database test was created with apache but because port is domain we have CORS issue 
_so in php i resolve this issue and angular can access without problem the apache2 php file with different port_
- apache2 with nodejs not the best practice for docker but this is only presentation so it is ok
_for microservice you must separate everything to different containers_



Youtube: https://www.youtube.com/watch?v=YkZJEbi_e3A
[![Angular video](http://img.youtube.com/vi/YkZJEbi_e3A/0.jpg)](http://www.youtube.com/watch?v=YkZJEbi_e3A)
