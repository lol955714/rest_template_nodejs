mkdir -p backup
docker run --name mariadbata -p 3306:3306 -v /backup:/var/lib/mysql -e MARIADB_ROOT_PASSWORD=moy -e MARIADB_USER=moy -e MARIADB_PASSWORD=moy -d mariadb
docker exec -it mariadbata mysql -u root -p moy
# sudo docker inspect container-name | grep IPAddress


docker run --name mariamoy \
-p 3306:3306 \
-e MARIADB_ROOT_PASSWORD=moy \
-e MARIADB_USER=moy \
-e MARIADB_PASSWORD=moy \
-e MARIADB_DATABASE=moy \
-d mariadb
docker exec -it mariadbata mysql -u root -p moy